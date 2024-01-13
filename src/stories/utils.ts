import { getColors } from "../main";

const hsl = (col: number[]) => `hsl(${col[0]}, ${col[1]}%, ${col[2]}%)`

const setBtnColor = (btn: HTMLButtonElement, colorTheme?: 'light' | 'dark', label?: string, options = { level: 0 }) => {
	const { primary, secondary, tertiary } = getColors(label, colorTheme, options);
	btn.style.backgroundColor = hsl(primary);
	btn.style.color = hsl(secondary);
	btn.style.border = `1px solid ${hsl(tertiary)}`;
};


const generateButtons = ({ count, label, colorTheme, isRandom, level, cls }: {
	count: number,
	label: string,
	colorTheme: 'light' | 'dark',
	isRandom: boolean,
	level: number,
	cls: string
}) => {
	const div = document.createElement("div");
	for (let i = 0; i < count; i++) {
		const btn = document.createElement("button");
		btn.type = "button";
		const labelText = label + ' #' + i
		btn.innerText = labelText;
		btn.className = `chipsy ${cls}`;
		setBtnColor(btn, colorTheme, labelText, { level });
		btn.addEventListener("click", () => {
			if (isRandom) setBtnColor(btn, colorTheme, undefined, { level });
		});
		div.appendChild(btn);
	}
	return div;
}

export { generateButtons }