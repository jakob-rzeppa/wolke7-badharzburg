import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const EquipmentPage = lazy(() => import("./pages/EquipmentPage"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const LegalNoticePage = lazy(() => import("./pages/LegalNoticePage"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/equipment",
    element: <EquipmentPage />,
  },
  {
    path: "/legal-notice",
    element: <LegalNoticePage />,
  },
  {
    path: "Location",
    element: <LocationPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routes.map((route) => {
      return {
        path: route.path,
        element: (
          <Suspense fallback={<Loading size="xl" />}>{route.element}</Suspense>
        ),
      };
    }),
  },
]);
