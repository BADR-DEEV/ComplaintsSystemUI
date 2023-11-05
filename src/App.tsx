import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginScreen from "./Pages/Login/LoginScreen";
import PrivateRoute from "./Utilities/PrivateRoute";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Utilities/ThemeProvider";
import Home from "./Pages/home/Home";
import Users from "./Pages/users/Users";
import { Footer } from "./Components/Footer/Footer";
import { Menu } from "./Components/Menu/Menu";
import { Complaints } from "./Pages/Complaints/Complaints";
import { Navbar } from "./Components/Navbar/Navbar";
import "./styles/global.scss"

function App() {


  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
              <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/Complaints",
          element: <Complaints />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
  ]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </ThemeProvider>
    </>
  )
}

export default App
