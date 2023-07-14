import pic from "../assets/Salim Al Sazu.png";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Review = () => {
  return (
    <div className="mx-10">
      <h1 className="my-10 text-lg">Review About This Product</h1>
      <div className="flex flex-col gap-5 my-10 ">
        <div className="flex gap-2 justify-start items-center text-gray-500">
          <img src={pic} alt="" className="w-10 h-10 rounded-full" />
          <p>Book is so gooooooooooood</p>
          <p className="ml-5">14/07/2023, 12.41 PM</p>
          <p className="ml-5 flex items-center">
            <AiFillLike></AiFillLike> <span>10</span>
          </p>
          <p className="ml-5 flex items-center">
            <AiFillDislike></AiFillDislike> <span>1</span>
          </p>
        </div>
        <div className="flex gap-2 justify-start items-center text-gray-500">
          <img src={pic} alt="" className="w-10 h-10 rounded-full" />
          <p>I learn a lot from this book</p>
          <p className="ml-5">14/07/2023, 12.41 PM</p>
          <p className="ml-5 flex items-center">
            <AiFillLike></AiFillLike> <span>7</span>
          </p>
          <p className="ml-5 flex items-center">
            <AiFillDislike></AiFillDislike> <span></span>
          </p>
        </div>
      </div>
      <div>
        <div className="border border-gray-400 relative h-32">
          <form action="">
            <textarea
              className="w-full h-32 p-2"
              name=""
              id=""
              placeholder="Write your comment in here..."
            />
          </form>
          <button className="bg-red-500 text-white px-6 py-2 absolute right-3 bottom-3">
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
