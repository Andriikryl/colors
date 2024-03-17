import { curentCuler } from "../../store/store";
import InputHex from "../inputHex/InputHex";
import RandomBtn from "../randomBtn/RandomBtn";
import ColorsFormats from "../colorsFormats/ColorsFormats";
import styles from "./style.module.css";

export default function Hero() {
  return (
    <section
      class={styles.hero}
      style={{ "background-color": curentCuler.color }}
    >
      <div class={styles.container}>
        <div class={styles.hero__box}>
          <InputHex />
          <ColorsFormats />
          <RandomBtn />
        </div>
      </div>
    </section>
  );
}
