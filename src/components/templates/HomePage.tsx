import {
	DigitalResourceSlider,
	Innovation,
	Packages,
	SingleBanner,
	Testimonial,
	TopSection,
} from "../organism/HomePage";

export const HomePage = () => {
	return (
		<>
			<TopSection />
			<DigitalResourceSlider />
			<Innovation />
			<Testimonial />
			<Packages />
			<SingleBanner />
		</>
	);
};
