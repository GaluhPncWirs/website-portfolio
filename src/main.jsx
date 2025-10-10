import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SideBar from "./components/personalDataBar/sidebar.jsx";
import Resume from "./resume/education.jsx";
import MainContent from "./About_Me/mainContent.jsx";
import MyProject from "./Project/myProject.jsx";
import ContactMe from "./contact/my_contact.jsx";
import DetailProject from "./Project/detailProject/detail.jsx";
import { HelmetProvider } from "react-helmet-async";

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
    path: "/Project",
    element: <MyProject />,
  },
  {
    path: "/Project/detailProject/:id",
    element: <DetailProject />,
  },
  {
    path: "/contact",
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
  </StrictMode>
);
