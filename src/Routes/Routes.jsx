import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage";
import Contact from "../pages/Contact/Contact";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/shared/Terms";
import Fertilizers from "../pages/Fertilizers/Fertilizers";
import FertilizerDetails from "../pages/Fertilizers/FertilizerDetails";
import Seeds from "../pages/Seeds/Seeds";
import ProgressBar from "../pages/ProgressBar/ProgressBar";
import Payment from "../pages/Payment/Payment";
import Checkout from "../pages/Payment/Checkout";
import Progress from "../pages/ProgressBar/Progress";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/progressbar',
            element:<ProgressBar></ProgressBar>
          },
          {
            path:'View_Recipe/:id',
            element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:7000/chef/${params.id}`)
          },
          {
            path:'/fertilizer',
            element:<Fertilizers></Fertilizers>,
            loader: () => fetch('http://localhost:7000/fertilizersData')
          },
          {
            path: '/FertilizerDetails/:id',
            element:<FertilizerDetails></FertilizerDetails>,
            loader:({params}) => fetch(`http://localhost:7000/fertilizersData/${params.id}`)
          },
          {
            path:'/seeds',
            element:<Seeds></Seeds>,
            loader: () => fetch('http://localhost:7000/seeds')
          },
          {
            path:'/payment',
            element:<Checkout></Checkout>
          },
          {
            path:'/contact',
            element:<Contact></Contact>
          },
          {
            path: '/terms',
            element:<Terms></Terms>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          }
        ]
      },
])

export default router;