import style from "./style.module.css";

interface CubeProps {
  width: number;
  height: number;
  depth: number;
}

export default function Cube({ width, height, depth }: CubeProps) {
  return (
    <div
      class={style.cuboid}
      style={{
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--depth": `${depth}px`,
      }}
    >
      <div class={style.cuboid__side}></div>
      <div class={style.cuboid__side}></div>
      <div class={style.cuboid__side}></div>
      <div class={style.cuboid__side}></div>
      <div class={style.cuboid__side}></div>
      <div class={style.cuboid__side}></div>
    </div>
  );
}
