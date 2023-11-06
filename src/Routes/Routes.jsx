import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import AddFoodPage from "../Pages/AddFoodPage/AddFoodPage";
import SignUpPage from "../Pages/SignUpPage/signUpPage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AvailableFoodPage from "../Pages/AvaillableFoodPgae/AvailableFoodPage";


const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children : [
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
          path:'/addFood',
          element:<PrivateRoute><AddFoodPage></AddFoodPage></PrivateRoute>
         
        },
        {
          path:'/signUp',
          element : <SignUpPage></SignUpPage>
        },
        {
          path:'/signIn',
          element:<SignInPage></SignInPage>
        },{
          path:'/availableFoods',
          element:<AvailableFoodPage></AvailableFoodPage>
        }
      ]
    }
])
export default router