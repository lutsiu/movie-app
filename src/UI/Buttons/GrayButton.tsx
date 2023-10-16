import styles from './style.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}
export default function GrayButton(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.grayButton}
    >
      {props.children}
    </button>
  );
}
