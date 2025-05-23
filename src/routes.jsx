import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Profile from "./pages/Profile/Profile";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import USPDetails from "./pages/USPCardDetails/USPDetails";
import PrivateRoute from "./private/PrivateRoute";
import NotFoundPage from "./pages/notFound/NotFound";
import ForgotPassword from "./pages/Forgot-password/Forgot-passord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "usp-details/:id",
        element: (
          <PrivateRoute>
            <USPDetails></USPDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "auth/login",
        element: <Login></Login>,
      },
      {
        path: "auth/register",
        element: <Register></Register>,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
