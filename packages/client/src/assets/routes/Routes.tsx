import { createBrowserRouter } from "react-router";
import App from "../../App";
import Forms from "../common/components/Forms";
import Maps from "../common/components/Maps";

export const router = createBrowserRouter([{
	path: "/",
	element: <App />,
	children: [
		{ path: "", element: <div>Forms</div> },
		{ path: "/maps", element: <div>Maps</div> },
	],
}])
