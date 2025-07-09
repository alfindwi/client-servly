import { AppLayout } from "@/components/appLayout";
import { Home } from "@/pages/home";
import { HowWorks } from "@/pages/howWorks";
import { Providers } from "@/pages/providers";
import { Services } from "@/pages/services";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject
} from "react-router-dom";

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
    ],
  },
];



export default function Router() {
  return <RouterProvider router={createBrowserRouter(route)} />;
}