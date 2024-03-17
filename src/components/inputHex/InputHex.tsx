import { createSignal } from "solid-js";
import { curentCuler, setCurentCuler } from "../../store/store";
import clsx from "clsx";
import styles from "./style.module.css";
interface InputElement {
  element: HTMLInputElement;
}

function validateHexColor(input: InputElement) {
  const el = input.element;
  el.value = el.value.toUpperCase();
  const value = el.value.includes("#") ? el.value : `#${el.value}`;
  const hexColorRegex = /^#(([0-9A-Fa-f]{2}){3,4}|[0-9A-Fa-f]{3})$/i;
  if (hexColorRegex.test(value)) {
    setCurentCuler("color", value);
    return true;
  } else {
    return false;
  }
}

export default function InputHex() {
  const [value, setValue] = createSignal(curentCuler.color);
  const [error, setError] = createSignal(false);

  return (
    <div class={styles.inputHex__box}>
      <form
        class={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label class={styles.label}>Hex</label>
        <input
          class={clsx(styles.input, {
            [styles.input__erro]: error() === true,
          })}
          value={value()}
          onInput={(event) => {
            const newColor = event.target.value;
            if (validateHexColor({ element: event.target })) {
              setValue(newColor);
              setError(false);
            } else {
              setError(true);
            }
          }}
        />
      </form>
    </div>
  );
}
