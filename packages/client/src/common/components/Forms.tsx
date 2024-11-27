import { Autocomplete, Libraries, useLoadScript } from "@react-google-maps/api"
import { useRef } from "react"
import { useRideContext } from "../../context/RideContext"

export default function Forms() {
	const libraries: Libraries = ['places']
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: String(process.env.GOOGLE_API_KEY),
		libraries: libraries
	})

	const { origin, destination, setOrigin, setDestination } = useRideContext()
	const originRef = useRef<HTMLInputElement>(null)
	const destinationRef = useRef<HTMLInputElement>(null)

	function handleOrigin() {
		setOrigin(originRef.current?.value as string)
		console.log(origin);
	}

	function handleDestination() {
		setDestination(destinationRef.current?.value as string)
		console.log(destination)
	}

	if (!isLoaded) {
		return (<div>Forms is Loading</div>)
	}

	return (
		<form action="/maps" className="forms">
			<Autocomplete>
				<input type="text" placeholder="Origin" ref={originRef} onChange={handleOrigin} className="forms__input" />
			</Autocomplete>
			<Autocomplete>
				<input type="text" placeholder="Destination" ref={destinationRef} onChange={handleDestination} className="forms__input" />
			</Autocomplete>
			<button className="forms__button" type="submit">Show route</button>
		</form>
	)
}
