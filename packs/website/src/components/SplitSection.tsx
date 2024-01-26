import type { ReactNode } from 'react'

type Props = {
	title: string;
	subtitle: string;
	className?: string;
	right?: boolean;
	children: ReactNode;
}

const SplitSection = ({ title, subtitle, className, children, right = false }: Props) => {
	return <div className={`relative py-24 min-h-svh flex `}>
		<div className={`absolute w-full h-full top-0 flex ${right ? "flex-row-reverse" : ""}`}>
			<div className={`w-1/2 h-full ${className}`}></div>
			<div className={`w-1/2 h-full ${className}`} style={{
				"--tw-bg-opacity": 0.1
			} as any}></div>
		</div>
		<div className={`flex-1 relative md:max-w-7xl lg:max-w-full mx-auto flex ${right ? "flex-row-reverse" : ""}`}>
			<div className="w-1/2 text-center flex items-center justify-center flex-col rounded">
				<h2 className={`text-3xl font-medium text-white sm:text-4xl font-title`} style={{
					"--tw-bg-opacity": 0.1
				} as any}>
					{title}
				</h2>
				<p className="mt-3 text-xl text-white/70 sm:mt-4">
					{subtitle}
				</p>
			</div>
			<div className="w-1/2 px-4 flex items-center justify-center">
				<div className='flex-1'>
					{children}
				</div>
			</div>
		</div>
	</div >
}

export default SplitSection;