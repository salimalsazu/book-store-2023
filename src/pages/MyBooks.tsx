import MySingleBook from "@/component/MySingleBook";

const MyBooks = () => {
  return (
    <div className="h-full mx-10">
      <p className="font-extrabold text-4xl mt-20 text-center mb-10">
        My Book List
      </p>
      <MySingleBook />
    </div>
  );
};

export default MyBooks;
