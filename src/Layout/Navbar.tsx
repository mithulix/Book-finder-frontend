/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../Redux/hook";
import { auth } from "../Auth/firebase";
import { setUser } from "../Redux/features/user/userSlice";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import bookIcon from '../assets/book-icon.svg'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShoppingCart, FiUser } from 'react-icons/fi';

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.cart);
  const { books: wishList } = useAppSelector((state) => state.wishlist);
  let cartQuantity = 0;
  for (let i = 0; i < books.length; i++) {
    cartQuantity += books[i].quantity!;
  }

  const handleLogout = () => {
    console.log('Logout');
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
  };

  return (
    <div className="pb-[5rem]">
      <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
        <div className="h-full w-full bg-white/60">
          <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
            <div className="px-4 flex items-center justify-between">
              <div><Link to="/">
                <img className="h-8" src={bookIcon} alt="logo" />
              </Link>
              </div>
              <div>
                <Button className="btn btn-ghost normal-case font-bold text-2xl px-2">
                  <Link to="/">Book Finder</Link>
                </Button>
              </div>
            </div>
            <div>
              <ul className="flex items-center">
                <li>
                  <Link to="/books">
                    <Button className="btn btn-ghost normal-case font-medium text-[1rem]">
                      All Books
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to='/coupon'>
                    <Button className="btn btn-ghost normal-case font-medium text-[1rem]">
                      Coupon
                    </Button>
                  </Link>
                </li>
                <div className="dropdown dropdown-end mr-3">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <Link to='/wishlist'>
                      <div className="indicator text-white">
                        <div className="font-medium text-black">
                          <MdOutlineFavoriteBorder size={25} />
                        </div>
                        <span className="badge badge-sm indicator-item text-white">
                          {wishList.length}
                        </span>
                      </div>
                    </Link>
                  </label>
                </div>
                <div className="dropdown dropdown-end ">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar text-white">
                    <Link to={`/cart`}>
                      <div className="indicator text-white">
                        <div className="font-medium text-black">
                          <FiShoppingCart size={25} />
                        </div>
                        <span className="badge badge-sm indicator-item text-white">
                          {cartQuantity}
                        </span>
                      </div>
                    </Link>
                  </label>
                </div>
                <div className="flex-none px-2">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-8 rounded font-medium">
                        <FiUser size={25}/>
                      </div>
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow font-medium text-md bg-gray-100 rounded  w-52">
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li><a>Settings</a></li>
                      {!user.email ? (
                        <>
                          <li><Link to="/signup">Signup </Link></li>
                          <li><Link to="/login">Login</Link></li>
                        </>
                      ) : (
                        <div>
                          <li><Link to={`/add-book`}>Add book </Link></li>
                          <li> <span onClick={handleLogout}>Logout</span></li>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}