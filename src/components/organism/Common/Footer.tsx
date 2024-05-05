import { Container } from "@/components/atomic";
import Icon, { facebook, insta, linkedin, twitter } from "@/libs/icons";
import { Brand } from "./Brand";

export const Footer = () => {
	return (
		<Container>
			<div className="my-12">
				<div className="grid grid-cols-5">
					<div>
						<Brand />
						<div className="flex gap-4 mt-12">
							<div className="w-8 h-8 bg-default flex justify-center items-center  rounded-full">
								<Icon path={insta} width={20} height={20} fill="var(--lightGreen)" />
							</div>
							<div className="w-8 h-8 bg-default flex justify-center items-center rounded-full">
								<Icon path={facebook} width={20} height={20} fill="var(--lightGreen)" />
							</div>
							<div className="w-8 h-8 bg-default flex justify-center items-center rounded-full">
								<Icon path={linkedin} width={20} height={20} fill="var(--lightGreen)" />
							</div>
							<div className="w-8 h-8 bg-default flex justify-center items-center rounded-full">
								<Icon path={twitter} width={20} height={20} fill="var(--lightGreen)" />
							</div>
						</div>
					</div>
					<div>
						<p className="text-[18px] font-semibold">Pages</p>
						<p className="text-[16px]">About Us</p>
						<p className="text-[16px]">Features</p>
						<p className="text-[16px]">Product</p>
						<p className="text-[16px]">Pricing</p>
					</div>
					<div>
						<p className="text-[18px] font-semibold">Company</p>
						<p className="text-[16px]">Careers</p>
						<p className="text-[16px]">Guide</p>
						<p className="text-[16px]">Startup Program</p>
					</div>
					<div>
						<p className="text-[18px] font-semibold">Support</p>
						<p className="text-[16px]">Help Center</p>
						<p className="text-[16px]">Customer Support</p>
						<p className="text-[16px]">API Docs</p>
						<p className="text-[16px]">System Status</p>
					</div>
					<div>
						<p className="text-[18px] font-semibold">Resources</p>
						<p className="text-[16px]">FAQ</p>
						<p className="text-[16px]">Blog</p>
						<p className="text-[16px]">Privacy Policy</p>
						<p className="text-[16px]">Terms of Service</p>
					</div>
				</div>
				<p className="mt-14">Copyright &copy; {new Date().getFullYear()} BuilderPro360</p>
			</div>
		</Container>
	);
};
