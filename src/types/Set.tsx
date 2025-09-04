import type { Card } from "./Card";
import type { Serie } from "./Serie";

export interface Set {
	id: string;
	name: string;
	logo: string;
	symbol: string;
	cardCount: {
		total: number;
		official: number;
	};
}

export interface SetDetail {
	id: string;
	name: string;
	logo: string;
	symbol: string;
	legal: {
		expanded: boolean;
		standard: boolean;
	};
	tcgOnline: string;
	releaseDate: string;
	abbreviation: {
		official: string;
	};
	serie: Serie;
	cardCount: {
		firstEd: number;
		holo: number;
		normal: number;
		official: number;
		reverse: number;
		total: number;
	};
	cards: Card[];
}
