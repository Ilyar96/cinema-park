import React, { ForwardedRef, forwardRef } from 'react';
import cn from "classnames";
import { Button, UserAvatar } from "../ui";
import { useAuth } from "@/hooks";
import { getUser } from "@/store/reducers/auth/selectors";
import { useAppSelector } from "@/store/store";
import { UserDetailsCardProps } from "./UserDetailsCard.type";
import styles from "./UserDetailsCard.module.scss";
import { AppRoutes } from "@/constants/routes";

export const UserDetailsCard = forwardRef<HTMLDivElement, UserDetailsCardProps>(({ isOpen, className, isDropdown }, ref) => {
	const { logoutHandler } = useAuth();
	const user = useAppSelector(getUser);

	if (!user) {
		return null;
	}

	//TODO решить проблему с паддингом

	return (
		<div className={
			cn(styles.wrapper, className, {
				[styles.open]: isOpen,
				[styles.dropdown]: isDropdown
			})}
			ref={ref}
		>
			<div className={styles.head}>
				<UserAvatar className={styles.avatar} user={user} />

				<div>
					<div className={styles.name}>{user.displayName}</div>
					<div className={styles.email}>{user.email}</div>
				</div>
			</div>

			<div className={styles.options}>
				<Button
					appearance="text"
					href={AppRoutes.FAVORITES}
					fullWidth
				>
					Избранное
				</Button>
				<Button
					appearance="text"
					onClick={logoutHandler}
					fullWidth
				>
					Выйти из аккаунта
				</Button>
			</div>
		</div>
	);
});
