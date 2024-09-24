import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const history = await backend.getDoomHistory();
        document.getElementById('doomHistory').textContent = history;

        const visitorCount = await backend.incrementVisitorCount();
        document.getElementById('visitorCount').textContent = `Visitors: ${visitorCount}`;

        const games = await backend.getDoomGames();
        const gamesList = document.getElementById('doomGames');
        games.forEach(game => {
            const li = document.createElement('li');
            li.textContent = game;
            gamesList.appendChild(li);
        });

        const characters = await backend.getDoomCharacters();
        const charactersContainer = document.getElementById('doomCharacters');
        characters.forEach(([name, description]) => {
            const characterDiv = document.createElement('div');
            characterDiv.className = 'character';
            characterDiv.innerHTML = `
                <h3>${name}</h3>
                <p>${description}</p>
                <img src="images/${name.toLowerCase().replace(/\s+/g, '_')}.jpg" alt="${name}" />
            `;
            charactersContainer.appendChild(characterDiv);
        });

        loadDoom3WASM();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function loadDoom3WASM() {
    const script = document.createElement('script');
    script.src = 'https://js-dos.com/6.22/current/js-dos.js';
    script.onload = () => {
        Dos(document.getElementById('gameContainer'), {
            wasm_url: 'https://js-dos.com/6.22/current/wdosbox.wasm',
            cycles: 'auto',
            autolock: false,
        }).ready((fs, main) => {
            fs.createFile('DOOM3.ZIP', 'https://example.com/path/to/doom3.zip');
            main(['-c', 'mount c DOOM3.ZIP', '-c', 'c:', '-c', 'DOOM3.EXE']);
        });
    };
    document.body.appendChild(script);
}
