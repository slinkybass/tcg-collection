import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSet } from "@/api/useSet";

export default function Set() {
	const { setId } = useParams<{ setId: string }>();
	const { set, loading, error } = useSet("en", setId || "");

	if (loading) return <p>Cargando set...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!set) return <p>Set no encontrado</p>;

	return (
		<div className="p-4">
			<div className="text-center mb-4 pb-4 border-b">
				<img src={`${set.logo}.png`} alt={set.name} className="h-32 object-contain mx-auto" />
				<h1 className="text-2xl font-bold uppercase mt-2">{set.name}</h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-8 p-6">
				{set.cards.map((card) => (
					<Link key={card.id} to={`/card/${card.id}`} className="group">
						<img src={`${card.image}/low.png`} alt={card.name} className="h-48 object-contain rounded mx-auto opacity-85 group-hover:opacity-100 group-hover:scale-110 ease-in duration-200" />
					</Link>
				))}
			</div>
		</div>
	);
}
