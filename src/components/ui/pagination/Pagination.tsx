import React, { FC } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import { PaginationProps } from './Pagination.type';
import { useActions } from "@/hooks";
import styles from "./Pagination.module.scss";

export const Pagination: FC<PaginationProps> = ({ data, className }) => {
	const { page, pages } = data;
	const { changePage } = useActions();


	return (
		<div className={styles.wrapper}>
			<ResponsivePagination
				previousClassName={styles.prev}
				nextClassName={styles.next}
				className={styles.pagination}
				pageItemClassName={styles.pageItem}
				pageLinkClassName={styles.pageLink}
				disabledItemClassName={styles.disabledItem}
				disabledLinkClassName={styles.disabledLink}
				activeItemClassName={styles.active}
				current={page}
				total={pages}
				onPageChange={changePage}
			/>
		</div>
	);
};
