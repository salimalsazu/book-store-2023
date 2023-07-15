/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import DetailsBooksPage from "../component/DetailsBooksPage";
import Review from "../component/Review";
import { useSingleBookQuery } from "../redux/features/books/bookApi";
import { IBook } from "../Interface/book.interface";

const DetailsBook = () => {
  const { id } = useParams();

  const { data } = useSingleBookQuery(id);

  const details: IBook = data?.data;

  console.log(details);

  return (
    <div className="mx-20">
      <DetailsBooksPage details={details} />
      <hr className="border-black border-1 mx-10" />
      <Review />
    </div>
  );
};

export default DetailsBook;
