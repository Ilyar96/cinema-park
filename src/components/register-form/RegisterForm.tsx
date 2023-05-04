import React, { ChangeEvent, useEffect, useState, useRef, KeyboardEvent } from 'react';
import Link from "next/link";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/router";

import { AppRoutes } from "@/components/constants/routes";
import { Input, Button, P, FileInput } from '../ui';
import { useAuth } from "@/hooks";
import { RegisterData, registerSchema } from "./schema";
import { FillingCircle } from '../filling-circle/FillingCircle';
import { formatBytes, setFileName } from "@/helpers";

import styles from "./RegisterForm.module.scss";
import AddAvatarSvg from '@/assets/images/add-avatar.svg';

export const RegisterForm = () => {
	const { query } = useRouter();
	const [avatar, setAvatar] = useState<File | null>(null);
	const avatarRef = useRef<HTMLInputElement | null>(null);

	const { register, handleSubmit, setFocus, setValue, formState: { errors }, getValues } = useForm<RegisterData>({
		resolver: yupResolver(registerSchema),
		mode: "onChange",
	});

	const { registerHandler, isSubmitting, uploadProgress } = useAuth();
	const isUploading = isSubmitting && avatar;

	useEffect(() => {
		setFocus("name");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmit = (data: RegisterData) => registerHandler(data);

	const onAvatarChange = (file: File) => {
		setAvatar(file);
		setValue("avatar", file, { shouldValidate: true });
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		file && onAvatarChange(file);
	};

	const onLabelKeyDown = (e: KeyboardEvent) => {
		if (e.code === "Enter" || e.code === "Space") {
			e.preventDefault();
			avatarRef.current?.click();
		}
	};

	return (
		<form
			className={cn(styles.root,)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				placeholder="Имя"
				errorMessage={errors.name ? errors.name.message : ''}
				{...register("name")}
			/>
			<Input
				placeholder="Email"
				errorMessage={errors.email && errors.email.message}
				{...register("email")}
			/>
			<Input
				errorMessage={errors.password && errors.password.message}
				placeholder="Пароль"
				{...register("password")}
			/>

			<FileInput
				errorMessage={errors.avatar && errors.avatar.message}
				onLabelKeyDown={onLabelKeyDown}
				disabled={isSubmitting}
				onFileChange={onAvatarChange}
				isDraggable
				{...register("avatar")}
				onChange={onChange}
				ref={(e) => {
					register("avatar").ref(e);
					avatarRef.current = e;
				}}
			>
				<div className={styles.label}>
					{
						isUploading ?
							<FillingCircle size={32} uploadingProgress={uploadProgress} /> :
							<AddAvatarSvg width={30} height={30} />
					}

					<span>
						{avatar ? setFileName(avatar) : "Выбрать аватарку"}
						{"  "}
						{avatar &&
							<span className={styles.fileSize}>{`(${formatBytes(avatar?.size, 1)})`}</span>
						}
					</span>
				</div>
			</FileInput>

			<Button fullWidth type="submit" disabled={isSubmitting}>{isUploading ? "Регистрация..." : "Зарегистрироваться"}</Button>

			<P>
				Уже зарегистрированы?{" "}
				<Link href={{
					pathname: AppRoutes.LOGIN,
					query
				}}>Войти</Link>
			</P>
		</form>
	);
};
