import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MainLayout from "../layout/mainLayout/content";

export default function LayoutMyProjects() {
  return (
    <>
      <Helmet>
        <title>Project | Portfolio Galuh Panca Wirasa</title>
        <meta
          name="description"
          content="berbagai proyek website dan aplikasi yang telah saya kembangkan, mulai dari landing page, sistem informasi, hingga aplikasi berbasis API dengan teknologi modern seperti React dan Next.js"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Proyek | Portfolio Galuh Panca Wirasa"
        />
        <meta
          property="og:description"
          content="Kumpulan proyek unggulan yang mencerminkan keterampilan saya dalam pengembangan web front-end dan back-end, menggunakan teknologi modern dan responsif."
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
      </Helmet>
      <MainLayout propsTitle="My Project">
        <Outlet />
      </MainLayout>
    </>
  );
}
