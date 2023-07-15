import { useGetBooksQuery } from "../redux/features/books/bookApi";
import SingleBookCard from "./SingleBookCard";

const BookCard = () => {
  const { data } = useGetBooksQuery(undefined);

  console.log(data);

  return (
    <section className="flex flex-col justify-center items-center mx-10">
      <h1 className="text-6xl font-bold my-2"> Discover Your Next Book </h1>
      <p className="font-extralight text-gray-500 mb-14 text-center w-5/12">
        "The best and most beautiful things in the world cannot be seen or even
        heard, but must be felt with the heart."
      </p>
      <div className="grid grid-cols-3 justify-center items-center mx-20 gap-5">
        <SingleBookCard />
        <SingleBookCard />
        <SingleBookCard />
        <SingleBookCard />
        <SingleBookCard />
        <SingleBookCard />
        <SingleBookCard />
        <SingleBookCard />
        <SingleBookCard />
        <SingleBookCard />
      </div>
    </section>
  );
};

export default BookCard;
