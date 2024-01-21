import { getColors } from "chipsy";
import { generate } from "random-words";
import { useEffect, useState } from "react";

import RefreshIcon from "../icons/Refresh";

const hsla = (col: number[]) => `hsl(${col[0]}, ${col[1]}%, ${col[2]}%, ${col[3] ?? 100})`;

const getCssFromColors = (colors: ChipsyColors) => {
	const { primary, secondary, tertiary } = colors;
	return {
		bgColorCss: hsla(primary),
		textColorCss: hsla(secondary),
		borderColorCss: hsla(tertiary),
	};
}


const Level = () => {
	const [count] = useState(10);
	const [data, setData] = useState<any[]>([]);
	const [bg, setBg] = useState<string>("");
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const [seed, setSeed] = useState<string>("chipsy");
	const [level, setLevel] = useState<number>(0.1);

	const onRefresh = () => {
		setSeed(generate(1)[0]);
	}

	const onSetBg = (bg: string, theme: "light" | "dark") => {
		setBg(bg)
		setTheme(theme)
		setData(generate({ exactly: count, seed, minLength: 4 }).map((x) => ({
			label: x,
			colors: getCssFromColors(getColors(x, theme, { level }))
		})));
	}

	useEffect(() => {
		const toss = Math.random() > 0.5;
		const theme = toss ? 'light' : 'dark';
		const bg = toss ? '#fff' : '#0e0f1b';
		onSetBg(bg, theme);
	}, [seed]);

	useEffect(() => {
		onSetBg(bg, theme);
	}, [level]);


	console.log(data)

	return (
		<div className="flex flex-col items-center gap-16">
			<div className="p-10 rounded-lg relative" style={{
				backgroundColor: bg,
			}}>
				<div className={`pattern-dots pattern-bg-transparent pattern-opacity-80 pattern-size-2 absolute left-0 top-0 w-full h-full ${theme === 'light' ? "pattern-slate-100" : "pattern-slate-800"}`}></div>
				<div className="flex gap-4 flex-wrap items-center justify-center relative z-50">
					<Code code="console.log(33)" />
					{[...data].map(({ label, colors }) => <button key={colors} className="border px-3 py-1 rounded leading-4" style={{
						backgroundColor: colors.bgColorCss,
						color: colors.textColorCss,
						borderColor: colors.borderColorCss,
					}}>{label}</button>)}
				</div>
			</div>
			<div className="flex gap-4 items-center justify-center">
				<input type="range" id="points" name="points" min="0.1" max="1" step={0.1} className="text-lime-600" onChange={(e) => {
					setLevel(Number(e.target.value))
				}} />
				<button className="bg-lime-600 px-1 py-1 rounded-md text-slate-100 focus:shadow-lg flex gap-2 items-center justify-center hover:bg-lime-700" onClick={() => onRefresh()}><RefreshIcon /></button>
			</div>
		</div>
	);

};

export default Level;
