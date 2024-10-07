/* eslint-disable @typescript-eslint/no-explicit-any */
import { Movie } from "../movies/movies.model";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

const addReview = async (
  slug: string,
  reviewData: Partial<TReview>
): Promise<TReview | any> => {
  /**
   * Here we are using transaction rollback function to maintain error in database
   * We should use transaction rollback function, when we work with two
   * different database model and write the database.For this case we need
   * to use transaction rollback function.
   * */
  const session = await Review.startSession();
  // First we have to find the movies
  const movie = await Movie.findOne({ slug: slug });
  if (!movie) {
    throw new Error("Movie not found");
  }

  try {
    // Now We have to add a review under this movie..
    session.startTransaction();
    const review = await Review.create(
      [
        {
          movie: movie?._id,
          ...reviewData,
        },
      ],
      { session }
    );

    //   Now We have to update the total rating after successfully created a review.

    const reviewsCount = await Review.countDocuments(
      { movie: movie?._id },
      { session }
    );

    await Movie.updateOne({ slug }, { totalRating: reviewsCount }, { session });
    await session.commitTransaction();
    return review[0];
  } catch (err) {
    console.log(err);
    await session.abortTransaction();
  }
  session.endSession();
};

export const ReviewServices = {
  addReview,
};
