import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
	return (
		<>
			<div className="hidden xl:block">
				<DesktopHeader />
			</div>
			<div className="block xl:hidden">
				<MobileHeader />
			</div>
		</>
	);
};
