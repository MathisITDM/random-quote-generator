import { ReactNode } from "react";
import styles from "./Card.module.css";

export default function Card(props: { children: ReactNode }) {
  return (
    <div className={styles.quoteBox} id="quote-box">
      {props.children}
    </div>
  );
}
