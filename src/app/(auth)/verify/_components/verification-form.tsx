"use client";
import { Button } from "@/app/_components/button/button";
import Link from "next/link";
import AuthCode from "../../../_components/auth-code/auto-code";
import { AuthCodeRef } from "@/app/_components/auth-code/auth-code.types";
import { useRef } from "react";

const VerificationForm = () => {
	const authCodeRef = useRef<AuthCodeRef>(null);
	return (
		<>
			<h5 className="text-2xl">کد تایید</h5>
			<p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
			<form className="flex flex-col gap-6 mt-10 flex-1">
				<AuthCode
					className="mt-10"
					onChange={(value) => {
						console.log(value);
					}}
					ref={authCodeRef}
				/>
				Timer
				<Button isLink={true} onClick={authCodeRef.current?.clear}>
					ارسال مجدد کد تایید
				</Button>
				<Button type="submit" variant="primary">
					تایید و ادامه
				</Button>
				<div className="flex items-start gap-1 justify-center mt-auto">
					<span>برای اصلاح شماره موبایل</span>
					<Link href="/signin" className="text-primary">
						اینجا
					</Link>
					<span>کلیک کنید</span>
				</div>
			</form>
		</>
	);
};

export default VerificationForm;
