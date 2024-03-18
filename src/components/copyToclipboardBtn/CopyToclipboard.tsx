import { Component } from "solid-js";
import copy from "copy-to-clipboard";
import Copy from "../../icons/Copy";
import styles from "./style.module.css"

interface CopyToclipboardProps {
  text: string;
}

const CopyToclipboard: Component<CopyToclipboardProps> = (props) => {
  function copyToclipboard() {
    copy(props.text);
  }
  return (
    <button onClick={copyToclipboard} class={styles.button}>
      <Copy />
    </button>
  );
};

export default CopyToclipboard;
