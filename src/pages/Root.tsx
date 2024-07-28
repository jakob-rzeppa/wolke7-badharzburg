import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default Root;
