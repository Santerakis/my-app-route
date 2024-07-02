import './App.css';
import Spin from "./pages/spin";
import Time from "./pages/time";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
    // const router = createBrowserRouter([
    //     {path: "/", element: <div>Home</div>,},
    //     {path: "spin", element: <Spin />},
    //     {path: "time", element: <Time />,},
    // ])
    // return (
    //    <RouterProvider router={router} />
    // );

    return (
        <Time />
    )
}

export default App;
