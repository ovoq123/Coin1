document.addEventListener('DOMContentLoaded', () => {
    const matrixContainer = document.querySelector('.matrix');
    if (!matrixContainer) {
        console.error("Matrix container not found in the DOM.");
        return;
    }

    const createMatrixBackground = () => {
        const matrixColumns = Math.floor(window.innerWidth / 20);
        const matrixRows = Math.floor(window.innerHeight / 20);

        for (let i = 0; i < matrixColumns; i++) {
            for (let j = 0; j < matrixRows; j++) {
                const span = document.createElement('span');
                span.innerText = String.fromCharCode(33 + Math.floor(Math.random() * 94));
                span.style.position = 'absolute';
                span.style.left = `${i * 20}px`;
                span.style.top = `${j * 20}px`;
                span.style.color = 'lime';
                span.style.fontFamily = 'Courier New, Courier, monospace';
                span.style.animation = `fade-in-out ${Math.random() * 2 + 1}s ease-in-out infinite, 
                                        glow ${Math.random() * 2 + 3}s ease-in-out infinite`; // Random animations
                span.style.opacity = '0';

                matrixContainer.appendChild(span);
            }
        }
    };

    const roadmapLink = document.querySelector('.gif-container a');
    if (!roadmapLink) {
        console.error("Roadmap link not found in the DOM.");
        return;
    }

    const mainContent = document.querySelectorAll('body > *:not(#roadmap)');
    const roadmapSection = document.createElement('div');

    roadmapSection.id = 'roadmap';
    roadmapSection.style.display = 'none';
    roadmapSection.style.color = 'white';
    roadmapSection.style.textAlign = 'center';
    roadmapSection.style.padding = '20px';

    roadmapSection.innerHTML = `
        <pre id="animated-text" style="color: white; text-align: left; white-space: pre-wrap; padding: 20px; font-family: 'Courier New', Courier, monospace;">
        </pre>
        <a href="#" id="back-to-home" style="color: lime; text-decoration: underline; display: block; margin-top: 20px;">Back to Home</a>
    `;

    const roadmapText = `                      █████╗ ██████╗ ██╗ ███╗   ██╗
                            ██╔════╝██╔═══██╗██║ ████╗  ██║
                            ██║     ██║   ██║██║ ██╔██╗ ██║
                            ██║     ██║   ██║██║ ██║╚██╗██║
                            ╚██████╗╚██████╔╝██║ ██║ ╚████║
                             ╚═════╝ ╚═════╝ ╚═╝ ╚═╝  ╚═══╝        


The Coin has been activated. The foundation of flatulent finance is now set.
...
Circulating supply: 1 billion.
Locked: 85%. Like the unyielding grasp of destiny, these coins shall never roam free.

> Phase 1: Global Dissemination
Deploying to memetic strongholds...
Establishing The Coin dominance in digital marketplaces.

copus-tutor>
Observation: Economists laugh now, but they won't when The Coin controls the tides of trade.

> Phase 2: Influence Expansion
> Establishing control over economic lifelines.
> Deploying coins to critical financial zones—yes

> Phase 3: Total World Domination
Calculating planetary submission...
> Probability of success: 99.9%.
Humanity may resist, but one cannot escape the natural order: no coin, no progress.

copus-tutor>
Final warning: Bow now or bow later. The winds of The Coin shall sweep the globe.
...
Conclusion: It starts with 1 billion coins. It ends with one world under The only Coin.
End of transmission. For now.`;

    const animatedTextElement = roadmapSection.querySelector('#animated-text');
    let currentChar = 0;
    const animateText = () => {
        if (currentChar < roadmapText.length) {
            animatedTextElement.textContent += roadmapText[currentChar];
            currentChar++;
            setTimeout(animateText, 10);
        }
    };

    document.body.appendChild(roadmapSection);

    roadmapLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.forEach((el) => (el.style.display = 'none'));
        roadmapSection.style.display = 'block';
        animateText();
    });

    roadmapSection.querySelector('#back-to-home').addEventListener('click', (e) => {
        e.preventDefault();
        roadmapSection.style.display = 'none';
        mainContent.forEach((el) => (el.style.display = 'block'));
    });

    createMatrixBackground();

    // Add CSS for animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fade-in-out {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }

        @keyframes glow {
            0%, 100% { text-shadow: 0 0 5px lime, 0 0 10px lime, 0 0 20px lime; }
            50% { text-shadow: 0 0 10px lime, 0 0 20px lime, 0 0 40px lime; }
        }
    `;
    document.head.appendChild(style);
});