import { useState, createContext, useContext, ReactNode } from "react";

interface Ride {
	userId: number,
	setUserId: (id: number) => void,
	userName: string,
	setUserName: (name: string) => void,
	origin: string,
	setOrigin: (name: string) => void,
	destination: string,
	setDestination: (name: string) => void,
	driverId: number,
	setDriverId: (id: number) => void,
}

interface Props {
	children: ReactNode
}

const RideContext = createContext<Ride | null>(null)

export function RideContextProvider({ children }: Props) {
	const [userId, setUserId] = useState<number>(0)
	const [userName, setUserName] = useState<string>('')
	const [origin, setOrigin] = useState<string>('')
	const [destination, setDestination] = useState<string>('')
	const [driverId, setDriverId] = useState<number>(0)

	const context = {
		userId,
		setUserId,
		userName,
		setUserName,
		origin,
		setOrigin,
		destination,
		setDestination,
		driverId,
		setDriverId,

	}

	return (
		<RideContext.Provider value={context} >
			{children}
		</RideContext.Provider>
	)
}

export const useRideContext = () => {
	const context = useContext(RideContext);
	if (!context) {
		throw new Error("useRideContext must be used within a RideContextProvider");
	}
	return context;
}
