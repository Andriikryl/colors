import { createSignal, createEffect } from "solid-js";
import { For } from "solid-js";
import Values from "values.js";
import { curentCuler } from "../../store/store";
import styles from "./style.module.css";

export default function Palettes() {
  const [paletteColors, setPaletteColors] = createSignal<Values[]>([]);
  createEffect(() => {
    const color = new Values(curentCuler.color);
    setPaletteColors(color.all(5));
  });

  return (
    <section class={styles.palette__section}>
      <h2 class={styles.palette__title}>color palette</h2>
      <div
        class={styles.palette__wrapper}
        style={{ "background-color": curentCuler.color }}
      >
        <For each={paletteColors()}>
          {(color) => (
            <div
              style={{ "background-color": color.hexString() }}
              class={styles.curent__palette}
            >
              <span>{color.hexString()}</span>
              <span>{color.weight} %</span>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
