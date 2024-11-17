"use client";

import ButtonStyles from "./ButtonStyles.module.scss";
import { useFormStatus } from "react-dom";

const Button = () => {
	const { pending } = useFormStatus();
	return (
		<button disabled={pending} className={ButtonStyles.main}>
			{pending ? "Synchronising" : "Add"}
		</button>
	);
};

export default Button;
