import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SideBar from "./personalDataBar/sidebar.jsx";
import Resume from "./resume/education.jsx";
import MainContent from "./About_Me/mainContent.jsx";
import MyProject from "./Project/myProject.jsx";
import ContactMe from "./contact/my_contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/project",
    element: <MyProject />,
  },
  {
    path: "/contact",
    element: <ContactMe />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex sm:flex-col md:flex-row font-quickSand">
      <SideBar />
      <div className="flex w-full justify-end p-3 bg-slate-800">
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>
);
