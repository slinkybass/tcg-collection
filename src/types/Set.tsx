import type { CardBasic } from "./Card";
import type { SerieBasic } from "./Serie";

export interface Set {
	id: string;
	name: string;
	logo: string;
	releaseDate: string;
	serie: SerieBasic;
	cards: CardBasic[];
}

export interface SetBasic {
	id: string;
	name: string;
	logo: string;
	serie: SerieBasic;
}
