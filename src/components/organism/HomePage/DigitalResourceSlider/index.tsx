import { Container } from "@/components/atomic";
import { SliderCard } from "./SliderCard";

export const DigitalResourceSlider = () => {
	return (
		<div className="bg-default py-14">
			<Container>
				<h2 className="text-center">
					Extend your toolkit beyond traditional implements: <br /> Harness digital resources to energize your
					entire enterprise.
				</h2>
				<div className="mt-14">
					<SliderCard />
				</div>
			</Container>
		</div>
	);
};
