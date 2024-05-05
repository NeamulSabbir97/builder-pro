"use client";
import Icon, { arrowLeft } from "@/libs/icons";
import { useRouter } from "next/navigation";
import { SignUpForm } from "../organism/SignUpUnit";

export const SignupUnit = () => {
	const router = useRouter();
	return (
		<div>
			<div className="bg-default h-screen p-8 ">
				<div
					className="bg-white w-7 h-7 flex justify-center items-center rounded-full cursor-pointer"
					onClick={() => router?.back()}
				>
					<Icon path={arrowLeft} width={20} height={20} fill="var(--secondary)" />
				</div>
				<SignUpForm />
			</div>
		</div>
	);
};
