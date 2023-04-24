import React, { ChangeEvent, useEffect, useState } from 'react';
import { SingleValue, MultiValue } from "react-select";
import cn from "classnames";
import { useRouter } from "next/router";
import queryString from 'query-string';

import { Button, Input, RangeSlider, Select } from "../ui";
import { useAppSelector } from '../../store/store';
import { useActions } from "@/hooks";
import { useGetFilmsQuery } from "@/api/filmApi";
import { getFilters } from "@/store/reducers/filter/selectors";
import { ISelectOption } from "../ui/select/Select.type";
import { isMultiValue, isString } from "@/@types";
import { SortType } from "@/@types/query";
import { countryOptions, genreOptions, sortOptions } from "@/constants";
import { getCurrentYear, setUrlParams } from "@/helpers";

import styles from "./Filter.module.scss";

const yearMin = 1900;
const yearMax = getCurrentYear();
const ratingMin = 0;
const ratingMax = 10;

export const Filters = () => {
	const { pathname, replace, query } = useRouter();
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


	const onChange = (e: ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) => {
		setValue(e.target.value);
	};

	const onClick = async () => {
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

		const filter: Record<string, string> = {
			"countries.name": countryName,
			"genres.name": genreName,
			"persons.name": person,
			"names.name": title,
			year: `${year[0]}-${year[1]}`,
			"rating.kp": `${kp[0]}-${kp[1]}`,
			"rating.imdb": `${imdb[0]}-${imdb[1]}`,
			sortField,
			sortType
		};

		changeFilter(filter);

		replace(pathname + setUrlParams(filter), undefined, { shallow: true });
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

	const setInitialValueToSelect = (
		options: ISelectOption[],
		fn: React.Dispatch<React.SetStateAction<SingleValue<ISelectOption> | MultiValue<ISelectOption>>>,
		searchParam: string | string[] | undefined,
	) => {
		if (!searchParam || !isString(searchParam)) {
			return;
		}

		const searchedOption = options.find((option) => option.value.toLowerCase() === searchParam.toLowerCase());

		searchedOption ? fn(searchedOption) : fn(null);
	};

	const setInitialValueToRangeSlider = (
		searchParam: string | string[] | undefined,
		fn: React.Dispatch<React.SetStateAction<number[]>>
	) => {
		if (!searchParam || !isString(searchParam)) {
			return;
		}

		const res = searchParam.split("-").map((item) => Number(item));
		fn(res);
	};

	useEffect(() => {
		const country = query["countries.name"];
		const genre = query["genres.name"];
		const person = query["persons.name"];
		const kp = query["rating.kp"];
		const imdb = query["rating.imdb"];
		const title = query["names.name"];
		const { sortField, sortType, year } = query;

		setInitialValueToSelect(countryOptions, setCountry, country);
		setInitialValueToSelect(genreOptions, setGenre, genre);

		setInitialValueToRangeSlider(kp, setKp);
		setInitialValueToRangeSlider(imdb, setImdb);
		setInitialValueToRangeSlider(year, setYear);

		if (isString(sortType) && sortType === "1") {
			setInitialValueToSelect(sortOptions, setSort, "-" + sortField);
		}

		if (isString(sortType) && sortType === "-1") {
			setInitialValueToSelect(sortOptions, setSort, sortField);
		}

		if (person && isString(person)) {
			setPerson(person);
		}

		if (title && isString(title)) {
			setTitle(title);
		}
	}, []);

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
							instanceId="genre"
						/>
					</div>
					<div className={styles.col}>
						<Select
							options={countryOptions}
							value={country}
							placeholder="Выбрать страну:"
							instanceId="country"
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
							instanceId="sort"
							placeholder="Сортировка по:"
						/>
					</div>

				</div>

				<Button onClick={onClick} disabled={isFetching}>Поиск</Button>
			</div>
		</>
	);
};
