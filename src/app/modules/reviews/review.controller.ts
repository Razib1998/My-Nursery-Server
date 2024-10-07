import { Request, Response } from "express";
import { ReviewServices } from "./review.service";

const addReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    const { slug } = req.params;
    const result = await ReviewServices.addReview(slug, reviewData);
    res.json({
      success: true,
      message: "Movie is Created Successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Movie could not created",
      error: err,
    });
  }
};
// const getAllMovies = async (req: Request, res: Response) => {
//   try {
//     const result = await MovieServices.getAllMovies();
//     res.json({
//       success: true,
//       message: "Movies are fetch Successfully!",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch the data",
//       error: err,
//     });
//   }
// };
// const getMovieById = async (req: Request, res: Response) => {
//   try {
//     const { movieId } = req.params;
//     const result = await MovieServices.getMovieById(movieId);
//     res.json({
//       success: true,
//       message: "Movie find by id  Successfully!",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch the data",
//       error: err,
//     });
//   }
// };
// const getMovieBySlug = async (req: Request, res: Response) => {
//   try {
//     const { slug } = req.params;
//     const result = await MovieServices.getMovieBySlug(slug);
//     res.json({
//       success: true,
//       message: "Movie find by slug  Successfully!",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch the data",
//       error: err,
//     });
//   }
// };

export const ReviewControllers = {
  addReview,
  //   getAllMovies,
  //   getMovieById,
  //   getMovieBySlug,
};
