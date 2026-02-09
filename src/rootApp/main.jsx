import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SideBar from "../components/global/sideBar/content.jsx";
import Resume from "../resume/page.jsx";
import ContactMe from "../contact/page.jsx";
import Projects from "../Project/Projects/page.jsx";
import DetailProject from "../Project/detailProject/page.jsx";
import { HelmetProvider } from "react-helmet-async";
import AboutMe from "../aboutMe/page.jsx";
import LayoutMyProjects from "../Project/layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: () => redirect("/AboutMe"),
  },
  {
    path: "/AboutMe",
    element: <AboutMe />,
  },
  {
    path: "/Resume",
    element: <Resume />,
  },
  {
    path: "/Projects",
    element: <LayoutMyProjects />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: "detailProject/:id",
        element: <DetailProject />,
      },
    ],
  },
  {
    path: "/Contact",
    element: <ContactMe />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="flex md:justify-between md:flex-row sm:flex-col p-3.5 bg-slate-800 font-quickSand">
        <div>
          <SideBar />
        </div>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>,
);
