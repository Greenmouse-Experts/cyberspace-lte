import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import AppLayout from "./components/AppLayout";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Dealers from "./pages/Dealers";
import Coverage from "./pages/Coverage";



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/dealers",
        element: <Dealers />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;