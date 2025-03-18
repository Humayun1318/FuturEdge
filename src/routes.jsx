import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/auth",
    element: <h3>This is auth element</h3>
  },
  {
    path: "*",
    element: <h1>Oppps!!!!</h1>
  }
])

export default router;