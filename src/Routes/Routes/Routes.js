import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
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
                loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) =>
                fetch(`http://localhost:5000/courses/${params.id}`),
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
          <div className="pt-16 block m-auto">
            <h1 className='text-5xl text-amber-400'>404</h1>
            <h1 className="text-5xl">Sorry Page not Found</h1>
          </div>
        ),
      }
])