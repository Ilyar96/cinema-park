import React, { FC } from 'react';
import cn from "classnames";
import Image from "next/image";
import { UserAvatarProps } from "./UserAvatar.type";
import styles from "./UserAvatar.module.scss";

export const UserAvatar: FC<UserAvatarProps> = ({ className, user, size = "md" }) => {
	return (
		<>
			{user.photoURL ?
				<Image
					className={cn(styles.image, styles[size], className)}
					src={user.photoURL}
					alt={user.displayName}
					width={70}
					height={70}
				/> :
				<div className={cn(styles.noImage, styles[size], className)}>
					{user.displayName.charAt(0).toUpperCase()}
				</div>
			}
		</>
	);
};
