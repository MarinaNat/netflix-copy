import Sidebar from '../../UI/Sidebar/Sidebar';
import Information from './Information';
import styles from './Main.module.scss';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import { useState } from 'react';

const Main = () => {
	const [isSidbarShow, setIsSidbarShow] = useState(false)
	return (
		<div>
			<Sidebar
				isSidbarShow={isSidbarShow}
				setIsSidbarShow={setIsSidbarShow}
			/>
			<div style={{}}>
				<Information movie={DATA[0]} />
				<BottomNavigation />

			</div>
		</div>
	)
}

export default Main