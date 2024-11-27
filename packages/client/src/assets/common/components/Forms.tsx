import { Autocomplete, useLoadScript } from "@react-google-maps/api"
import { useRef } from "react"

export default function Forms() {
	const originRef = useRef<HTMLInputElement>(null)
	const destinationRef = useRef<HTMLInputElement>(null)
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: String(process.env.GOOGLE_API_KEY),
		libraries: ["places"]
	})

	if (!isLoaded) {
		return (<div>Forms is Loading</div>)
	}

	return (
		<form action="/maps" className="forms">
			<Autocomplete>
				<input type="text" placeholder="Origin" ref={originRef} className="forms__input" />
			</Autocomplete>
			<Autocomplete>
				<input type="text" placeholder="Destination" ref={destinationRef} className="forms__input" />
			</Autocomplete>
			<button className="forms__button" type="submit">Show route</button>
		</form>
	)
}
