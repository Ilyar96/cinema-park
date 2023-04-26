export interface Person {
	isParse: boolean;
	id: number;
	name: string;
	enName: string;
	photo: string;
	profession: Profession[];
	birthPlace: BirthPlace[];
	deathPlace: null | Date;
	facts: Fact[];
	movies: Movie[];
	age: number;
	birthday: Date;
	countAwards: null;
	death: null;
	growth: number;
	sex: string;
	spouses: Spouse[];
	updatedAt: Date;
}

export interface Profession {
	value: string;
}

export interface BirthPlace extends Profession {}

export interface Fact extends Profession {}

export interface Movie {
	id: number;
	name: null | string;
	rating: number | null;
	general: boolean;
	description: string;
}

export interface Spouse {
	id: number;
	name: null;
	divorced: boolean;
	children: number;
	relation: string;
}
