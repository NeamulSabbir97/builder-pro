"use client";
import { Container } from "@/components/atomic";
import Icon, { check } from "@/libs/icons";
import { Button } from "@material-tailwind/react";
import { packages } from "./constant";

export const Packages = () => {
	return (
		<Container>
			<div className="py-12">
				<p className="text-center text-lightGreen text-lg font-medium lette">LET’S GET A PALN</p>
				<h2 className="text-center">
					Discover the optimal strategy to support the growth of your construction firm.
				</h2>

				<div className="flex justify-between w-4/5 m-auto">
					{packages.map((el) => (
						<div className="border border-border p-6 rounded-lg my-8" key={el?.id}>
							<p className="text-2xl font-medium">{el?.name}</p>
							<p className="text-3xl font-medium mt-[-10px]">${el?.price}</p>
							<p className="text-xs font-medium">per user/month, billed annually</p>

							<div className="mt-6">
								<p className="font-medium">{el?.title}</p>
								{el?.features?.map((detail, i) => (
									<div key={i} className="flex gap-2 mt-2">
										<div className="bg-gray-200 w-5 h-5 flex justify-center items-center rounded">
											<Icon path={check} width={16} height={16} fill="var(--lightGreen)" />
										</div>
										<p>{detail}</p>
									</div>
								))}
							</div>
							<Button variant="outlined" fullWidth className="border-lightGreen text-lightGreen mt-6">
								Get Started
							</Button>
						</div>
					))}
				</div>

				<div className="flex flex-col items-center">
					<Button variant="filled" className="bg-lightGreen ">
						Request A Paln
					</Button>
				</div>
			</div>
		</Container>
	);
};
