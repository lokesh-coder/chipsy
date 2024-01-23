import Gamepad from "../icons/GamepadMono";
import Github from "../icons/GithubMono";
import Npm from "../icons/NpmMono";
import Share from "../icons/ShareMono";

const More = () => {
	const data = [
		{
			name: "Github repo",
			Icon: Github,
			link: "https://github.com/lokesh-coder/chipsy",
		},
		{
			name: "NPM package",
			Icon: Npm,
			link: "https://www.npmjs.com/package/chipsy",
		},
		{
			name: "Playground",
			Icon: Gamepad,
			link: "https://lokesh-coder.github.io/chipsy/playground",
		},
		{
			name: "Share",
			Icon: Share,
			link: "https://twitter.com/intent/tweet?text=Chipsy%20is%20a%20simple%2C%20lightweight%2C%20and%20easy%20to%20use%20framework%20agnostic%20library%20that%20allows%20you%20to%20create%20beautiful%20multi-purpose%20pseudo%20random%20colors%20that%20can%20be%20used%20for%20chips%2C%20tags%20and%20more..&url=https%3A%2F%2Flokesh-coder.github.io%2Fchipsy%2F",
		},
	]
	return <div className="flex flex-wrap gap-4 items-center justify-center">
		{data.map(item => {
			return <a key={item.name} className="flex items-center flex-col justify-center gap-2 hover:bg-teal-200/30 py-3 px-2 rounded-lg flex-1 text-teal-700 hover:text-teal-600" href={item.link} target="_blank" rel="noreferrer">
				<item.Icon width={40} height={40} strokeWidth={1.5} className="opacity-60" />
				<div className="">{item.name}</div>
			</a>
		})}
	</div>
}

export default More;