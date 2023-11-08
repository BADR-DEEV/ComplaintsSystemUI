import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginScreen from "./Pages/Login/LoginScreen";
import PrivateRoute from "./Utilities/PrivateRoute";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Utilities/ThemeProvider";
import Home from "./Pages/home/Home";
import Users from "./Pages/users/Users";
import { Footer } from "./Components/Footer/Footer";
import { Menu } from "./Components/Menu/Menu";
import { Navbar } from "./Components/Navbar/Navbar";
import "./styles/global.scss"
import { NotFound } from "./Pages/NotFound/NotFound";
import Complaints from "./Pages/Complaints/Complaints";


function App() {
  

  const Layout = () => {
    return (
      
      <>
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
      </>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/dashboard/home",
              element: <Home />,
            },
            {
              path: "/dashboard/users",
              element: <Users />,
            },
            {
              path: "/dashboard/Complaints",
              element: <Complaints />,
            },
          ],
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />,
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
