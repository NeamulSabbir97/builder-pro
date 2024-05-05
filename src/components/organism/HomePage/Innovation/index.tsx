import { Container } from "@/components/atomic";
import { BottomInnovation } from "./BottomInnovation";
import { TopInnovation } from "./TopInnovation";

export const Innovation = () => {
	return (
		<div className="bg-default pt-14">
			<Container>
				<h2 className="text-center">
					Discover how our innovative builder software paves the way for your triumph.
				</h2>
				<TopInnovation />
				<BottomInnovation />
			</Container>
		</div>
	);
};
