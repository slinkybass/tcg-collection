import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/Home";
import Sets from "@/pages/Sets";
import Set from "@/pages/Set";
import Card from "@/pages/Card";
import Collection from "@/pages/Collection";
import Profile from "@/pages/Profile";
import { Button } from "@/components/ui/button";

function App() {
	return (
		<BrowserRouter>
			<nav className="flex gap-2 p-4 bg-gray-50 shadow">
				<Button asChild>
					<Link to="/">Inicio</Link>
				</Button>
				<Button asChild>
					<Link to="/sets">Sets</Link>
				</Button>
				<Button asChild>
					<Link to="/collection">Colección</Link>
				</Button>
				<Button asChild>
					<Link to="/profile">Perfil</Link>
				</Button>
			</nav>

			<main className="container mx-auto">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sets" element={<Sets />} />
					<Route path="/sets/:setId" element={<Set />} />
					<Route path="/card/:cardId" element={<Card />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
