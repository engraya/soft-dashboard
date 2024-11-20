import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import SideNav from "../SideNav/SideNav";

function Main() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [pageDescription, setPageDescription] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setPageDescription("Welcome, Lawal Wahab");
        break;
      case "/dashboard/cash-airtime":
        setPageDescription("Airtime to Cash");
        break;
      case "/dashboard/transaction-history":
        setPageDescription("Transaction History");
        break;
      case "/dashboard/support":
        setPageDescription("Help and Support");
        break;
      case "/dashboard/profile":
        setPageDescription("Your Profile");
        break;
      default:
        setPageDescription("Welcome, Lawal Wahab");
    }
  }, [location.pathname]);

  return (
    <div className="flex">
      <SideNav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="relative w-full lg:ml-56">
      <div
            className={`${
              showSideBar &&
              "absolute bg-opacity-30 w-full h-full z-40"
            }`}
            onClick={() => setShowSideBar(false)}
          ></div>
        <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;