import React, { ChangeEvent, useState } from 'react';
import { SingleValue, MultiValue } from "react-select";
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
	const { data, isFetching } = useGetFilmsQuery(filters);
	const [sort, setSort] = useState<SingleValue<ISelectOption> | MultiValue<ISelectOption>>(sortOptions[0]);
	const [genre, setGenre] = useState<SingleValue<ISelectOption> | MultiValue<ISelectOption>>(genreOptions[0]);
	const [country, setCountry] = useState<SingleValue<ISelectOption> | MultiValue<ISelectOption>>(countryOptions[0]);
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
		<div className={styles.wrapper}>
			<Input name="person" value={person} onChange={(e) => onChange(e, setPerson)} placeholder="Поиск по актеру, режисеру" />
			<Input name="title" value={title} onChange={(e) => onChange(e, setTitle)} placeholder="Поиск по точному названию фильма" />

			<RangeSlider min={ratingMin} max={ratingMax} values={kp} setValues={setKp} />
			<RangeSlider min={ratingMin} max={ratingMax} values={imdb} setValues={setImdb} />
			<RangeSlider min={yearMin} max={yearMax} values={year} setValues={setYear} />

			<Select
				options={sortOptions}
				value={sort}
				onChange={sortChangeHandler}
				styles={{
					control: (baseStyles, state) => {
						console.log("state: ", state);
						console.log("baseStyles: ", baseStyles);
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
			<Select
				options={genreOptions}
				value={genre}
				onChange={genreChangeHandler}
			/>
			<Select
				options={countryOptions}
				value={country}
				onChange={countryChangeHandler}
			/>

			<Button onClick={onClick} disabled={isFetching}>Поиск</Button>
		</div>
	);
};
