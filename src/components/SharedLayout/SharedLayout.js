import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const SharedLayout = () => {
  return (
    <div className="sharedLayoutContainer">
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedLayout