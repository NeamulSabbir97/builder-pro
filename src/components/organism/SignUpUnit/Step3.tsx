import Image from "next/image";

export const Step3 = () => {
	return (
		<div className="w-1/2 mx-auto">
			<Image src="/images/success/signup_success.png" width={330} height={330} alt="" />
			<p>
				Successfully created your account. We sent you a mail to activate your account & set Your password. Also
				Check your spam Folder.
			</p>
		</div>
	);
};
