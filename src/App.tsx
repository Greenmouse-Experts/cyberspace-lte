import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Dealers from "./pages/Dealers";
import Coverage from "./pages/Coverage";
import BusinessPlan from "./pages/BusinessPlan";
import PersonalPlan from "./pages/PersonalPlan";
import { Provider } from "react-redux";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { store } from "./state/store";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Faq from "./pages/Faq";
import TermsAndCondition from "./pages/TermsAndCondition";



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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/privacy-policy",
        element:<PrivacyPolicy/>
      },
      {
        path:"faqs",
        element:<Faq/>
      },
      {
        path:"terms-conditions",
        element:<TermsAndCondition/>
      }
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {


  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
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
