import { IBook } from "../Interface/book.interface";
import { IUser } from "../Interface/login";
import { useMyWishQuery } from "../redux/features/books/bookApi";
import WishTable from "./WishTable";

export interface IWish {
  _id: string;
  bookId?: IBook;
  userId?: IUser;
}

const WishList = () => {
  const { data, isLoading, isError } = useMyWishQuery(undefined);

  let myWish;

  if (isLoading) {
    myWish = <div>Loading....</div>;
  }

  if (!isError && !isLoading && data?.data?.length === 0) {
    myWish = (
      <div className="items-center text-2xl font-extrabold">No Books Found</div>
    );
  }

  if (!isLoading && data?.data?.length > 0) {
    myWish = data?.data.map((wish: IWish) => (
      <WishTable wish={wish} key={wish._id} />
    ));
  }

  return (
    <div>
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 text-red-500 font-extrabold">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Author
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Genre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Publish Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{myWish}</tbody>
      </table>
    </div>
  );
};

export default WishList;
