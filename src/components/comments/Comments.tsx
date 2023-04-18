import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useLocalStorage } from "usehooks-ts";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/api/firebase";
import { Button, Container, Htag, P } from "../ui";
import { CommentForm, CommentItem } from "../";
import { COMMENTS_COLLECTION_PATH, COMMENTS_PER_PAGE, PREVIOUS_PATHNAME_KEY } from "@/constants";
import { errorHandler } from "@/helpers";
import { IComment } from "@/@types/comment";
import { useAppSelector } from "@/store/store";
import { getUser } from "@/store/reducers/auth/selectors";
import { AppRoutes } from "@/constants/routes";
import styles from "./Comments.module.scss";

export const Comments = () => {
	const { query, push } = useRouter();
	const [commentList, setCommentList] = useState<IComment[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState<number>(1);
	const user = useAppSelector(getUser);
	const pagesCount = Math.ceil(commentList.length / COMMENTS_PER_PAGE);
	const [_, setPreviousPath] = useLocalStorage(PREVIOUS_PATHNAME_KEY, AppRoutes.FILMS + query.id);

	const onRegisterClick = () => {
		setPreviousPath(AppRoutes.FILMS + query.id);
		push(AppRoutes.LOGIN);
	};

	const getComments = () => {
		if (typeof query.id !== "string") {
			return;
		}

		try {
			const unsub = onSnapshot(
				doc(db, COMMENTS_COLLECTION_PATH, query.id),
				(doc) => {
					const res = doc.data();

					if (!res) {
						setIsLoading(false);
						return;
					}

					const resList: IComment[] = [];

					for (const key in res) {
						if (Object.prototype.hasOwnProperty.call(res, key)) {
							const comment = res[key];

							resList.push({ id: key, ...comment });
						}
					}

					resList.sort((a, b) => b.date?.seconds - a.date?.seconds);

					setCommentList(resList);
					setIsLoading(false);
				}
			);

			return () => {
				unsub();
			};
		} catch (err) {
			errorHandler(err);
		}
	};

	useEffect(() => {
		getComments();
	}, [query.id]);

	const loadMore = () => {
		setPage(prev => ++prev);
	};

	const commentItems = commentList.slice(0, page * COMMENTS_PER_PAGE).map((comment) => (
		<CommentItem key={comment.id} comment={comment} />
	));

	// TODO доделать загрузку
	return (
		<Container className={styles.wrapper}>
			{user ?
				(<>
					<Htag tag="h2" className={styles.formTitle}>Добавить комментарий</Htag>
					<CommentForm className={styles.commentForm} />
				</>) :
				(<>
					Чтобы оставить комментарий нужно {" "}
					{<Button withoutWrapper appearance="link" onClick={onRegisterClick}>авторизоваться</Button>}
				</>)
			}
			{isLoading ?
				<h2>Загрузка...</h2>
				: <div className={styles.commentList}>
					<Htag className={styles.commentsTitle} tag="h2">
						Комментарии ({commentList.length}):
					</Htag>

					{commentList.length > 0 ? commentItems : <P>Будьте первым кто напишет комментарий.</P>}

					{page < pagesCount &&
						<Button
							className={styles.moreBtn}
							fullWidth
							onClick={loadMore}
						>
							Загрузить еще
						</Button>}
				</div>}
		</Container>
	);
};
