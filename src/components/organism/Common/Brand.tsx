import Image from "next/image";
import Link from "next/link";

export const Brand = () => {
	return (
		<Link href="/">
			<Image src="/images/logo.png" width={170} height={37} alt="Logo" />
		</Link>
	);
};
