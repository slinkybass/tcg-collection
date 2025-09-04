import type { Set } from "./Set";

export interface Card {
	id: string;
	image: string;
	localId: string;
	name: string;
}

export interface CardDetail {
	category: string;
	id: string;
	illustrator: string;
	image: string;
	localId: string;
	name: string;
	rarity: string;
	set: Set;
	variants: {
		firstEdition: boolean;
		holo: boolean;
		normal: boolean;
		reverse: boolean;
		wPromo: boolean;
	};
	variants_detailed: VariantDetailed[];
	dexId: number[];
	hp: number;
	types: string[];
	evolveFrom?: string;
	stage?: string;
	abilities?: Ability[];
	attacks?: Attack[];
	weaknesses?: Weakness[];
	retreat: number;
	legal: {
		standard: boolean;
		expanded: boolean;
	};
	updated: string;
	pricing: {
		cardmarket: Pricing;
		tcgplayer: Pricing;
	};
}

export interface VariantDetailed {
	type: string;
	size: string;
}

export interface Ability {
	type: string;
	name: string;
	effect: string;
}

export interface Attack {
	cost: string[];
	name: string;
	effect: string;
	damage?: number;
}

export interface Weakness {
	type: string;
	value: string;
}

export interface Pricing {
	updated: string;
	unit: string;
	avg?: number;
	low?: number;
	trend?: number;
	avg1?: number;
	avg7?: number;
	avg30?: number;
	"avg-holo"?: number;
	"low-holo"?: number;
	"trend-holo"?: number;
	"avg1-holo"?: number;
	"avg7-holo"?: number;
	"avg30-holo"?: number;
	holofoil?: {
		lowPrice: number;
		midPrice: number;
		highPrice: number;
		marketPrice: number;
		directLowPrice?: number;
	};
	"1st-edition-holofoil"?: {
		lowPrice: number;
		midPrice: number;
		highPrice: number;
		marketPrice?: number;
		directLowPrice?: number;
	};
}
