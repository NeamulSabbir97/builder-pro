import Image from "next/image";

export const BottomInnovation = () => {
	return (
		<div className="grid grid-cols-2 items-center mt-24">
			<div>
				<h4 className="text-lg font-medium text-lightGreen">GET MORE</h4>
				<h2>Get more Project or Leads</h2>
				<p className="text-[16px] font-medium mt-6">Lorem Ipsum is simply dummy tex</p>
				<p className="font-normal text-deepGrey">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry&apos;s standard dummy text ever since the 1500s,
				</p>

				<p className="text-[16px] font-medium mt-6">Lorem Ipsum is simply dummy tex</p>
				<p className="font-normal text-deepGrey">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry&apos;s standard dummy text ever since the 1500s,
				</p>

				<p className="text-[16px] font-medium mt-6">Lorem Ipsum is simply dummy tex</p>
				<p className="font-normal text-deepGrey">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry&apos;s standard dummy text ever since the 1500s,
				</p>
			</div>
			<div className="flex justify-end items-center relative">
				<div>
					<Image src="/images/man/profile_2.jpg" width={430} height={530} alt="" />
					<Image
						src="/images/man/dashboard_2.png"
						width={374}
						height={346}
						alt=""
						className="absolute top-[36%] right-[40%]"
					/>
				</div>
			</div>
		</div>
	);
};
