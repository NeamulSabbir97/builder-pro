"use client";
import Icon, { rightArrow } from "@/libs/icons";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export const SliderCard = () => {
	return (
		<div className=" flex gap-60">
			<div className="bg-white p-4 rounded-lg">
				<div className="bg-default rounded-lg px-4 py-2  flex justify-center items-center">
					<Image
						src="/images/slider_card_2.jpg"
						width={866}
						height={413}
						alt=""
						className="h-[300px] object-cover"
					/>
				</div>
				<p className="my-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus deserunt autem ratione.
					Numquam dolorum eveniet eum dignissimos velit.
				</p>
				<Button variant="text" className="p-0 text-base text-lightGreen flex items-center gap-1">
					Lorem ipsum <Icon path={rightArrow} fill="var(--lightGreen)" width={20} height={20} />
				</Button>
			</div>
			<div className="bg-white p-4 rounded-lg">
				<div className="bg-default rounded-lg px-4 py-2  flex justify-center items-center">
					<Image
						src="/images/slider_card_1.jpg"
						width={866}
						height={413}
						alt=""
						className="h-[300px] object-cover"
					/>
				</div>
				<p className="my-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus deserunt autem ratione.
					Numquam dolorum eveniet eum dignissimos velit.
				</p>
				<Button variant="text" className="p-0 text-base text-lightGreen flex items-center gap-1">
					Lorem ipsum <Icon path={rightArrow} fill="var(--lightGreen)" width={20} height={20} />
				</Button>
			</div>
			<div className="bg-white p-4 rounded-lg">
				<div className="bg-default rounded-lg px-4 py-2  flex justify-center items-center">
					<Image
						src="/images/slider_card_3.jpg"
						width={866}
						height={413}
						alt=""
						className="h-[300px] object-cover"
					/>
				</div>
				<p className="my-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus deserunt autem ratione.
					Numquam dolorum eveniet eum dignissimos velit.
				</p>
				<Button variant="text" className="p-0 text-base text-lightGreen flex items-center gap-1">
					Lorem ipsum <Icon path={rightArrow} fill="var(--lightGreen)" width={20} height={20} />
				</Button>
			</div>
		</div>
	);
};
