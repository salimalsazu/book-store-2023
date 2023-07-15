/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook } from "../Interface/book.interface";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import SingleBookCard from "./SingleBookCard";

const BookCard = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery(undefined);

  console.log(isLoading);

  let gettingBooks;

  if (isLoading) {
    gettingBooks = (
      <p className="items-center text-2xl font-extrabold">Loading...</p>
    );
  }

  if (!isError && !isLoading && books?.data?.length === 0) {
    <div className="items-center text-2xl font-extrabold">No Books Found</div>;
  }

  if (!isLoading && books?.data?.length > 0) {
    gettingBooks = books?.data
      ?.slice(0, 10)
      .map((book: IBook) => <SingleBookCard book={book} key={book._id} />);
  }

  return (
    <section className="flex flex-col justify-center items-center mx-10">
      <h1 className="text-6xl font-bold my-2"> Discover Your Next Book </h1>
      <p className="font-extralight text-gray-500 mb-14 text-center w-5/12">
        "The best and most beautiful things in the world cannot be seen or even
        heard, but must be felt with the heart."
      </p>
      <div className="grid grid-cols-3 justify-center items-center mx-20 gap-5">
        {gettingBooks}
      </div>
    </section>
  );
};

export default BookCard;
