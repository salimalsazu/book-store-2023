import books from "../assets/the story.jpg";

const DetailsBooksPage = () => {
  return (
    <section className="flex lg:flex-row  justify-center my-10 mx-10 ">
      <div>
        <img className="w-2/3" src={books} alt="" />
      </div>
      <div className="w-2/3 mt-5 lg:mt-0">
        <button className="bg-red-500 text-white px-7 ">Sale</button>
        <p className="text-6xl font-bold mt-10">The Story About Me</p>
        <p className="text-lg mt-5">Author: Salim Al Sazu</p>
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
            <p>Genre:</p>
            <p>Publishcation Date : </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Novel</span>
            <span className="font-bold">July 13, 2023</span>
          </div>
        </div>
        <div className="flex gap-5 mt-10">
          <button className="bg-blue-500 text-white px-6 py-2">
            Edit Book
          </button>
          <button className="bg-red-500 text-white px-6 py-2">
            Delete Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailsBooksPage;
