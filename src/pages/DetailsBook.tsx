import DetailsBooksPage from "../component/DetailsBooksPage";
import Review from "../component/Review";

const DetailsBook = () => {
  return (
    <div className="mx-20">
      <DetailsBooksPage />
      <hr className="border-black border-1 mx-10" />
      <Review />
    </div>
  );
};

export default DetailsBook;
