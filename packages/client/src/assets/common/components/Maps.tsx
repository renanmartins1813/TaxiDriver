import React, { useEffect } from "react";

export default function Maps() {
	useEffect(() => {
		console.log(process.env.GOOGLE_API_KEY);

	})

	return (
		<div>
			Maps
		</div>
	)
}
