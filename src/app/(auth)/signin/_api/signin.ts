import { createData } from "@/core/http-service/http-service";
import { SignIn } from "../_types/sign.in.types";
import { useMutation } from "@tanstack/react-query";

const signin = (model: SignIn): Promise<void> =>
	createData<SignIn, void>("/signin", model);

type UseSignInOptions = {
	onSuccess?: () => void;
};

export const useSignIn = ({ onSuccess }: UseSignInOptions) => {
	const { mutate: submit, isPending } = useMutation({
		mutationFn: signin,
		onSuccess: onSuccess,
	});

	return {
		submit,
		isPending,
	};
};
