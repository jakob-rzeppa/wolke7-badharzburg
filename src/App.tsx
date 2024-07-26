import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const Homepage = lazy(() => import("./pages/Homepage"));
const Booking = lazy(() => import("./pages/Booking"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Information = lazy(() => import("./pages/Information"));
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
    path: "/information",
    element: <Information />,
  },
  {
    path: "/legal-notice",
    element: <LegalNotice />,
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
              <Suspense fallback={<div>Loading...</div>}>
                {route.element}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
