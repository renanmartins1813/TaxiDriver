import { createBrowserRouter } from "react-router";
import App from "../App";
import SelectRoute from "../pages/SelectRoute";
import ShowRoute from "../pages/ShowRoute";
import Drivers from "../pages/Drivers";

export const router = createBrowserRouter([{
	path: "/",
	element: <App />,
	children: [
		{ path: "", element: <SelectRoute /> },
		{ path: "/maps", element: <ShowRoute /> },
		{ path: "/drivers", element: <Drivers /> },
	],
}])
