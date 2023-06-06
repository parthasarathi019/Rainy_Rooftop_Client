import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Nav_With_Banner from "./Components/Header/Nav_With_Banner";
import Roof_Main_Page from "./Components/Roof_Main_Page/Roof_Main_Page";
import Menu from "./Components/Menu/Menu";
import Our_Shop from "./Components/Our_Shop/Our_Shop";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProviders from "./Providers/AuthProviders";
import Default_Dashdoard from "./Dashboard/Default_Dashdoard";
import Private_Route from "./Private_Route/Private_Route";
import Add_Item from "./Dashboard/Admin/Add_Item/Add_Item";
import Manage_Item from "./Dashboard/Admin/Manage_Item/Manage_Item";
import Payment from "./Dashboard/User/Payment/Payment";
import Charts from "../src/Dashboard/Admin/Charts/Charts";


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from "./Dashboard/Dashboard";
import All_User from "./Dashboard/Admin/All_User/All_User";
import Admin_Route from "./Admin_Route/Admin_Route";
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav_With_Banner></Nav_With_Banner>,
    children: [
      {
        path: "/",
        element: <Roof_Main_Page></Roof_Main_Page>,
      },
      {
        path: "/Menu",
        element: <Menu></Menu>,
      },
      {
        path: "Shop/:category",
        element: <Our_Shop></Our_Shop>,
      },
      {
        path: "/Charts",
        element: <Charts></Charts>,
      },
    ],
  },


  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/Register",
    element: <Register></Register>,
  },

  

  {
    path: "/Dashboard",
    element: <Private_Route><Dashboard></Dashboard></Private_Route>,
    children: [
     
      {
        path: "Home",
        element: <Default_Dashdoard></Default_Dashdoard> ,
      },
      {
        path: "All_User",
        element: <All_User></All_User> ,
      },
      {
        path: "Add_Item",
        element: <Admin_Route><Add_Item></Add_Item></Admin_Route> ,
      },
      {
        path: "Manage_Item",
        element: <Admin_Route><Manage_Item></Manage_Item></Admin_Route> ,
      },
      {
        path: "Payment",
        element: <Payment></Payment> ,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <section className="md:max-w-[1280px]	mx-auto h-screen">
          <RouterProvider router={router} />
        </section>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>
);
