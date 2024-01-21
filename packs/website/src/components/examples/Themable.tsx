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


const Themable = () => {
	const [count] = useState(15);
	const [data, setData] = useState<any[]>([]);
	const [theme, setTheme] = useState<'light' | 'dark' | undefined>(undefined);

	const onRefresh = (seed?: string) => {
		setData(generate({ exactly: count, seed: seed ?? generate(1)[0], minLength: 4 }).map((x) => ({
			label: x,
			colors: getCssFromColors(getColors(x, theme))
		})));
	}

	useEffect(() => {
		onRefresh('chipsy')
	}, [theme]);


	console.log(data)

	return (
		<div className="flex flex-col items-center gap-16">
			<div className="flex gap-4 flex-wrap items-center justify-center p-10 rounded" style={{
				backgroundColor: theme === 'dark' ? '#1f2937' : theme === 'light' ? '#f9fafb' : undefined,
			}}>
				{[...data].map(({ label, colors }) => <button key={colors} className="border px-3 py-1 rounded leading-4" style={{
					backgroundColor: colors.bgColorCss,
					color: colors.textColorCss,
					borderColor: colors.borderColorCss,
				}}>{label}</button>)}
			</div>
			<div className="flex gap-2">
				<button className="bg-slate-500 px-3 py-1 rounded-md text-slate-100 focus:shadow-lg" onClick={() => setTheme(undefined)}>Default</button>
				<button className="bg-slate-500 px-3 py-1 rounded-md text-slate-100 focus:shadow-lg" onClick={() => setTheme('light')}>Light</button>
				<button className="bg-slate-500 px-3 py-1 rounded-md text-slate-100 focus:shadow-lg" onClick={() => setTheme('dark')}>Dark</button>
				<button className="bg-slate-500 px-1 py-1 rounded-md text-slate-100 focus:shadow-lg flex gap-2 items-center justify-center hover:bg-slate-600" onClick={() => onRefresh()}><RefreshIcon /></button>
			</div>
		</div>
	);

};

export default Themable;
