import ITitle from './interfaces/ITitle';
import styles from './sass/Title.module.scss';

const Title = ({ children }: ITitle) => {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  );
}

export default Title;
