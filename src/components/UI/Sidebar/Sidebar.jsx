import styles from './Sidebar.module.scss';

const menu = [
	'Popular', 'TV Shows', 'Films', 'My list'
]

const Sidebar = ({ isSidbarShow, setIsSidbarShow }) => {
	return (
		<div className={styles.sidebar}>
			<button onClick={() => setIsSidbarShow(true)}>
				<i className={`bx bx-${isSidbarShow ? 'x' : 'border-left'}`}></i>
			</button>
			<ul>
				{menu.map(title => (
					<li>
						<a href={title}>{title}</a>
					</li>
				))}
			</ul>

		</div >
	)
}

export default Sidebar