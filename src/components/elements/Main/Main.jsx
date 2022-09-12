import Sidebar from '../../UI/Sidebar/Sidebar';
import Information from './Information';
import styles from './Main.module.scss';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import { useState } from 'react';

const Main = () => {
	const [isSidbarShow, setIsSidbarShow] = useState(false)
	return (
		<div className={styles.wrapper}>
			<Sidebar
				isSidbarShow={isSidbarShow}
				setIsSidbarShow={setIsSidbarShow}
			/>
			<div className={styles.main}
				style={{
					backgroundImage: `url(${DATA[0].mainImage})`,
					width: isSidbarShow ? '70%' : '85%'
				}}>
				<Information movie={DATA[0]} />
				<BottomNavigation />

			</div>
		</div>
	)
}

export default Main