import { useRef, useEffect, useState, PropsWithChildren, FC } from 'react';
import { createPortal } from 'react-dom';


export const Portal: FC<PropsWithChildren> = ({ children }) => {
	const ref = useRef<Element | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>("#modals-root");
		setMounted(true);
	}, []);

	return (mounted && ref.current) ? createPortal(children, ref.current) : null;
};