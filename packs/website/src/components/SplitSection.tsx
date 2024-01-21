import type { ReactNode } from 'react'

type Props = {
	title: string;
	subtitle: string;
	className?: string;
	right?: boolean;
	children: ReactNode;
}

const SplitSection = ({ title, subtitle, className, children, right = false }: Props) => {
	return <div className={`relative py-unit-4xl ${className}`}>
		<div className={`relative max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 flex ${right ? "flex-row-reverse" : ""}`}>
			<div className="w-1/2 text-center flex items-center justify-center flex-col">
				<h2 className="text-3xl font-medium text-gray-900/85 sm:text-4xl font-title">
					{title}
				</h2>
				<p className="mt-3 text-xl text-gray-600 sm:mt-4">
					{subtitle}
				</p>
			</div>
			<div className="w-1/2 px-4">
				{children}
			</div>
		</div>
	</div>
}

export default SplitSection;