import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useAppSelector } from "@/store/store";
import { getUser } from "@/store/reducers/auth/selectors";
import { useAuth } from "@/hooks";
import { MenuUserBtn, UserDetailsCard } from "../";
import styles from "./MenuUserDetails.module.scss";


export const MenuUserDetails = () => {
	const [isOpen, setIsOpen] = useState(false);
	const user = useAppSelector(getUser);
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

	// TODO баг с кликом

	return (
		<div className={styles.wrapper}>
			<MenuUserBtn user={user} onClick={handleOpen} />
			<UserDetailsCard isOpen={isOpen} ref={dropdownRef} isDropdown />
		</div >
	);
};
