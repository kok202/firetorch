declare module '*.scss' {
	const content: { [className: string]: string };
	export default content;
}

declare module 'get-user-locale';

type SvgrComponent =
	| React.Component<React.SVGAttributes<SVGElement>>
	| JSX.Element<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
	const value: SvgrComponent;
	export default value;
}
