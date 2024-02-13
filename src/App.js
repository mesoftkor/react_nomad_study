import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={`${process.env.PUBLIC_URL}/`} element={Home} />
            <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={Detail} />
        </Route>
    )
);

function App() {
    console.log(process.env.PUBLIC_URL);
    return <RouterProvider router={router} />;
}

export default App;
