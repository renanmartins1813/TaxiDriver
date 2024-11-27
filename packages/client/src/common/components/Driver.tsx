
// interface Driver {
// 	id: number;
// 	name: string;
// 	description: string;
// 	car: string;
// 	rating: number;
// 	ratingText: string;
// 	rideValue: number;
// }
//
// interface DriverCardProps {
// 	driver: Driver;
// }

export default function Driver(props: any) {
	console.log(props)

	// return (
	// 	<>
	// 		<p style={styles.description}>{props.description}</p>
	// 		<h2 style={styles.name}>{props.name}</h2>
	// 	</>)
	return (
		<div className="driver-card" style={styles.card}>
			<h2 style={styles.name}>{props.name}</h2>
			<p style={styles.description}>{props.description}</p>
			<p style={styles.car}>Car: {props.car}</p>
			<div style={styles.ratingContainer}>
				<p style={styles.rating}>Rating: {props.rating} ★</p>
				<p style={styles.ratingText}>{props.ratingText}</p>
			</div>
			<p style={styles.rideValue}>Ride Value: ${props.rideValue.toFixed(2)}</p>
		</div>

	)
}

// const DriverCard: React.FC<DriverCardProps> = ({ driver }) => {
// 	return (
// 		<div className="driver-card" style={styles.card}>
// 			<h2 style={styles.name}>{driver.name}</h2>
// 			<p style={styles.description}>{driver.description}</p>
// 			<p style={styles.car}>Car: {driver.car}</p>
// 			<div style={styles.ratingContainer}>
// 				<p style={styles.rating}>Rating: {driver.rating} ★</p>
// 				<p style={styles.ratingText}>{driver.ratingText}</p>
// 			</div>
// 			<p style={styles.rideValue}>Ride Value: ${driver.rideValue.toFixed(2)}</p>
// 		</div>
// 	);
// };

// export default DriverCard;
const styles = {
	card: {
		border: '1px solid #ccc',
		borderRadius: '8px',
		padding: '16px',
		margin: '8px 0',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		backgroundColor: '#fff',
	},
	name: {
		fontSize: '1.5rem',
		marginBottom: '8px',
		color: '#333',
	},
	description: {
		fontSize: '1rem',
		marginBottom: '8px',
		color: '#555',
	},
	car: {
		fontSize: '1rem',
		marginBottom: '8px',
		color: '#777',
	},
	ratingContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '8px',
	},
	rating: {
		fontSize: '1rem',
		color: '#ff9800',
	},
	ratingText: {
		fontSize: '0.9rem',
		color: '#888',
	},
	rideValue: {
		fontSize: '1.2rem',
		fontWeight: 'bold',
		color: '#4caf50',
	},
};


