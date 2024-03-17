import { createSignal } from "solid-js";
import { curentCuler, setCurentCuler } from "../../store/store";
import styles from "./style.module.css";

export default function InputColorChange() {
  const [color, setColor] = createSignal(curentCuler.color);

  return (
    <div class={styles.gui}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>Select a color:</label>
        <input
          type="color"
          id="color-picker"
          value={color()}
          oninput={(event) => {
            const newColor = event.target.value;
            setColor(newColor);
            setCurentCuler("color", newColor);
          }}
        />
      </form>
    </div>
  );
}
