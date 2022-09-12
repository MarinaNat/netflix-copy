import styles from './Sidebar.module.scss';

const menu = [
	'Popular', 'TV Shows', 'Films', 'My list'
]

const Sidebar = ({ isSidbarShow, setIsSidbarShow }) => {
	return (
		<div className={styles.sidebar} style={{ width: isSidbarShow ? '30%' : '15%' }}>
			<button onClick={() => setIsSidbarShow(true)}>
				<i className={`bx bx-${isSidbarShow ? 'x' : 'border-left'}`}></i>
			</button>
			<ul className={isSidbarShow ? styles.show : ''}>
				{menu.map(title => (
					<li key={title}>
						<a href={title}>{title}</a>
					</li>
				))}
			</ul>

		</div >
	)
}

export default Sidebar