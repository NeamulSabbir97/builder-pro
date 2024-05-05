import { FormInput } from "@/components/atomic";
import { SpinnerButton } from "@/components/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Brand } from "../Common";

const schema = yup.object({
	fullName: yup.string().required(),
	email: yup.string().required(),
	number: yup.number().required(),
});
// .required();

export const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);

	const submitForm = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="flex items-center h-full">
				<div className="bg-white rounded-2xl p-16 w-2/5 mx-auto">
					<div className="flex flex-col items-center">
						<Brand />
						<p className="text-[16px] font-medium my-8">Create a BuilderPro360 account</p>
					</div>

					<FormInput
						label="Full Name"
						placeholder="Your name"
						type="text"
						error={errors?.fullName?.message}
						{...register("fullName")}
					/>
					{/* <Step1 register={register} errors={errors} /> */}
					{/* <Step2 /> */}
					{/* <Step3 /> */}

					<SpinnerButton label="Submit" type="submit" className="hover:bg-primary mt-5" fullWidth />
				</div>
			</div>
		</form>
	);
};
