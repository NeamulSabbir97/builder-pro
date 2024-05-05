"use client";
import { Container } from "@/components/atomic";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export const TopSection = () => {
	const backgroundPattern = {
		backgroundImage: `url("/images/background/union_pattern.png")`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		backgroundPosition: "bottom",
	};
	return (
		<div className=" bg-[#E5FAFD] py-7" style={backgroundPattern}>
			<Container>
				<div className=" flex flex-col items-center">
					<p>Introducing Advanced Construction Management Software</p>
					<h1>
						Ahead of Schedule, Within Budget, <br /> Enabling Superior Construction
					</h1>
					<Button
						variant="outlined"
						className="border-lightGreen text-lightGreen flex items-center gap-2 my-6 px-4 py-2"
					>
						<Image src="/images/icons/play.svg" width={20} height={20} alt="" />
						See Video Demo
					</Button>
					<div className="bg-white  rounded p-5">
						<Image src="/images/dashboard.jpg" width={713} height={398} alt="" />
						<p className="mt-3 text-center font-medium">
							Reconstruct the Essential data presented on the Homepage.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};
