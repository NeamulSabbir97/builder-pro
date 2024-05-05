import { DropDown } from "@/components/molecules";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { leftData, rightData } from "./constant";

interface PropsType {
	open: boolean;
}

export const DropDownProductItem: FC<PropsType> = ({ open }) => {
	const backgroundPattern = {
		backgroundImage: `url("/images/background/menu_pattern.png")`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	return (
		<DropDown open={open}>
			<div className="px-8 pb-8 flex gap-44 w-[940px]" style={backgroundPattern}>
				<div>
					{leftData?.map((data, i) => {
						return (
							<div key={i}>
								<p className="font-semibold text-primary mt-8 ">{data?.title}</p>
								{data?.features?.map((link, i) => {
									return (
										<div key={i}>
											<Link href="#" className="block mt-4 text-deepGrey hover:text-primary">
												{link}
											</Link>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>

				<div>
					<p className="font-semibold text-primary pt-8">MANAGEMENT</p>

					<hr className="bg-lightGreen h-1 my-3" />

					<div className="flex flex-wrap flex-col gap-x-10 h-[39rem]">
						{rightData?.map((rl, i) => {
							return (
								<div key={i}>
									<div className="flex items-center gap-2">
										<div className="bg-[#E1F2F2] w-8 h-8 flex items-center justify-center rounded-md">
											<Image src={rl?.img} width={20} height={20} alt={rl?.title} />
										</div>
										<p className="font-semibold text-primary w-full">{rl?.title}</p>
									</div>
									<div className="mb-5">
										{rl?.features?.map((el, i) => {
											return (
												<Link
													href="#"
													className="block mt-4 text-deepGrey hover:text-primary"
													key={i}
												>
													{el}
												</Link>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</DropDown>
	);
};
