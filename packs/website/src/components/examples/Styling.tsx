import { getColors } from "chipsy";
import { generate } from "random-words";
import { useEffect, useState } from "react";

import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import Star from "../icons/Star";
import Circle from "../icons/Circle";

const hsla = (col: number[]) => `hsl(${col[0]}, ${col[1]}%, ${col[2]}%, ${col[3] ?? 100})`;

const getCssFromColors = (colors: ChipsyColors) => {
	const { primary, secondary, tertiary } = colors;
	return {
		bgColorCss: hsla(primary),
		textColorCss: hsla(secondary),
		borderColorCss: hsla(tertiary),
	};
}

const Button1 = (label: string, p: string, s: string, t: string) => {
	return <button className="border px-3 py-1 leading-4" style={{
		backgroundColor: p,
		color: s,
		borderColor: t,
	}}>{label}</button>
}
const Button2 = (label: string, p: string, s: string, t: string) => {
	return <button className="px-3 py-1 leading-4 uppercase text-xs" style={{
		backgroundColor: p,
		color: s,
		borderColor: t,
	}}>{label}</button>
}
const Button3 = (label: string, p: string, s: string, t: string) => {
	return <button className="border px-3 py-1 rounded-full leading-4 text-sm" style={{
		backgroundColor: p,
		color: s,
		borderColor: t,
	}}>{label}</button>
}
const Button4 = (label: string, p: string, s: string, t: string) => {
	return <button className="border px-3 py-1 leading-4" style={{
		backgroundColor: "#fff",
		color: s,
		borderColor: t,
	}}>{label}</button>
}
const Button5 = (label: string, p: string, s: string, t: string) => {
	return <button className="border px-3 py-1 rounded leading-4" style={{
		backgroundColor: p,
		color: s,
		borderColor: t,
	}}> <span className="text-xs px-1 rounded" style={{
		backgroundColor: s,
		color: '#fff'
	}}>{Math.round(Math.random() * 10)}</span> {label}</button>
}
const Button6 = (label: string, p: string, s: string, t: string) => {
	return <button className="px-3 py-1 leading-4" style={{
		backgroundColor: p,
		color: s,
		borderColor: t,
	}}>{label}  <span className="text-xs px-1 rounded" style={{
		backgroundColor: s,
		color: '#fff'
	}}>{Math.round(Math.random() * 10)}</span></button>
}
const Button7 = (label: string, p: string, s: string, t: string) => {
	return <button className="border px-3 py-1 rounded leading-4 flex gap-1" style={{
		backgroundColor: p,
		color: s,
		borderColor: t,
	}}>{label} <Star width="15" height="15" /></button>
}
const Button8 = (label: string, p: string, s: string, t: string) => {
	return <button className="px-3 py-1 leading-4" style={{
		backgroundColor: s,
		color: "#fff",
		borderColor: t,
	}}>{label}</button>
}
const Button9 = (label: string, p: string, s: string, t: string) => {
	return <button className=" px-3 py-1 rounded leading-4 font-bold" style={{
		color: s,
	}}>#{label}</button>
}
const Button10 = (label: string, p: string, s: string, t: string) => {
	return <button className="border pl-2 pr-3 py-1 rounded-full leading-4 flex gap-1" style={{
		color: s,
		borderColor: t,
	}}><Circle width="15" height="15" stroke={s} /> {label}</button>
}

const allButtons = [Button1, Button2, Button3, Button4, Button5, Button6, Button7, Button8, Button9, Button10,]

const Styling = () => {
	const [index, setIndex] = useState(0);
	const [data] = useState<any[]>(generate({ exactly: 15, seed: generate(1)[1], minLength: 4 }).map((x) => ({
		label: x,
		colors: getCssFromColors(getColors(x))
	})));

	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex gap-4 flex-wrap items-center justify-center p-10 rounded h-48" style={{
			}}>
				{[...data].map(({ label, colors }) => allButtons[index](label, colors.bgColorCss, colors.textColorCss, colors.borderColorCss))}
			</div>
			<div className="flex gap-2">
				<button className="bg-red-500 px-1 py-1 rounded-md text-red-100 focus:shadow-lg flex gap-2 items-center justify-center hover:bg-red-600" onClick={() => setIndex(x => x === 0 ? allButtons.length - 1 : (x - 1) % allButtons.length)}><LeftArrow /></button>
				<button className="bg-red-500 px-1 py-1 rounded-md text-red-100 focus:shadow-lg flex gap-2 items-center justify-center hover:bg-red-600" onClick={() => setIndex(x => (x + 1) % allButtons.length)}><RightArrow /></button>
			</div>
		</div>
	);

};

export default Styling;
