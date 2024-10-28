import { get, post } from "../axios";
import { ResponseAuthType } from "@/types/response-auth";
import { UserType } from "@/types/user";
import { LoginFormType } from "@/app/login/_components/login-form";
import { RegisterFormType } from "@/app/register/_components/register-form";
import { VerifyTokenType } from "@/app/reset-password/_components/reset-password-form";
import { ResponseVerifyTokenType } from "@/types/response-verify-token";

export async function LoginApi({ data }: { data: LoginFormType }) {
  return await post<ResponseAuthType>({
    url: "/auth/login",
    data,
  });
}

export async function RegisterApi({ data }: { data: RegisterFormType }) {
  return await post<ResponseAuthType>({
    url: "/auth/register",
    data,
  });
}

export async function VerifyToken({ data }: { data: VerifyTokenType }) {
  return await post<ResponseVerifyTokenType>({
    url: "/auth/verify-token",
    data,
  });
}

export async function SetPasswordApi({ data }: { data: { password: string } }) {
  return await post<ResponseAuthType>({
    url: "/auth/set-password",
    data,
  });
}

export async function GetUser() {
  return await get<UserType>({
    url: "/auth/user",
  });
}

export async function LogOut() {
  return await post({
    url: "/auth/logout",
  });
}
