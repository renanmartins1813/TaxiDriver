import { createBrowserRouter } from "react-router";
import App from "../App";
import SelectRoute from "../pages/SelectRoute";
import ShowRoute from "../pages/ShowRoute";

export const router = createBrowserRouter([{
	path: "/",
	element: <App />,
	children: [
		{ path: "", element: <SelectRoute /> },
		{ path: "/maps", element: <ShowRoute /> },
	],
}])
