import React, { FC } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import { PaginationProps } from './Pagination.type';
import { useActions } from "@/hooks";
import styles from "./Pagination.module.scss";
import { useRouter } from "next/router";
import { setUrlParams } from "@/helpers";
import { useAppSelector } from "@/store/store";
import { getFilters } from "@/store/reducers/filter/selectors";
import cn from "classnames";

export const Pagination: FC<PaginationProps> = ({ data, className }) => {
	const { pathname, replace } = useRouter();
	const filter = useAppSelector(getFilters);
	const { page, pages } = data;
	const { changePage } = useActions();

	const pageChangeHandler = (page: number) => {
		changePage(page);
		replace(pathname + setUrlParams(filter as Record<string, string>), undefined, { shallow: true });
	};

	return (
		<div className={styles.wrapper}>
			<ResponsivePagination
				className={cn(styles.pagination, className)}
				previousClassName={styles.prev}
				nextClassName={styles.next}
				pageItemClassName={styles.pageItem}
				pageLinkClassName={styles.pageLink}
				disabledItemClassName={styles.disabledItem}
				disabledLinkClassName={styles.disabledLink}
				activeItemClassName={styles.active}
				current={page}
				total={pages}
				onPageChange={pageChangeHandler}
			/>
		</div>
	);
};
