import type { SetBasic } from "./Set";

export interface Card {
	id: string;
	name: string;
	setPos: string;
	imageLow: string;
	imageHigh: string;
	category: string;
	illustrator: string;
	rarity: string;
	variantNormal: boolean;
	variantReverse: boolean;
	variantHolo: boolean;
	variantFirstEdition: boolean;
	variantPromo: boolean;
	updated: string;
	set: SetBasic;
}

export interface CardBasic {
	id: string;
	name: string;
	setPos: string;
	imageLow: string;
	category: string;
	rarity: string;
	variantNormal: boolean;
	variantReverse: boolean;
	variantHolo: boolean;
	variantFirstEdition: boolean;
	variantPromo: boolean;
	set: SetBasic;
}
