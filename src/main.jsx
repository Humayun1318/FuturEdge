import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import DataContext from "./context/DataContext/DataContext";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import "aos/dist/aos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DataContext>
        <RouterProvider router={router}></RouterProvider>
      </DataContext>
    </AuthProvider>
  </StrictMode>
);
