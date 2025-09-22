import ReactDOM from "react-dom/client";
import App from "./pages/App";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import ThemeProvider from "./contexts/ThemeProvider";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {index:true,element:<Home/>},
            {path:'/post',element:<Post/>}
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>
        <RouterProvider router={routes} />
    </ThemeProvider>
);