import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SideBar from "../../components/global/sideBar/content.jsx";
import Resume from "../resume/page.jsx";
import ContactMe from "../contact/page.jsx";
import Projects from "../Project/Projects/page.jsx";
import DetailProject from "../Project/detailProject/page.jsx";
import { HelmetProvider } from "react-helmet-async";
import AboutMe from "../aboutMe/page.jsx";
import LayoutMyProjects from "../Project/layout.jsx";
import ConvetToPDF from "../ConvetToPDF/content.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/AboutMe"),
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
  {
    path: "/ConvertToPDF",
    element: <ConvetToPDF />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 font-quickSand">
        <div className="flex md:justify-between md:flex-row sm:flex-col mx-auto max-w-7xl p-3.5 min-h-screen print:flex-col print:bg-white">
          <SideBar />
          <RouterProvider router={router} />
        </div>
      </div>
    </HelmetProvider>
  </StrictMode>,
);
