import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

export default function Maps() {
	const shopperLocation = { lat: -23.5233, lng: -46.67423 }
	const [map, setMap] = useState<google.maps.Map | null>(null)
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: String(process.env.GOOGLE_API_KEY)
	})

	function markLoad() {
		console.log("mark loaded");

	}

	if (!isLoaded) {
		return (<div>Maps is Loading</div>)
	}

	return (
		<div className="maps">
			<div className="maps__map">
				<GoogleMap
					center={shopperLocation}
					zoom={18}
					options={{
						zoomControl: false,
						streetViewControl: false,
						mapTypeControl: false,
						fullscreenControl: false
					}}
					mapContainerStyle={{ width: '100%', height: '100%' }}
					onLoad={map => setMap(map)}
				>
					<Marker position={shopperLocation} />
					<Marker
						position={{
							lat: -23.523109845501015,
							lng: -46.6742202762543,
						}}
						onLoad={markLoad} />
				</GoogleMap>

			</div>
			<button className="maps__button"
				onClick={() => {
					map?.panTo(shopperLocation)
				}}
			>Reset Map</button>

		</div>


	)
}
