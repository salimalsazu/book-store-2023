/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useNavigate, useParams } from "react-router-dom";
import DetailsBooksPage from "../component/DetailsBooksPage";
import Review from "../component/Review";
import {
  useDeleteBookMutation,
  useGetReviewsQuery,
  usePostReviewMutation,
  useSingleBookQuery,
} from "../redux/features/books/bookApi";
import { IBook } from "../Interface/book.interface";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../redux/hook";
import { IUser, RootState } from "../Interface/login";
import { useEffect } from "react";

export type IReview = {
  name?: string;
  email?: string;
  image?: string | undefined;
  description: string;
  _id?: string;
  createdAt?: string;
};

const DetailsBook = () => {
  const user: IUser | null | undefined = useAppSelector(
    (state: RootState) => state.auth
  );

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IReview>();

  const { id } = useParams();

  const [postReview] = usePostReviewMutation();

  const postMyReview = (data: IReview) => {
    const review = {
      id: id,
      data: {
        name: user?.name,
        description: data.description,
        email: user?.email,
      },
    };

    // console.log(review);

    postReview(review);
  };

  const { data } = useSingleBookQuery(id);

  const {
    data: reviews,
    isLoading,
    isError,
  } = useGetReviewsQuery(id, { pollingInterval: 2000 });

  const details: IBook = data?.data;

  console.log(details);

  let gettingReviews;

  if (isLoading) {
    gettingReviews = (
      <p className="items-center text-2xl font-extrabold">Loading...</p>
    );
  }

  if (!isError && !isLoading && reviews?.data?.length == 0) {
    gettingReviews = (
      <div className="items-center text-2xl font-extrabold">
        No Reviews Found
      </div>
    );
  }

  if (!isLoading && reviews?.data?.length > 0) {
    gettingReviews = reviews?.data.map((review: IReview) => (
      <Review review={review} key={review._id} />
    ));
  }

  const [deleteBook] = useDeleteBookMutation();

  const handleDeleteBook = () => {
    deleteBook(id);
    window.alert(`Are you sure you want delete ${details.title}`);
    navigate("/books");
  };

  return (
    <div className="mx-20">
      <DetailsBooksPage
        details={details}
        user={user}
        handleDeleteBook={handleDeleteBook}
      />
      <hr className="border-black border-1 mx-10" />
      <div>
        <h1 className="my-10 text-lg">Review About This Product</h1>
      </div>
      {gettingReviews}
      <div>
        <div className="border border-gray-400 relative h-32 mt-10">
          <form onSubmit={handleSubmit(postMyReview)}>
            <textarea
              className="w-full h-32 p-2"
              placeholder="Write your comment in here..."
              {...register("description")}
            />
            <div className="bg-red-500 text-white px-6 py-2 absolute right-3 bottom-3">
              <button type="submit">Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsBook;
