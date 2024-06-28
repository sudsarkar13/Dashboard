import React from "react";
import { RNChildProp } from "@/types/interface/Interface";

const AuthLayout: React.FC<RNChildProp> = ({
	children,
}: RNChildProp) => {
	return (
		<main>
			<div>{children}</div>
		</main>
	);
};

export default AuthLayout;
