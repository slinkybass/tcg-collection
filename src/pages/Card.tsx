import { useParams } from "react-router-dom";
import { useCard } from "@/api/useCard";
import { Card as CardShad, CardContent } from "@/components/ui/card";

export default function Card() {
	const { cardId } = useParams<{ cardId: string }>();
	const { card, loading, error } = useCard(cardId || "");

	if (loading) return <p>Cargando carta...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!card) return <p>Carta no encontrada</p>;

	return (
		<div className="p-4">
			<CardShad className="flex flex-row items-start p-4 gap-4 border-0 shadow-none">
				<img src={card.imageHigh ? `${card.imageHigh}` : "/favicon.svg"} alt={card.name} className="h-100 object-contain rounded-md shadow-sm" />
				<CardContent className="flex flex-col justify-start gap-2">
					<h2 className="text-xl font-bold">{card.name} <span className="text-sm text-muted-foreground">#{card.setPos}</span></h2>
					<p className="text-sm text-muted-foreground">
						<strong>ID:</strong> {card.id}
					</p>
					{card.category ? (
						<p className="text-sm text-muted-foreground">
							<strong>Categoría:</strong> {card.category}
						</p>
					) : null}
					{card.rarity ? (
						<p className="text-sm text-muted-foreground">
							<strong>Rareza:</strong> {card.rarity}
						</p>
					) : null}
					{card.illustrator ? (
						<p className="text-sm text-muted-foreground">
							<strong>Ilustrador:</strong> {card.illustrator}
						</p>
					) : null}
				</CardContent>
			</CardShad>
		</div>
	);
}
