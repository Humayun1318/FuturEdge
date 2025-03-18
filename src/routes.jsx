import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello form world</h1>
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