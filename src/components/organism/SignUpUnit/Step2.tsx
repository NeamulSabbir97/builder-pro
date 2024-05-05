import { FormInput } from "@/components/atomic";
import { Radio } from "@material-tailwind/react";

export const Step2 = () => {
	return (
		<div>
			<p className="text-[16px] font-medium mt-4">Payment info for the Package</p>
			<div className="bg-default rounded p-4 my-4">
				<div className="grid grid-cols-2">
					<div>
						<p className="text-[16px] font-medium">Starter</p>
						<p className="text-[20px] font-semibold">CAD$ 49</p>
						<p className="text-deepGrey">1-10 user, per month billed annually</p>
					</div>
					<div>
						<Radio crossOrigin={undefined} className=" " label="Billed Annually" />
						<Radio crossOrigin={undefined} className=" " label="Billed Monthly" />
					</div>
				</div>

				<hr className="my-6  bg-white h-1" />

				<p className="flex justify-between mb-3">
					Package Fee <span>$49.00</span>
				</p>
				<p className="flex justify-between">
					HST (10%) <span>$4.09</span>
				</p>

				<hr className="my-6  bg-white h-1" />

				<p className="flex justify-between">
					Total Payable Amount <span>$53.09</span>
				</p>
			</div>
			<p className="text-primary font-medium">Apply a promo code</p>

			<FormInput label="Email" />

			<FormInput label="Name on card" />

			<FormInput label="Card Number" />
		</div>
	);
};
