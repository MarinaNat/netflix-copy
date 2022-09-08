import styles from './Sidebar.module.scss';

const menu = [
	'Popular', 'TV Shows', 'Films', 'My list'
]

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<ul>
				{menu.map(title => (
					<li>
						<a href={title}>{title}</a>
					</li>
				))}
			</ul>

		</div>
	)
}

export default Sidebar