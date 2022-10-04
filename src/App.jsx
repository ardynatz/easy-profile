import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/Error";
import Contact from "./Components/Contact";
import Project from "./Components/Projects";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
};

const Projects = () => {
  return (
    <>
      <Navbar />
      <main>
        <Project />
      </main>
      <Footer />
    </>
  );
};

const Contacts = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Index />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contacts />,
  },
]);

export default function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}
