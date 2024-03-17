import { createStore } from "solid-js/store";
import { getRandomHex } from "../utils/randomHex";


const [curentCuler, setCurentCuler] = createStore({
    color : getRandomHex(),
})


export { curentCuler, setCurentCuler};