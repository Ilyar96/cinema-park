import React, { useRef, useState } from 'react';
import cn from "classnames";
import { useOnClickOutside } from 'usehooks-ts';
import { useAppSelector } from "@/store/store";
import { getUser } from "@/store/reducers/auth/selectors";
import { useAuth } from "@/hooks";
import { MenuUserBtn } from "../";
import { Button, UserAvatar } from "../ui";
import styles from "./MenuUserDetails.module.scss";

export const MenuUserDetails = () => {
	const [isOpen, setIsOpen] = useState(false);
	const user = useAppSelector(getUser);
	const { logoutHandler } = useAuth();
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = () => {
		setIsOpen(false);
	};

	useOnClickOutside(dropdownRef, handleClickOutside);

	const handleOpen = () => {
		setIsOpen(prev => !prev);
	};

	if (!user) {
		return null;
	}

	return (
		<div className={styles.wrapper}>
			<MenuUserBtn user={user} onClick={handleOpen} />

			<div className={cn(styles.dropdown, { [styles.open]: isOpen })} ref={dropdownRef}>
				<div className={styles.head}>
					<UserAvatar className={styles.avatar} user={user} />

					<div>
						<div className={styles.name}>{user.displayName}</div>
						<div className={styles.email}>{user.email}</div>
					</div>
				</div>

				<div className={styles.options}>
					<Button appearance="text" onClick={logoutHandler}>
						Выйти из аккаунта
					</Button>
				</div>
			</div>
		</div >
	);
};
