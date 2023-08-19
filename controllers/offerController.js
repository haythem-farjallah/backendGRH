import Offer from "../models/offerModel.js";

export const createOffer = async (req, res, next) => {
  try {
    const offer = await Offer.create(req.body);
    res.status(201).json({
      status: "success",
      data: { data: offer },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      status: "failure",
      error: "Error creating document",
    });
  }
};
