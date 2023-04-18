import React, { FC } from 'react';
import cn from "classnames";
import { UserBtnProps } from "./MenuUserBtn.type";
import styles from "./MenuUserBtn.module.scss";
import { UserAvatar } from "../ui";

export const MenuUserBtn: FC<UserBtnProps> = ({ user, className, ...props }) => {
	return (
		<button className={cn(styles.btn, className)} {...props}>
			<UserAvatar user={user} />
		</button>
	);
};
