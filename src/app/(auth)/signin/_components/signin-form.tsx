"use client";

import { Button } from "@/app/_components/button/button";
import { Textbox } from "@/app/_components/textbox";
import { useForm } from "react-hook-form";
import { SignIn } from "../_types/sign.in.types";
import { TextInput } from "@/app/_components/form-input";
import { useSignIn } from "../_api/signin";
import { useRouter } from "next/navigation";
import { useNotificationStore } from "@/store/notification.store";
import { useEffect } from "react";

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<SignIn>();

	const showNotification = useNotificationStore(
		(state) => state.showNotification
	);
	const router = useRouter();

	const signIn = useSignIn({
		onSuccess: () => {
			router.push(`./verify?mobile=${getValues(`mobile`)}`);
			showNotification({
				type: "info",
				message: "کد تایید به شماره شما ارسال شد!",
			});
		},
	});

	const onSubmit = (data: SignIn) => {
		// console.log(data);
		signIn.submit(data);
	};

	return (
		<>
			<h5 className="text-2xl">ورود | ثبت نام</h5>
			<p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
			<form
				className="flex flex-col gap-6 mt-16"
				onSubmit={handleSubmit(onSubmit)}>
				{/* <Textbox
					{...register("mobile", { required: "شماره موبایل الزامی است!" })}
					placeholder="شماره موبایل"
				/> */}

				<TextInput<SignIn>
					register={register}
					name={"mobile"}
					rules={{
						required: {
							value: true,
							message: "شماره موبایل الزامی است!",
						},
						maxLength: {
							value: 11,
							message: "شماره موبایل باید 11 رقم باشد",
						},
						minLength: {
							value: 11,
							message: "شماره موبایل باید 11 رقم باشد",
						},
					}}
					errors={errors}
				/>
				<Button type="submit" variant="primary" isLoading={signIn.isPending}>
					تایید و دریافت کد
				</Button>
			</form>
		</>
	);
};

export default SignInForm;
