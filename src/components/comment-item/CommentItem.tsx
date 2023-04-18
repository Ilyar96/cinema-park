import React, { FC, useState } from 'react';
import { useRouter } from "next/router";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import { confirmAlert } from 'react-confirm-alert';
import { CommentItemProps } from "./CommentItem.type";
import { Button, UserAvatar } from "../ui";
import { isString } from "@/@types";
import { CommentService } from "@/services/commentService";
import { CommentForm } from '../comment-form/CommentForm';
import { useAppSelector } from "@/store/store";
import { getUser } from "@/store/reducers/auth/selectors";
import ru from 'javascript-time-ago/locale/ru.json';
import styles from "./CommentItem.module.scss";
import 'react-confirm-alert/src/react-confirm-alert.css';

TimeAgo.addLocale(ru);

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const { sender, text, date } = comment;
	const { query } = useRouter();
	const user = useAppSelector(getUser);
	const isCurrentUserComment = user?.uid === sender.uid;

	const commentDeleteHandler = () => {
		if (!isCurrentUserComment || !isString(query.id)) {
			return;
		}

		CommentService.removeById(query.id, comment.id);
	};

	const formToggleHandler = (value?: boolean) => {
		if (value) {
			return setIsFormVisible(value);
		}
		setIsFormVisible((prev) => !prev);
	};

	const onClick = () => {
		confirmAlert({
			title: 'Удаление комментария',
			message: 'Действительно хотите удалить данный комментарий?',
			buttons: [
				{
					label: 'Удалить',
					className: "react-confirm-alert-button",
					onClick: () => commentDeleteHandler()
				},
				{
					label: 'Отмена',
					className: "react-confirm-alert-button",
				}
			]
		});
	};

	return (
		<div className={styles.item}>
			<div className={styles.head}>
				<UserAvatar className={styles.name} user={sender} size="sm" />
				<div className={styles.name}>{sender.displayName}</div>

				{date &&
					<ReactTimeAgo className={styles.date} date={new Date(date.seconds * 1000)} locale="ru" />
				}
			</div>

			<div className={styles.message}>{text}</div>

			{isCurrentUserComment &&
				<>
					<div className={styles.buttons}>
						<Button
							className={styles.btn}
							appearance="text"
							onClick={onClick}
						>
							Удалить
						</Button>
						<Button
							className={styles.btn}
							appearance="text"
							onClick={() => formToggleHandler()}
						>
							{isFormVisible ? "Скрыть" : "Редактировать"}
						</Button>
					</div>

					{isFormVisible &&
						<CommentForm
							className={styles.form}
							btnLabel="Обновить"
							comment={comment}
							initialValue={comment.text}
							callback={formToggleHandler}
						/>}
				</>
			}
		</div>
	);
};
