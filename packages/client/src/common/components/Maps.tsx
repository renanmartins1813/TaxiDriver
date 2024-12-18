import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

export default function Maps() {
	const shopperLocation = { lat: -23.5233, lng: -46.67423 }
	const [map, setMap] = useState<google.maps.Map | null>(null)
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: String(process.env.GOOGLE_API_KEY)
	})

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
					onLoad={(map) => {
						setMap(map)
						console.log(map);

					}}
				>
					<MarkerF position={shopperLocation} />
				</GoogleMap>

			</div>
			<button className="maps__button"
				onClick={() => {
					map?.panTo(shopperLocation)
					map?.setZoom(18)
				}}
			>Reset Map</button>

		</div>


	)
}
