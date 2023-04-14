import React, { useState } from 'react';
import { Input, RangeSlider } from "../ui";

const yearMin = 1915;
const yearMax = new Date().getFullYear();
const kpMin = 0;
const kpMax = 10;

export const Filters = () => {
	const [kp, setKp] = useState([kpMin, kpMax]);
	const [year, setYear] = useState([yearMin, yearMax]);

	return (
		<div>
			<Input name="genre" placeholder="Жанр" />
			<Input name="country" placeholder="Страна" />
			<Input name="country" placeholder="Поиск по актеру, режисеру" />
			<Input name="country" placeholder="Поиск по точному названию фильма" />

			<RangeSlider min={kpMin} max={kpMax} values={kp} setValues={setKp} />
			<RangeSlider min={yearMin} max={yearMax} values={year} setValues={setYear} />
		</div>
	);
};
