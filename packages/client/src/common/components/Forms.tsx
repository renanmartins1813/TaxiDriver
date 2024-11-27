import { Autocomplete, useLoadScript } from "@react-google-maps/api"
import { useRef } from "react"
import { useRideContext } from "../../context/RideContext"

export default function Forms() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: String(process.env.GOOGLE_API_KEY),
		libraries: ["places"]
	})

	const { setOrigin, setDestination } = useRideContext()
	const originRef = useRef<HTMLInputElement>(null)
	const destinationRef = useRef<HTMLInputElement>(null)

	function handleOrigin() {
		if (originRef === null || undefined) {
			return
		}
		setOrigin(originRef.current?.value)
		console.log(originRef.current?.value);

	}

	function handleDestination() {
		if (destinationRef === null) {
			return
		}
		setDestination(destinationRef.current?.value)
		console.log(destinationRef.current?.value)
	}

	if (!isLoaded) {
		return (<div>Forms is Loading</div>)
	}

	return (
		<form action="/maps" className="forms">
			<Autocomplete>
				<input type="text" placeholder="Origin" ref={originRef} onChange={handleOrigin()} className="forms__input" />
			</Autocomplete>
			<Autocomplete>
				<input type="text" placeholder="Destination" ref={destinationRef} className="forms__input" />
			</Autocomplete>
			<button className="forms__button" type="submit">Show route</button>
		</form>
	)
}
