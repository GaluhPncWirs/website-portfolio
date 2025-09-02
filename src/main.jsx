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
      <div className="flex sm:flex-col md:flex-row font-quickSand">
        <SideBar />
        <div className="flex w-full justify-end p-3 bg-slate-800">
          <RouterProvider router={router} />
        </div>
      </div>
    </HelmetProvider>
  </StrictMode>
);
