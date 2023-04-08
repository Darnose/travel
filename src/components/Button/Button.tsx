import IButton from './interfaces/IButton';
import button from './sass/Button.module.scss';

const Button = ({ type, onClick, text, styleType }: IButton) => (
  <div className={button.button}>
    <button onClick={onClick} type={type} className={styleType ? button[styleType] : ''}>
      {text}
    </button>
  </div>
);

export default Button;