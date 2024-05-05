import { FC } from "react";

interface Propstype {
	children: any;
	open: boolean;
}
export const DropDown: FC<Propstype> = ({ children, open }) => {
	const styleSx = {
		boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
	};
	return (
		<div
			className={`absolute  bg-white  rounded-lg  overflow-hidden mt-5  ${open ? "slide-bottom" : "h-0"} `}
			style={styleSx}
		>
			{children}
		</div>
	);
};
