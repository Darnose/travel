import IInput from './interfaces/IInput';
import styles from './sass/Input.module.scss';

const Input = ({ value, type, placeholder, name, onChange, title }: IInput) => {
  return (
    <div className={styles.input__wrap}>
      <span className={styles.input__title}>
        {title}
      </span>
      <input onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete='off'
      />
    </div>
  );
}

export default Input;