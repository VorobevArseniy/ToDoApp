"use client";

import { useFormStatus } from "react-dom";

const Button = () => {
	const { pending } = useFormStatus();
	return (
		<button disabled={pending}>{pending ? "Synchronising" : "Add"}</button>
	);
};

export default Button;
