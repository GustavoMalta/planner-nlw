import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TripDetails } from "./pages/trip-details";
import { CreateTripPage } from "./pages/create-trip";

const router = createBrowserRouter([
  { path: "/", element: <CreateTripPage /> },
  { path: "/trip-details/:tripId", element: <TripDetails /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}
