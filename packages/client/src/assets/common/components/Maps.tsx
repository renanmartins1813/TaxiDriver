import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useEffect } from "react";

export default function Maps() {
	const shopperLocation = { lat: -23.523580920829797, lng: -46.674265806746206 }

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: String(process.env.GOOGLE_API_KEY)
	})

	if (!isLoaded) {
		return (<div>Maps is Loading</div>)
	}

	// useEffect(() => {
	// 	console.log(process.env.GOOGLE_API_KEY);
	//
	// })

	return (
		<div className="Maps">
			Showing Maps
			<GoogleMap center={shopperLocation}>

			</GoogleMap>
		</div>
	)
}
