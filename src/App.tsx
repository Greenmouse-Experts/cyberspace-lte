
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Dealers from "./pages/Dealers";
import Coverage from "./pages/Coverage";
import BusinessPlan from "./pages/BusinessPlan";
import PersonalPlan from "./pages/PersonalPlan";


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
      },
      {
        path: "/businessplan",
        element: <BusinessPlan />,
      },
      {
        path: "/personalplan",
        element: <PersonalPlan />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



// import { Suspense, lazy } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import AppLayout from "./components/AppLayout";
// import Loader from "./components/Loader";
// const Home = lazy(() => import("./pages/Home"));
// const ProductDetail = lazy(() => import("./pages/ProductDetail"));
// const CartPage = lazy(() => import("./pages/CartPage"));
// const Dealers = lazy(() => import("./pages/Dealers"));
// const Coverage = lazy(() => import("./pages/Coverage"));
// const BusinessPlan = lazy(() => import("./pages/BusinessPlan"));
// const PersonalPlan = lazy(() => import("./pages/PersonalPlan"));

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/product/:id",
//         element: <ProductDetail />,
//       },
//       {
//         path: "/cart",
//         element: <CartPage />,
//       },
//       {
//         path: "/dealers",
//         element: <Dealers />,
//       },
//       {
//         path: "/coverage",
//         element: <Coverage />,
//       },
//       {
//         path: "/businessplan",
//         element: <BusinessPlan />,
//       },
//       {
//         path: "/personalplan",
//         element: <PersonalPlan />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <Suspense fallback={<Loader />}>
//       <RouterProvider router={router} />
//     </Suspense>
//   );
// }

// export default App;









