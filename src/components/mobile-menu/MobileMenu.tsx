import React, { FC, useEffect, useRef, useState } from 'react';
import Link from "next/link";
import cn from "classnames";
import { useOnClickOutside } from "usehooks-ts";

import { Portal, UserDetailsCard } from "../";
import { AppRoutes } from "@/constants/routes";
import { Button } from "../ui";
import { MobileMenuProps } from "./MobileMenu.type";
import { toggleBodyLockClass } from "@/helpers";
import { useAppSelector } from "@/store/store";
import { getUser } from "@/store/reducers/auth/selectors";
import { navList } from "@/constants";

import styles from "./MobileMenu.module.scss";
import MenuSvg from '@/assets/images/menu.svg';

export const MobileMenu: FC<MobileMenuProps> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const firstLinkRef = useRef<HTMLAnchorElement>(null);
	const user = useAppSelector(getUser);

	const menuCloseHandler = () => {
		setIsOpen(false);
		toggleBodyLockClass("remove");
	};

	const handleMenuToggle = () => {
		setIsOpen(prev => !prev);
		toggleBodyLockClass();
	};

	useOnClickOutside(menuRef, menuCloseHandler);

	useEffect(() => {
		if (isOpen) {
			firstLinkRef.current?.focus();
		}
	}, [isOpen]);

	const navListLayout = navList.map(({ href, title }, i) => {
		return (<li>
			<Link
				href={href}
				ref={i === 0 ? firstLinkRef : null}
				onClick={menuCloseHandler}
			>
				{title}
			</Link>
		</li>);
	});

	return (
		<div className={className}>
			<Button className={styles.menuBtn} onClick={handleMenuToggle} withoutWrapper>
				<MenuSvg className={styles.menuIcon} />
			</Button>
			<Portal>
				<div className={cn(styles.wrapper, { [styles.open]: isOpen })}>
					<div className={styles.menuWrapper} ref={menuRef}>
						{user ?
							<UserDetailsCard className={styles.userCard} isOpen={true} /> :
							<Button className={styles.login} href={AppRoutes.LOGIN}>Войти</Button>}
						<nav>
							<ul className={styles.linksList}>
								{navListLayout}
							</ul>
						</nav>
					</div>
					<div className={styles.overlay}>
						<Button
							className={styles.close}
							appearance="text"
							withoutWrapper
							onClick={menuCloseHandler}
						>
							x
							<span className="visually-hidden">Закрыть</span>
						</Button>
					</div>
				</div>
			</Portal>
		</div>
	);
};
