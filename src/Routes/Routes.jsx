import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import AddFoodPage from "../Pages/AddFoodPage/AddFoodPage";
import SignUpPage from "../Pages/SignUpPage/signUpPage";
import SignInPage from "../Pages/SignInPage/SignInPage";


const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      children : [
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
          path:'/addFood',
          element:<AddFoodPage></AddFoodPage>
         
        },
        {
          path:'/signUp',
          element : <SignUpPage></SignUpPage>
        },
        {
          path:'/signIn',
          element:<SignInPage></SignInPage>
        }
      ]
    }
])
export default router