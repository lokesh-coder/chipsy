import { getColors } from "chipsy";
import { useEffect, useState } from "react";

const hsla = (col: number[]) => `hsl(${col[0]}, ${col[1]}%, ${col[2]}%, ${col[3] ?? 100})`

const InlineEditor = () => {
  const onLabelChange = ({ target: { value } }: any) => {
    const newValue = value ? value : "chipsy"
    const colors = getColors(newValue);
    setColors(colors)
    setLabel(newValue)
  }
  const [label, setLabel] = useState("chipsy");
  const [colors, setColors] = useState<ChipsyColors | undefined>(undefined);
  useEffect(() => {
    const colors = getColors(label);
    setColors(colors)
  }, [])
  const bgColorCss = hsla(colors?.primary ?? [0, 0, 0, 100]);
  const textColorCss = hsla(colors?.secondary ?? [0, 0, 0, 100]);
  const borderColorCss = hsla(colors?.tertiary ?? [0, 0, 0, 100]);
  return (
    <div className="flex flex-col items-center gap-4">
      <button className="border px-3 py-1 rounded leading-4" style={{
        backgroundColor: bgColorCss,
        color: textColorCss,
        borderColor: borderColorCss,
      }}>{label}</button>
      <input type="text" placeholder="type here.." defaultValue={label} onChange={onLabelChange} className="bg-white border focus:border-dashed border-slate-300 rounded inline-block w-44 px-4 py-1 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-slate-200 focus:bg-slate-50" maxLength={50} />
    </div>
  );
};

export default InlineEditor;
