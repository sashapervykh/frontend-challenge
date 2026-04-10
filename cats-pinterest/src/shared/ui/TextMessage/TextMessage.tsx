import styles from "./TextMessage.module.css";

interface Props {
  text: string;
}

export function TextMessage({ text }: Props) {
  return <div className={styles.message}>{text}</div>;
}
