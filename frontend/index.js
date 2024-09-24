import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const history = await backend.getDoomHistory();
        document.getElementById('doomHistory').textContent = history;

        const visitorCount = await backend.incrementVisitorCount();
        document.getElementById('visitorCount').textContent = `Visitors: ${visitorCount}`;

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
