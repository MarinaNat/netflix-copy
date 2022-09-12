import style from './Button.module.scss';

const Button = ({ children, cb }) => {
	return (
		<button onClick={cb} className={style.button}>
			{children}
		</button>
	)
}

export default Button