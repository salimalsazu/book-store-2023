/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import "../style/BookCard.css";

const SingleBookCard = ({ book }: any) => {
  const { author, title, genre, image } = book;

  console.log("books.....", book);

  return (
    <div className="book-card">
      {image ? (
        <img
          className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
          src={image}
          alt="book"
        />
      ) : (
        <img
          className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
          src="https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg"
          alt="book"
        />
      )}

      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="space-y-2 mt-4 h-full">
          <h4 className="lws-bookName">{title}</h4>
          <p className="lws-author">{author}</p>
          <p className="lws-author">Genre: {genre} </p>

          <p className="lws-price">Publication: July 13, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBookCard;
