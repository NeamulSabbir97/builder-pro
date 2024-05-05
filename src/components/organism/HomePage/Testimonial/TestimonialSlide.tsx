"use client";
import Icon, { arrowRight, leftArrow } from "@/libs/icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonails } from "./constant";

export const TestimonialSlide = () => {
	const [slide, setSlide] = useState(0);

	const nextSlide = () => {
		setSlide((prevSlide) => (prevSlide === testimonails.length - 1 ? 0 : prevSlide + 1));
	};

	const prevSlide = () => {
		setSlide((prevSlide) => (prevSlide === 0 ? testimonails.length - 1 : prevSlide - 1));
	};

	// this code for auto slide
	useEffect(() => {
		const intervalId = setInterval(nextSlide, 2500);
		return () => clearInterval(intervalId);
	}, [slide]);

	const backgroundPattern = {
		backgroundImage: `url("/images/background/pattern.png")`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "inherit",
		backgroundPosition: "10% 60%",
	};

	return (
		<div className="bg-lightGreen rounded-lg mt-8 " style={backgroundPattern}>
			{testimonails.map((item, idx) => {
				return (
					<div key={idx} className={` ${slide === idx && "hidden"} rounded-e-lg flex gap-9`}>
						<div className="p-14">
							<p className="text-5xl font-semibold text-white">{item?.name}</p>
							<hr className="my-6 w-1/5" />
							<Image
								src="/images/icons/cotation.png"
								width={30}
								height={30}
								alt="Cotation"
								className="mb-6 "
							/>
							<p className="text-lg font-medium text-white">{item?.detail}</p>
						</div>
						<Image
							width={460}
							height={530}
							src={item.src}
							alt={item.alt}
							className="w-[460px] h-[531px] object-cover rounded-tr-lg"
						/>
					</div>
				);
			})}

			<div className="flex justify-center pb-14">
				<div className="flex items-center gap-7">
					<div onClick={prevSlide} className="cursor-pointer">
						<Icon path={leftArrow} width={32} height={32} fill="#fff" />
					</div>

					<p className="text-[56px] text-white">
						{slide + 1} <span className="text-[16px]">/{testimonails?.length}</span>
					</p>

					<div onClick={nextSlide} className="cursor-pointer">
						<Icon path={arrowRight} width={32} height={32} fill="#fff" />
					</div>
				</div>
			</div>
		</div>
	);
};
