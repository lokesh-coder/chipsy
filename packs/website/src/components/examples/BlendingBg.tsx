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


const BlendingBg = () => {
	const [count] = useState(15);
	const [data, setData] = useState<any[]>([]);
	const [bg, setBg] = useState<string>("");
	const [seed, setSeed] = useState<string>("chipsy");
	const [theme, setTheme] = useState<"light" | "dark">("light");

	const onRefresh = () => {
		setSeed(generate(1)[0]);
	}

	const onSetBg = (bg: string, theme: "light" | "dark") => {
		setBg(bg);
		setTheme(theme)
		setData(generate({ exactly: count, seed, minLength: 4 }).map((x) => ({
			label: x,
			colors: getCssFromColors(getColors(x, theme))
		})));
	}

	useEffect(() => {
		onSetBg(bg, theme);
	}, [seed]);


	console.log(data)

	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex gap-4 flex-wrap items-center justify-center p-10 rounded" style={{
				backgroundColor: bg,
			}}>
				{[...data].map(({ label, colors }) => <button key={colors} className="border px-3 py-1 rounded leading-4" style={{
					backgroundColor: colors.bgColorCss,
					color: colors.textColorCss,
					borderColor: colors.borderColorCss,
				}}>{label}</button>)}
			</div>
			<div className="flex gap-4 items-center justify-center">
				<button className="bg-[#ffeaea] w-5 h-5 rounded-full ring-2 ring-offset-2 ring-[#ffeaea] focus:shadow-lg" onClick={() => onSetBg('#ffeaea', 'light')}></button>
				<button className="bg-[#eef1f6] w-5 h-5 rounded-full ring-2 ring-offset-2 ring-[#eef1f6] focus:shadow-lg" onClick={() => onSetBg('#eef1f6', 'light')}></button>
				<button className="bg-[#eff6ee] w-5 h-5 rounded-full ring-2 ring-offset-2 ring-[#eff6ee] focus:shadow-lg" onClick={() => onSetBg('#eff6ee', 'light')}></button>
				<button className="bg-[#f6f3ee] w-5 h-5 rounded-full ring-2 ring-offset-2 ring-[#f6f3ee] focus:shadow-lg" onClick={() => onSetBg('#f6f3ee', 'light')}></button>
				<button className="bg-[#3f3a32] w-5 h-5 rounded-full ring-2 ring-offset-2 ring-[#3f3a32] focus:shadow-lg ring-opacity-50 " onClick={() => onSetBg('#3f3a32', 'dark')}></button>
				<button className="bg-[#3d323f] w-5 h-5 rounded-full ring-2 ring-offset-2 ring-[#3f3a32] focus:shadow-lg ring-opacity-50 " onClick={() => onSetBg('#3f3a32', 'dark')}></button>
				<button className="bg-[#1f4d34] w-5 h-5 rounded-full ring-2 ring-offset-2 ring-[#1f4d34] focus:shadow-lg ring-opacity-50 " onClick={() => onSetBg('#1f4d34', 'dark')}></button>
				<button className="bg-[#462d6c] w-5 h-5 rounded-full ring-2 ring-offset-2 ring-[#462d6c] focus:shadow-lg ring-opacity-50 " onClick={() => onSetBg('#462d6c', 'dark')}></button>
				<button className="bg-orange-700 px-1 py-1 rounded-md text-slate-100 focus:shadow-lg flex gap-2 items-center justify-center hover:bg-orange-800" onClick={() => onRefresh()}><RefreshIcon /></button>
			</div>
		</div>
	);

};

export default BlendingBg;
