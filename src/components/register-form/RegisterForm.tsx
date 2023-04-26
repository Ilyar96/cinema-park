import React, { ChangeEvent, useEffect, useState, useRef, KeyboardEvent } from 'react';
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AppRoutes } from "@/components/constants/routes";
import { Input, Button, P, FileInput } from '../ui';
import { useAuth } from "@/hooks";
import styles from "./RegisterForm.module.scss";
import AddAvatarSvg from '@/assets/images/add-avatar.svg';
import { RegisterData, registerSchema } from "./schema";
import { FillingCircle } from '../filling-circle/FillingCircle';
import { formatBytes, setFileName } from "@/helpers";

export const RegisterForm = () => {
	const [avatar, setAvatar] = useState<File | null>(null);
	const avatarRef = useRef<HTMLInputElement | null>(null);

	const { register, handleSubmit, setFocus, formState: { errors } } = useForm<RegisterData>({
		resolver: yupResolver(registerSchema),
		mode: "onChange",
	});

	const { registerHandler, isSubmitting, uploadProgress } = useAuth();
	const isUploading = isSubmitting && avatar;

	useEffect(() => {
		setFocus("name");
	}, []);

	const onSubmit = (data: RegisterData) => registerHandler(data);

	const onAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		file && setAvatar(file);
		register("avatar").onChange(e);
	};

	const onLabelKeyDown = (e: KeyboardEvent) => {
		if (e.code === "Enter" || e.code === "Space") {
			e.preventDefault();
			avatarRef.current?.click();
		}
	};

	return (
		<form
			className={styles.root}
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
				type="file"
				errorMessage={errors.avatar && errors.avatar.message}
				disabled={isSubmitting}
				{...register("avatar")}
				ref={(e) => {
					register("avatar").ref(e);
					avatarRef.current = e;
				}}
				onChange={(e) => onAvatarChange(e)}
				onLabelKeyDown={onLabelKeyDown}
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
				<Link href={AppRoutes.LOGIN}>Войти</Link>
			</P>
		</form>
	);
};
