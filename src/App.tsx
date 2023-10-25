import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginScreen from "./Pages/LoginScreen";
import PrivateRoute from "./Utilities/PrivateRoute";
import DashboardScreen from "./Pages/DashboardScreen";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Utilities/ThemeProvider";
import Navbar from "./Components/Navbar";


function App() {


  const router = createBrowserRouter(
    [
      {
        path: "/login",
        element: <LoginScreen />,

      },
      {
        path: "*",
        element: <p>not found</p>
      },
      {

        path: "/",
        // element: <Navbar></Navbar>,
        element: <PrivateRoute />,
        children: [
          {
            path: "/",
            element: <DashboardScreen />
          },
          {
            path: "/dashboard",
            element: <DashboardScreen />
          },
          {
            path: "/profile",
            element: <p>profile</p>
          },
          {
            path: "/settings",
            element: <p>settings</p>
          },
          {
            path: "/logout",
            element: <p>logout</p>
          },
        ]


      }
    ]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </ThemeProvider>
    </>
  )
}

export default App
