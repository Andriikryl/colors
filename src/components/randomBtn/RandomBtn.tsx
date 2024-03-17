import Restart from "../../icons/Restart";
import { setCurentCuler } from "../../store/store";
import { getRandomHex } from "../../utils/randomHex";
import styles from "./style.module.css";

export default function RandomBtn() {
  function handelNewColor() {
    setCurentCuler({ color: getRandomHex() });
  }
  return (
    <button onClick={handelNewColor} class={styles.button}>
      <Restart />
    </button>
  );
}
