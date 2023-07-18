/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import books from "../assets/the story.jpg";
import { MdOutlineDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IBook } from "../Interface/book.interface";
import { IUser } from "../Interface/login";

interface IDetailes {
  details: IBook;
  user: IUser | null | undefined;
  handleDeleteBook: any;
}

const DetailsBooksPage = ({ details, user, handleDeleteBook }: IDetailes) => {
  return (
    <section className="flex lg:flex-row  justify-center my-10 mx-10 ">
      <div>
        {details?.image ? (
          <img className="w-2/3" src={details?.image} alt="" />
        ) : (
          <img className="w-2/3" src={books} alt="" />
        )}
      </div>
      <div className="w-2/3 mt-5 lg:mt-0">
        <div className="flex justify-between">
          <div>
            <button className="bg-red-500 text-white px-7 py-1 ">Sale</button>
          </div>
          <div className="flex item center gap-2 text-2xl ">
            {details?.userId === user?._id && (
              <Link
                to={`/editbook/${details?._id}`}
                className="border flex items-center p-2 "
              >
                <BiEdit />
                <span>Edit</span>
              </Link>
            )}

            {details?.userId === user?._id && (
              <button
                onClick={handleDeleteBook}
                className="border flex items-center p-2"
              >
                <MdOutlineDelete />
                <span>Delete</span>
              </button>
            )}
            <button className="border flex items-center p-2">
              <AiOutlineHeart />
              <span>Wish</span>
            </button>
          </div>
        </div>
        <p className="text-6xl font-bold mt-10">{details?.title}</p>
        <p className="text-lg mt-5">Author: {details?.author}</p>
        <p className="text-xl mt-5 ">
          Price : <span className="text-red-500">$10.00</span>
        </p>

        <p className="font-thin w-auto mt-10">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut
          fugit, sed quia consequuntur.Lorem ipsum dolor. Aquia sit amet, elitr,
          sed diam nonum eirmod tempor invidunt.
        </p>

        <div className="mt-20 flex gap-10">
          <div>
            <p>Genre: </p>
            <p>Publishcation Date : </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{details?.genre}</span>
            <span className="font-bold">
              {" "}
              {details?.publication
                ? details?.publication
                : "July 13, 2023"}{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsBooksPage;
