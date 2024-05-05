import { Container } from "@/components/atomic";
import { TestimonialSlide } from "./TestimonialSlide";

export const Testimonial = () => {
	return (
		<div className="bg-default py-[102px]">
			<Container>
				<p className="text-center text-lightGreen text-lg font-medium lette">TESTIMONIAL</p>
				<h2 className="text-center">what our clients say about us</h2>

				<TestimonialSlide />
			</Container>
		</div>
	);
};
