import { Button } from "@material-tailwind/react";
import { FC } from "react";

export const SpinnerButton: FC<SpinnerButtonProps> = ({ loading, label, disabled, ...rest }) => {
	return (
		<Button disabled={loading || disabled} {...rest}>
			{loading ? "Please wait..." : <span>{label}</span>}
		</Button>
	);
};

interface SpinnerButtonProps {
	label: string;
	loading?: boolean;
	disabled?: any;
}
