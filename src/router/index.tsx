import { AppLayout } from "@/components/appLayout";
import { Home } from "@/pages/home";
import { HowWorks } from "@/pages/howWorks";
import { Providers } from "@/pages/forProviders";
import { Services } from "@/pages/services";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject
} from "react-router-dom";
import { Customer } from "@/pages/customer";

const route: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/how-it-works",
        element: <HowWorks />
      },
      {
        path: "/providers",
        element: <Providers />
      },
      {
        path: "/customers",
        element: <Customer />
      }
    ],
  },
];



export default function Router() {
  return <RouterProvider router={createBrowserRouter(route)} />;
}