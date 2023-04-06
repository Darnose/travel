import IButton from './interfaces/IButton';
import button from './sass/Button.module.scss';

const Button = ({ type, onClick, text, className }: IButton) => {
	return (
		<div className={button.button}>
			<button onClick={onClick} type={type} className={className}>
				{text}
			</button>
		</div>
	);
}

export default Button;