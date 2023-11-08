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

import ManageFoodPage from "../Pages/ManageFoodPage/ManageFoodPage";
import UpdatePage from "../Pages/UpdatePage/Updatepage";
import ManagePage from "../Pages/ManagePage/ManagePage";
import FoodRequestPage from "../Pages/FoodRequestPage/FoodRequestPage";
import ContactPage from "../Pages/ContactPage/ContactPage";


 


 
 
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
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
          loader : ({params}) => fetch(`https://food-sharing-server.vercel.app/food/${params.id}`,{credentials:'include'})
          
        },
        {
          path : '/manageFoods',
          element : <PrivateRoute><ManageFoodPage></ManageFoodPage></PrivateRoute>
          
         
        },
        {
          path:'/update/:id',
          element:<UpdatePage></UpdatePage>,
          loader : ({params}) => fetch(`https://food-sharing-server.vercel.app/food/${params.id}`,{credentials:'include'})
        },
        {
          path:'/manage/:id',
          element: <ManagePage></ManagePage>
        },
        {
          path:'/foodRequest',
          element:<PrivateRoute><FoodRequestPage></FoodRequestPage></PrivateRoute>
        },
        {
          path:'/contact',
          element:<PrivateRoute><ContactPage></ContactPage></PrivateRoute>
        }
      ]
    }
])

export default router