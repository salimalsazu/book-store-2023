import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import useAuthCheck from "./hook/userAuthCheck";

function App() {
  const userAuthCheck = useAuthCheck();

  return (
    <div>
      {!userAuthCheck ? (
        "Loading..."
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
