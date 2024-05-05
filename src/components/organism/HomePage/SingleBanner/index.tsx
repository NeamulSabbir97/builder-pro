"use client";
import { Container } from "@/components/atomic";
import { Button } from "@material-tailwind/react";

export const SingleBanner = () => {
	const backgroundPattern = {
		backgroundImage: `url("/images/background/single_banner_pattern.png")`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<div className="bg-default">
			<Container>
				<div className="py-20">
					<div
						className="bg-lightGreen rounded-xl p-12  flex flex-col items-center text-center "
						style={backgroundPattern}
					>
						<h2 className="text-white">
							Revamp Your Realtor and Lead <br /> Management System
						</h2>
						<p className="text-white w-1/2 my-5">
							The Realtor and Leads Management System is a comprehensive platform designed to streamline
							real estate operations and optimize lead management processes
						</p>

						<Button variant="filled" className="bg-white text-lightGreen">
							Let&apos;s Get Started
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};
