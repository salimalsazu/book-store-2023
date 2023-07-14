/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IAddNewBook {
  title: string;
  genre: string;
  publication: string;
  image?: string;
}

const AddNewBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddNewBook>();
  const handleAddBook = (payload: IAddNewBook) => {
    const { title, genre, image, publication } = payload;
    const addNewBookData = {
      title,
      genre,
      image,
      publication,
    };
    console.log(addNewBookData);
    toast.success("Book added Successfully!", { autoClose: 400 });
  };

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
                {...register("title", { required: "Title Is required" })}
                className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
              {errors.title && (
                <p className="text-red-500 text-[12px] mb-3">
                  {errors.title.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-5 w-full mt-3">
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
                  id="genre"
                  placeholder="Enter your genre"
                  {...register("genre", { required: "Genre is required" })}
                  className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
                {errors.genre && (
                  <p className="text-red-500 text-[12px] mb-3">
                    {errors.genre.message}
                  </p>
                )}
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
                  {...register("publication", {
                    required: "Publication date is required",
                  })}
                  className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
                {errors.publication && (
                  <p className="text-red-500 text-[12px] mb-3">
                    {errors.publication.message}
                  </p>
                )}
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
                type="file"
                id="image"
                {...register("image", { required: "Image is required" })}
                className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
              {errors.image && (
                <p className="text-red-500 text-[12px] mb-3">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-5 bg-blue-500 text-white w-32">
           <button className="text-lg font-medium bg-blue-500 text-white bg-etlc-theme py-2 px-5" type="submit" >Add Book</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewBook;
