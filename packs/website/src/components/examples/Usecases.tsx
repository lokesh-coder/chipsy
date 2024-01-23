import { getColors } from "chipsy";
import { generate } from "random-words";
import { useEffect, useState } from "react";

import Circle from "../icons/Circle";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import Star from "../icons/Star";

type CompProps = {
	label: string;
	colors: {
		bgColorCss: string;
		textColorCss: string;
		borderColorCss: string;
	};
}

const getClrs = (count = 15) => {
	return generate({ exactly: count, seed: generate(1)[1], minLength: 4 }).map((x) => ({
		label: x,
		colors: getCssFromColors(getColors(x, 'light', { level: 0.5 }))
	}))
}

const hsla = (col: number[]) => `hsl(${col[0]}, ${col[1]}%, ${col[2]}%, ${col[3] ?? 100})`;

const getCssFromColors = (colors: ChipsyColors) => {
	const { primary, secondary, tertiary } = colors;
	return {
		bgColorCss: hsla(primary),
		textColorCss: hsla(secondary),
		borderColorCss: hsla(tertiary),
	};
}

const Avatars = () => {
	return <div className="flex gap-2 flex-wrap items-center justify-center">
		{getClrs().map((x) => <div key={x.label} className="rounded-full" style={{ backgroundColor: x.colors.bgColorCss }}>
			<img className={`w-10 h-10 p-0.5 rounded-full ring-offset-0 ring-2 ring-gray-300 dark:ring-gray-500`} src={`https://i.pravatar.cc/50?u=${x.label}`} alt="avatar" style={{
				"--tw-ring-color": x.colors.borderColorCss,
			} as React.CSSProperties} />
		</div>)}

	</div>
}

const InlineCode = () => {
	const [clrs, setClrs] = useState<any>(getClrs(3));

	useEffect(() => {
		const interval = setInterval(() => {
			setClrs(getClrs(3));
		}, 1000);
		return () => clearInterval(interval);
	}, [])

	return <div className="w-full">
		<div className="transition-all w-full h-40 rounded-lg" style={{
			backgroundImage: `linear-gradient(43deg, ${clrs[0].colors.textColorCss} 0%, ${clrs[1].colors.borderColorCss} 46%, ${clrs[2].colors.borderColorCss} 100%)`,
		}}>
		</div>
		<div className="text-center pt-4 text-slate-500">{clrs.map((x: any) => x.label).join('_')}</div>
	</div>
}

const Chart = () => {
	const data = getClrs(6)
	return <div className="w-full px-4 flex flex-col gap-2">
		{data.map((x) => {
			return <div key={x.label} className="w-full h-5 rounded-full bg-slate-900/0">
				<div className="h-5 rounded-full flex items-center px-2 text-xs text-slate-600" style={{ backgroundColor: x.colors.borderColorCss, width: `${Math.random() * 100}%`, backgroundImage: `linear-gradient(90deg, ${x.colors.bgColorCss} 0%, ${x.colors.borderColorCss} 100%)`, color: x.colors.textColorCss }}>{x.label}</div>
			</div>
		})}
	</div>
}

const AllButtons = [Avatars, InlineCode, Chart]

const Usecases = () => {
	const [index, setIndex] = useState(0);

	const CurrComp = AllButtons[index]

	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex gap-4 flex-wrap items-center justify-center p-10 rounded w-full h-60" style={{
			}}>
				<CurrComp />
			</div>
			<div className="flex gap-2">
				<button className="bg-lime-500 px-1 py-1 rounded-md text-lime-100 focus:shadow-lg flex gap-2 items-center justify-center hover:bg-lime-600" onClick={() => setIndex(x => x === 0 ? AllButtons.length - 1 : (x - 1) % AllButtons.length)}><LeftArrow /></button>
				<button className="bg-lime-500 px-1 py-1 rounded-md text-lime-100 focus:shadow-lg flex gap-2 items-center justify-center hover:bg-lime-600" onClick={() => setIndex(x => (x + 1) % AllButtons.length)}><RightArrow /></button>
			</div>
		</div>
	);

};

export default Usecases;
