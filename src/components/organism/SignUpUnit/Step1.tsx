import { FormInput } from "@/components/atomic";
import { Checkbox } from "@material-tailwind/react";
import Image from "next/image";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface PropsType {
	register: UseFormRegister<{ fullName: string; email: string; number: number }>;
	errors: FieldErrors<{
		number: number;
		fullName: string;
		email: string;
	}>;
}
export const Step1: FC<PropsType> = ({ register, errors }) => {
	return (
		<div>
			<p>
				Already have an account? <span className="font-medium text-primary">Sign In</span>
			</p>
			<p className="text-[16px] font-medium mt-4">Primary Contact</p>

			<FormInput
				label="Full Name"
				placeholder="Your name"
				type="text"
				error={errors?.fullName?.message}
				{...register("fullName")}
			/>

			<FormInput
				label="Email"
				placeholder="Your email"
				type="email"
				error={errors?.email?.message}
				{...register("email")}
			/>

			<FormInput
				label="Phone Number"
				placeholder="Your number"
				type="number"
				error={errors?.number?.message}
				{...register("number")}
			/>

			<div className="flex items-center gap-2 mt-8">
				<Image src="/images/icons/champion.png" width={24} height={24} alt="Champion Icon" />
				<p className="text-[16px] font-medium">Designate BuilderPro360 Champion</p>
			</div>
			<p className="mt-4">
				The ProBuild360 Champion is the person in your organization responsible for the successful
				implementation of ProBuild360.
			</p>

			<Checkbox label="Same as Primary Contact" crossOrigin={undefined} ripple />
		</div>
	);
};
