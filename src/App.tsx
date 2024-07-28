import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const Homepage = lazy(() => import("./pages/Homepage"));
const Booking = lazy(() => import("./pages/Booking"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Equipment = lazy(() => import("./pages/Equipment"));
const Location = lazy(() => import("./pages/Location"));
const LegalNotice = lazy(() => import("./pages/LegalNotice"));

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/equipment",
    element: <Equipment />,
  },
  {
    path: "/legal-notice",
    element: <LegalNotice />,
  },
  {
    path: "Location",
    element: <Location />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Loading size="xl" />}>
                {route.element}
              </Suspense>
            }
          />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
