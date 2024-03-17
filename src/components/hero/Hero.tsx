import { curentCuler } from "../../store/store";
import InputHex from "../inputHex/InputHex";
import RandomBtn from "../randomBtn/RandomBtn";
import ColorsFormats from "../colorsFormats/ColorsFormats";
import styles from "./style.module.css";
import Cube from "../cube/Cube";
import InputColorChange from "../inputColorChange/InputColorChange";

export default function Hero() {
  return (
    <section
      class={styles.hero}
      style={{ "background-color": curentCuler.color }}
    >
      <div class={styles.container}>
        <div class={styles.hero__box}>
          <Cube width={50} height={50} depth={50} />
          <InputHex />
          <ColorsFormats />
          <div class={styles.flex__group}>
            <RandomBtn />
            <InputColorChange />
          </div>
        </div>
      </div>
    </section>
  );
}
