import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Course from "../../pages/Shared/Course/Course";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://tutorial-website-server.vercel.app/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch('https://tutorial-website-server.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({ params }) =>
                fetch(`https://tutorial-website-server.vercel.app/courses/${params.id}`),
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) =>
                fetch(`https://tutorial-website-server.vercel.app/courses/${params.id}`),
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: (
          <div className="pt-16 block m-auto text-center">
            <h1 className='text-6xl text-amber-400 font-bold'>404</h1>
            <h1 className="text-5xl">Sorry Page not Found</h1>
            <button className="btn btn-square loading mt-5 bg-amber-400"></button>
          </div>
        ),
      }
])