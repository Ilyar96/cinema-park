import React, { ChangeEvent, useState } from 'react';
import { SingleValue, MultiValue } from "react-select";
import cn from "classnames";
import { Button, Input, RangeSlider, Select } from "../ui";
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useActions } from "@/hooks";
import { useGetFilmsQuery } from "@/api/filmApi";
import { getFilters } from "@/store/reducers/filter/selectors";
import { ISelectOption } from "../ui/select/Select.type";
import styles from "./Filter.module.scss";
import { isMultiValue } from "@/@types";
import { SortType } from "@/@types/query";
import { countryOptions, genreOptions, sortOptions } from "@/constants";

const yearMin = 1900;
const yearMax = new Date().getFullYear();
const ratingMin = 0;
const ratingMax = 10;

export const Filters = () => {
	const filters = useAppSelector(getFilters);
	const { isFetching } = useGetFilmsQuery(filters);
	const [isOpen, setIsOpen] = useState(false);
	const [sort, setSort] = useState<SingleValue<ISelectOption> | MultiValue<ISelectOption>>(null);
	const [genre, setGenre] = useState<SingleValue<ISelectOption> | MultiValue<ISelectOption>>(null);
	const [country, setCountry] = useState<SingleValue<ISelectOption> | MultiValue<ISelectOption>>(null);
	const [person, setPerson] = useState('');
	const [title, setTitle] = useState('');
	const [kp, setKp] = useState([ratingMin, ratingMax]);
	const [imdb, setImdb] = useState([ratingMin, ratingMax]);
	const [year, setYear] = useState([yearMin, yearMax]);
	const { changeFilter } = useActions();
	const dispatch = useAppDispatch();

	const onChange = (e: ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) => {
		setValue(e.target.value);
	};

	const onClick = () => {
		let sortField = "rating.kp";
		let sortType = SortType.DESC;
		let genreName = "";
		let countryName = "";

		if (!isMultiValue(genre) && genre) {
			genreName = genre.value;
		}

		if (!isMultiValue(country) && country) {
			countryName = country.value;
		}

		if (!isMultiValue(sort) && sort) {
			sortField = sort.value.replace("-", "");

			if (sort.value.indexOf("-") !== -1) {
				sortType = SortType.ASC;
			}
		}

		dispatch(changeFilter({
			"countries.name": countryName,
			"genres.name": genreName,
			"persons.name": person,
			"names.name": title,
			year: `${year[0]}-${year[1]}`,
			"rating.kp": `${kp[0]}-${kp[1]}`,
			"rating.imdb": `${imdb[0]}-${imdb[1]}`,
			sortField,
			sortType
		}));
	};

	const filterToggleHandler = () => {
		setIsOpen(prev => !prev);
	};

	const sortChangeHandler = (selectedOption: SingleValue<ISelectOption> | MultiValue<ISelectOption>) => {
		setSort(selectedOption);
	};

	const genreChangeHandler = (selectedOption: SingleValue<ISelectOption> | MultiValue<ISelectOption>) => {
		setGenre(selectedOption);
	};

	const countryChangeHandler = (selectedOption: SingleValue<ISelectOption> | MultiValue<ISelectOption>) => {
		setCountry(selectedOption);
	};

	return (
		<>
			<Button className={styles.filterBtn} onClick={filterToggleHandler}>
				{isOpen ? "Скрыть параметры" : "Показать параметры"}
			</Button>
			<div className={cn(styles.wrapper, { [styles.opened]: isOpen })}>

				<div className={styles.row}>
					<div className={styles.col}>
						<Input
							name="person"
							value={person}
							onChange={(e) => onChange(e, setPerson)}
							placeholder="Поиск по актеру, режисеру"
						/>
					</div>
					<div className={styles.col}>
						<Input
							name="title"
							value={title}
							onChange={(e) => onChange(e, setTitle)}
							placeholder="Поиск по точному названию фильма"
						/>
					</div>
				</div>

				<div className={cn(styles.row, styles.withSelect)}>
					<div className={styles.col}>
						<Select
							options={genreOptions}
							value={genre}
							placeholder="Выбрать жанр:"
							onChange={genreChangeHandler}
						/>
					</div>
					<div className={styles.col}>
						<Select
							options={countryOptions}
							value={country}
							placeholder="Выбрать страну:"
							onChange={countryChangeHandler}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.col}>
						<RangeSlider
							min={ratingMin}
							max={ratingMax}
							values={kp}
							setValues={setKp}
							title="KP"
						/>
					</div>
					<div className={styles.col}>
						<RangeSlider
							min={ratingMin}
							max={ratingMax}
							values={imdb}
							setValues={setImdb}
							title="IMDB"
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.col}>
						<RangeSlider
							min={yearMin}
							max={yearMax}
							values={year}
							setValues={setYear}
							title="Годы"
						/>
					</div>
					<div className={styles.col}>
						<Select
							options={sortOptions}
							value={sort}
							onChange={sortChangeHandler}
							placeholder="Сортировка по:"
							styles={{
								control: (baseStyles, state) => {
									return ({
										...baseStyles,
										"&:hover": {
											borderColor: "#6ab630"
										},
										backgroundColor: "inherit",
										borderColor: state.isFocused ? '#5db31b' : '#79c142',
									});
								},
							}}
						/>
					</div>

				</div>

				<Button onClick={onClick} disabled={isFetching}>Поиск</Button>
			</div>
		</>
	);
};
