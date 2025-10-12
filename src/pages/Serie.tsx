import { Link, useParams } from "react-router-dom";
import { useSerie } from "@/api/useSerie";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export default function Sets() {
	const { serieId } = useParams<{ serieId: string }>();
	const { serie, loading, error } = useSerie(serieId || "");

	if (loading) return <p>Cargando serie...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!serie) return <p>Serie no encontrada</p>;

	return (
		<div className="p-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
			{serie.sets.map((set) => (
				<Link key={set.id} to={`/sets/${set.id}`} title={set.name} className="group">
					<Card>
						<CardContent>
							<img src={set.logo ? `${set.logo}` : "/favicon.svg"} alt={set.name} className="h-20 object-contain mx-auto px-2 opacity-85 group-hover:opacity-100 group-hover:scale-110 ease-in duration-200" />
						</CardContent>
						<CardFooter className="mx-auto max-w-full">
							<CardTitle className="uppercase font-bold truncate py-1">{set.name}</CardTitle>
						</CardFooter>
					</Card>
				</Link>
			))}
		</div>
	);
}
