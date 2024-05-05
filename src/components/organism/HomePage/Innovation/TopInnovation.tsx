import Image from "next/image";

export const TopInnovation = () => {
	return (
		<div className="mt-20 relative">
			<h1 className="text-9xl font-bold text-white absolute">BuilderPro360</h1>
			<div className="grid grid-cols-2 items-center relative">
				<div>
					<Image src="/images/man/profile_1.png" width={430} height={530} alt="" />
					<Image
						src="/images/man/dashboard_1.png"
						width={320}
						height={300}
						alt=""
						className="absolute top-[45%] ml-[18%]"
					/>
				</div>
				<div>
					<h4 className="text-lg font-medium text-lightGreen">GET MORE</h4>
					<h2>Get more Project or Leads</h2>
					<p className="text-[16px] font-medium mt-6">Lorem Ipsum is simply dummy tex</p>
					<p className="font-normal text-deepGrey">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry&apos;s standard dummy text ever since the 1500s,
					</p>

					<p className="text-[16px] font-medium mt-6">Lorem Ipsum is simply dummy tex</p>
					<p className="font-normal text-deepGrey">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry&apos;s standard dummy text ever since the 1500s,
					</p>

					<p className="text-[16px] font-medium mt-6">Lorem Ipsum is simply dummy tex</p>
					<p className="font-normal text-deepGrey">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry&apos;s standard dummy text ever since the 1500s,
					</p>
				</div>
			</div>
		</div>
	);
};
