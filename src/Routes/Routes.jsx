import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import AddFoodPage from "../Pages/AddFoodPage/AddFoodPage";
import SignUpPage from "../Pages/SignUpPage/signUpPage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AvailableFoodPage from "../Pages/AvaillableFoodPgae/AvailableFoodPage";
import DetailsPage from "../Pages/DetailsPage/DetalisPage";
import useAxios from "../hooks/useAxios";

const secureAxios  =useAxios()
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
          element:<PrivateRoute><AvailableFoodPage></AvailableFoodPage></PrivateRoute>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
          loader : ({params}) => secureAxios.get(`/food/${params.id}`)
        }
      ]
    }
])
export default router