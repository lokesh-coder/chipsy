import { getColors } from "chipsy";
import { generate } from "random-words";
import { useEffect, useState } from "react";

const hsla = (col: number[]) => `hsl(${col[0]}, ${col[1]}%, ${col[2]}%, ${col[3] ?? 100})`;

const getCssFromColors = (colors: ChipsyColors) => {
	const { primary, secondary, tertiary } = colors;
	return {
		bgColorCss: hsla(primary),
		textColorCss: hsla(secondary),
		borderColorCss: hsla(tertiary),
	};
}


const Multiple = () => {
	const [count, setCount] = useState(10);
	const [data, setData] = useState<any[]>([]);

	const onCountChange = ({ target: { value } }: any) => {
		let total = Number(value ? value : "10");
		if (total > 100) total = 100;
		setCount(total);
		setData(generate({ exactly: total, seed: generate(1)[0], minLength: 4, }).map((x) => ({
			label: x,
			colors: getCssFromColors(getColors(x))
		})));
	}

	useEffect(() => {
		setData(generate({ exactly: count, seed: generate(1)[0], minLength: 4, }).map((x) => ({
			label: x,
			colors: getCssFromColors(getColors(x))
		})));
	}, [count]);


	console.log(data)

	return (
		<div className="flex flex-col items-center gap-16">
			<div className="flex gap-4 flex-wrap items-center justify-center">
				{[...data].map(({ label, colors }) => <button key={label} className="border px-3 py-1 rounded leading-4" style={{
					backgroundColor: colors.bgColorCss,
					color: colors.textColorCss,
					borderColor: colors.borderColorCss,
				}}>{label}</button>)}
			</div>
			<input type="number" placeholder="enter count" defaultValue={count} onChange={onCountChange} className="bg-white border focus:border-dashed border-slate-300 rounded inline-block w-44 px-4 py-1 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-slate-200 focus:bg-slate-50" max={100} min={1} step="1" onKeyDown={(e) => {
				if (e.code === 'Minus') {
					e.preventDefault();
				}
			}} />
		</div>
	);

};

export default Multiple;
