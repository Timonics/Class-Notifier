import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import FooterNav from "../components/footer-nav";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export default function MainPageLayout() {
  const { setIsAuthenticated } = useAuth();

  //testing purposes
  useEffect(() => {
    setIsAuthenticated(true);
  }, []);

  return (
    <div className="p-4 max-w-lg max-sm:w-full mx-auto min-h-screen flex flex-col items-center gap-5">
      <div className="w-full">
        <Nav />
      </div>
      <Outlet />
      <FooterNav />
    </div>
  );
}
