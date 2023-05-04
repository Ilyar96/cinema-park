import React, { FC, useEffect, useRef, useState } from 'react';
import Link from "next/link";
import cn from "classnames";
import { useOnClickOutside } from "usehooks-ts";

import { Portal, UserDetailsCard } from "../";
import { AppRoutes } from "@/components/constants/routes";
import { Button } from "../ui";
import { MobileMenuProps } from "./MobileMenu.type";
import { toggleBodyLockClass } from "@/helpers";
import { useAppSelector } from "@/store/store";
import { getUser } from "@/store/reducers/auth/selectors";
import { navList } from "@/components/constants";

import styles from "./MobileMenu.module.scss";
import MenuSvg from '@/assets/images/menu.svg';
import { useRouter } from "next/router";

export const MobileMenu: FC<MobileMenuProps> = ({ className }) => {
	const { asPath } = useRouter();
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
		return (<li key={title}>
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
							<Button className={styles.login} href={AppRoutes.LOGIN} returnUrl={asPath}>Войти</Button>}
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
