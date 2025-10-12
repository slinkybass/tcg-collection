import type { SetBasic } from "./Set";

export interface Serie {
	id: string;
	name: string;
	logo: string;
	releaseDate: string;
	sets: SetBasic[];
}

export interface SerieBasic {
	id: string;
	name: string;
	logo: string;
}
