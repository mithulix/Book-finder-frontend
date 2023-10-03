/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import { auth } from "./Auth/firebase";
import { setLoading, setUser } from "./Redux/features/user/userSlice";
import { useAppDispatch } from "./Redux/hook";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div className=" font-['Quicksand'] text-black ">
      <Layout />
      <Toaster />
    </div>
  );
}

export default App;
