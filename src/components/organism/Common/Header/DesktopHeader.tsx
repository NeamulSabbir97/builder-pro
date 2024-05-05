"use client";
import { Container } from "@/components/atomic";
import Icon, { downArrow } from "@/libs/icons";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { Brand } from "../Brand";
import { DropDownProductItem } from "./DropDownProductItem";

export const DesktopHeader = () => {
	const [open, setOpen] = useState<boolean>(false);
	console.log(open);
	return (
		<Container>
			<div>
				<div className="flex justify-between items-center">
					<div>
						<Brand />
					</div>
					<div className=" flex items-center ">
						<Link href="/" className="p-6">
							Home
						</Link>
						<div
							className="relative flex flex-col items-center p-4"
							onMouseEnter={() => setOpen(true)}
							onMouseLeave={() => setOpen(false)}
						>
							<p className="flex items-center text-[16px] text-secondary cursor-pointer">
								Product <Icon path={downArrow} width={16} height={16} fill="var(--secondary)" />
							</p>
							<DropDownProductItem open={open} />
						</div>

						<Link href="#" className="p-4">
							Pricing
						</Link>
						<Link href="#" className="p-4">
							Pricing
						</Link>
						<Link href="#" className="p-4">
							Resources
						</Link>
						<Link href="#" className="p-4">
							Support
						</Link>
						<Link href="#" className="p-4">
							Contact
						</Link>
					</div>
					<div className="flex justify-end py-6">
						<Button variant="text" className="text-primary">
							Log In
						</Button>
						<Button variant="filled" className="bg-primary rounded-lg">
							<Link href="sign-up">Sign Up</Link>
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
};
