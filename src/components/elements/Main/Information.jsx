import styles from './Main.module.scss';
import Button from '../../UI/Button'

const Information = ({ movie, setModulSHow }) => {
	const addToАavorites = (movieName) => {
		let favorites = localStorage.getItem('favMovies')
		if (favorites) {
			favorites = JSON.parse(favorites)
			localStorage.setItem('favMovies', [...favorites, movieName])
			alert(`${movieName} теперь в избранном`)
		}

	}

	return (
		<div className={styles.info}>
			<img src={movie.logo} alt={movie.name} width='200' />

			<div className={styles.additional}>
				<span>{movie.year}</span>
				<span>{movie.limitAge}</span>
				<span>{movie.rating}</span>
				<span>{movie.duration}</span>
			</div>

			<div className={styles.description}>{movie.description}</div>

			<div className={styles.buttons}>
				<Button cb={() => console.log('video is open')}>
					{/* setModulSHow(true)}> */}
					<i className="bx bx-play" style={{ color: '#c62e21' }}></i>
					<span>Play</span>
				</Button>
				<Button cb={addToАavorites}>
					<i className="bx bx-plus"></i>
					<span>Play</span>
				</Button>
			</div>
		</div>
	)
}

export default Information