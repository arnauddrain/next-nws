import { Compteur } from "../../components/compteur";

export default async function Games() {
    const data = await fetch('https://api.sampleapis.com/switch/games');
    const games: { id: string, name: string }[] = await data.json();

    return (<div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl">Jeux</h1>
        <Compteur />
        <ul>
            {games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </ul>
    </div>
    );
}