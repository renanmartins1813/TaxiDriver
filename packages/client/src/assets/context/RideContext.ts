import { useState, createContext, useContext, ReactNode } from "react";

interface Ride {
	userId: number,
	userName: string,
	origin: string,
	destination: string,
	driverId: number
}
interface Props {
	children: ReactNode
}
const RideContext = createContext<Ride>({
	userId: 0,
	userName: '',
	origin: '',
	destination: '',
	driverId: 0
})

export function RideContextProvider({ children }: Props) {
	const [userId, setUserId] = useState('')
	const context = {
		userId,
		setUserId
	}
	return (
		<RideContext.Provider value= { context } >
		{ children }
		</RideContext.Provider>
	)
}

export const useRideContext = () => useContext(RideContext)
