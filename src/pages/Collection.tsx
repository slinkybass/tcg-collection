import { useUserStore } from "@/store/useUserStore";

export default function Collection() {
	const collection = useUserStore((state) => state.collection);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Colección</h1>
			{collection.length === 0 ? (
				<p>No tienes cartas todavía.</p>
			) : (
				<ul className="grid grid-cols-3 gap-4">
					{collection.map((card) => (
						<li key={card.id} className="p-2 border rounded">
							<p>{card.name}</p>
							<p>Set: {card.set}</p>
							<p>Cantidad: {card.quantity}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
