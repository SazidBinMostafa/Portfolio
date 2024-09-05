import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import ContactUs from "../Pages/ContactUs/ContactUs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/services",
          element: <Services></Services>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact-us",
          element: <ContactUs></ContactUs>
        },
      ]
    },
  ]);

export default router;