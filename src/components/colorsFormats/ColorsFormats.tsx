import { curentCuler } from "../../store/store";
import { RGBtoXYZ } from "../../utils/RGBtoXYZ";
import { hexAToRGBA } from "../../utils/hexAToRGBA";
import { hexToHSL } from "../../utils/hexToHSL";
import { hexToRGB } from "../../utils/hexToRGB";
import { rgbTolab } from "../../utils/rgbTolab";
import styles from "./styles.module.css";

export default function ColorsFormats() {
  return (
    <>
      <div class={styles.rgbColor__container}>
        <div>
          <p class={styles.rgb__values}>
            <span class={styles.color__space}>rgb:</span>
            <span class={styles.colors__values}>
              {hexToRGB(curentCuler.color)}
            </span>
          </p>
        </div>
      </div>
      <div class={styles.rgbColor__container}>
        <div>
          <p class={styles.rgb__values}>
            <span class={styles.color__space}>rgba:</span>
            <span class={styles.colors__values}>
              {hexAToRGBA(curentCuler.color)}
            </span>
          </p>
        </div>
      </div>
      <div class={styles.rgbColor__container}>
        <div>
          <p class={styles.rgb__values}>
            <span class={styles.color__space}>hsl: </span>
            <span class={styles.colors__values}>
              {hexToHSL(curentCuler.color)}
            </span>
          </p>
        </div>
      </div>
      <div class={styles.rgbColor__container}>
        <div>
          <p class={styles.rgb__values}>
            <span class={styles.color__space}>XYZ: </span>
            <span class={styles.colors__values}>
              {RGBtoXYZ(hexAToRGBA(curentCuler.color))}
            </span>
          </p>
        </div>
      </div>
      <div class={styles.rgbColor__container}>
        <div>
          <p class={styles.rgb__values}>
            <span class={styles.color__space}>Lab: </span>
            <span class={styles.colors__values}>
              {rgbTolab(hexAToRGBA(curentCuler.color))}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
