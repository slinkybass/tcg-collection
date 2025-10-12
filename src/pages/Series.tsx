import { Link } from "react-router-dom";
import { useSeries } from "@/api/useSeries";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export default function Series() {
	const { series, loading, error } = useSeries();

	if (loading) return <p>Cargando series...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div className="p-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
			{series.map((serie) => (
				<Link key={serie.id} to={`/series/${serie.id}`} title={serie.name} className="group">
					<Card>
						<CardContent>
							<img src={serie.logo ? `${serie.logo}` : "/favicon.svg"} alt={serie.name} className="h-20 object-contain mx-auto px-2 opacity-85 group-hover:opacity-100 group-hover:scale-110 ease-in duration-200" />
						</CardContent>
						<CardFooter className="mx-auto max-w-full">
							<CardTitle className="uppercase font-bold truncate py-1">{serie.name}</CardTitle>
						</CardFooter>
					</Card>
				</Link>
			))}
		</div>
	);
}
