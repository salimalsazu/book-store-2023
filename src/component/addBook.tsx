/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAddBookMutation } from "../redux/features/books/bookApi";

interface IAddNewBook {
  title: string;
  genre: string;
  author: string;
  publication: string;
  image?: string | undefined;
}


const AddNewBook = () => {
  const [addBook, { isError, error }] = useAddBookMutation();

  const { register, handleSubmit } = useForm<IAddNewBook>();

  const handleAddBook = (data: IAddNewBook) => {
    addBook(data);
    toast.success("Book added Successfully!", { autoClose: 400 });
  };

  let inputError =  null

  if (isError && error) {
    inputError = <p>{error?.data?.errorMessages[0].message}</p>;
  }

  return (
    <section className="px-[15px] lg:px-0 py-[50px] mt-[60px] bg-light-bg">
      <div className="container mx-auto w-full lg:w-[700px] p-5 bg-white shadow-book-details-card">
        <h2 className="text-xl font-bold text-dark-text mb-5">Add New Book</h2>
        <form onSubmit={handleSubmit(handleAddBook)}>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="" className="text-base font-medium text-gray-900">
                Title
              </label>
            </div>
            <div className="mt-2.5">
              <input
                type="text"
                id="title"
                placeholder="Enter your Book Title"
                {...register("title")}
                className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>
          <div className="flex gap-5 w-full mt-3">
            <div className="w-full">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Author
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  type="text"
                  placeholder="Enter your Author Name"
                  {...register("author")}
                  className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Genre
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  type="text"
                  placeholder="Enter your genre"
                  {...register("genre")}
                  className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Publication Date
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="publication"
                  placeholder="Enter your Publication date"
                  {...register("publication")}
                  className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="text-base font-medium text-gray-900">
                Book Image
              </label>
            </div>
            <div className="mt-2.5">
              <input
                type="url"
                id="image"
                placeholder="Image link is in here..."
                {...register("image")}
                className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>
          <div>
            <p className="text-red-500">{inputError}</p>
          </div>
          <div className="mt-5 bg-blue-500 text-white w-32">
            <button
              className="text-lg font-medium bg-blue-500 text-white bg-etlc-theme py-2 px-5"
              type="submit"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewBook;
