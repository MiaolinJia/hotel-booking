import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import HotelListPage from "./pages/HotelListPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/hotelList",
    element: <RootLayout />,
    children: [{ index: true, element: <HotelListPage /> }],

  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
