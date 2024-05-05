"use client";
import { Container } from "@/components/atomic";
import Icon, { downArrow, menu } from "@/libs/icons";
import { Accordion, AccordionBody, Button, Drawer } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { Brand } from "../Brand";

export const MobileHeader = () => {
	const [open, setOpen] = useState(false);
	const [openDropDown, setOpenDropDown] = useState(1);

	const handleOpen = (value: number) => setOpenDropDown(openDropDown === value ? 0 : value);

	const openDrawer = () => setOpen(true);
	const closeDrawer = () => setOpen(false);

	return (
		<div>
			<Container>
				<div className="flex justify-between items-center py-6">
					<Brand />
					<Icon
						path={menu}
						width={20}
						height={20}
						fill="var(--secondary)"
						onClick={openDrawer}
						className="cursor-pointer"
					/>
				</div>
			</Container>

			<Drawer open={open} onClose={closeDrawer} className="p-4 pl-8" placement="right" overlay>
				<div className="mt-5">
					<Link href="/" className="block text-secondary mb-2">
						Home
					</Link>
					<Accordion open={openDropDown === 1}>
						<p
							onClick={() => handleOpen(1)}
							className="text-[15px] border-b-0 flex items-center gap-3 mb-2"
						>
							Product <Icon path={downArrow} width={16} height={16} fill="var(--secondary)" />
						</p>
						<AccordionBody>
							<div className="flex flex-col -mt-5 ml-3 gap-2">
								<p className="font-semibold text-primary">PLATFORM</p>
								<Link href="#">Product Review</Link>
								<Link href="#">App</Link>
								<Link href="#">Marketplace</Link>
								<Link href="#">Why Buildertrend</Link>
							</div>
							<div className="flex flex-col  ml-3 gap-2 mt-3">
								<p className="font-semibold text-primary">SOLUTIONS</p>
								<Link href="#">Forhome builder</Link>
								<Link href="#">For remodelers</Link>
								<Link href="#">For speciality contractors</Link>
							</div>
							<div className="flex flex-col  ml-3 gap-2 mt-3">
								<p className="font-semibold text-primary">SERVICES</p>
								<Link href="#">Additional Services</Link>
							</div>
						</AccordionBody>
					</Accordion>
					<Link href="#" className="block text-secondary mb-2">
						Pricing
					</Link>
					<Link href="#" className="block text-secondary mb-2">
						Resources
					</Link>
					<Link href="#" className="block text-secondary mb-2">
						Support
					</Link>
					<Link href="#" className="block text-secondary mb-2">
						Contact
					</Link>

					<Button variant="outlined" className="border-primary text-primary mt-4" fullWidth>
						Login
					</Button>
					<Button variant="filled" className="bg-primary mt-4" fullWidth>
						<Link href="sign-up">Sign Up</Link>
					</Button>
				</div>
			</Drawer>
		</div>
	);
};
