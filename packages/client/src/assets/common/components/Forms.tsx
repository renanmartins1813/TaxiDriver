import { Autocomplete, useLoadScript } from "@react-google-maps/api"
import { useRef } from "react"

export default function Forms() {
	const originRef = useRef<HTMLInputElement>(null)
	const destinationRef = useRef<HTMLInputElement>(null)
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: String(process.env.GOOGLE_API_KEY),
		libraries: ["places"],
	})

	if (!isLoaded) {
		return (<div>Forms is Loading</div>)
	}

	return (
		<form action="/maps" className="form">
			<Autocomplete>
				<input type="text" placeholder="Origin" ref={originRef} className="form__input" />
			</Autocomplete>
			<Autocomplete>
				<input type="text" placeholder="Destination" ref={destinationRef} className="form__input" />
			</Autocomplete>
			<button className="form__button" type="submit"></button>
		</form>
	)
}
