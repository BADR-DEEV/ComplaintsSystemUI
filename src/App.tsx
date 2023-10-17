import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterScreen from "./Pages/LoginScreen";


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <RegisterScreen />,

    },

  ]);

  return (
    <>
      <RouterProvider router={router} fallbackElement = {<p>Loading...</p>} />

    </>
  )
}

export default App
