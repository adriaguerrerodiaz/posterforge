document.addEventListener('DOMContentLoaded', function() {
    
    // 1. GESTIÓ DELS SELECTORS (Obrir/Tancar)
    const selectors = document.querySelectorAll('.custom-select-container');
    
    selectors.forEach(selector => {
        const trigger = selector.querySelector('.select-trigger');
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            // Tanquem els altres abans d'obrir aquest
            selectors.forEach(s => { if(s !== selector) s.classList.remove('open'); });
            selector.classList.toggle('open');
        });
    });

    window.onclick = function(event) {
        if (!event.target.closest('.custom-select-container')) {
            selectors.forEach(el => el.classList.remove('open'));
        }
    };

    // 2. NAVEGACIÓ DEL LOGO
    const logo = document.getElementById('logoHome');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.onclick = () => window.location.href = 'home.html';
    }

    // 3. LÒGICA DE GENERACIÓ "FORGE"
    const forgeBtn = document.getElementById('forgeBtn');
    const container = document.getElementById('poster-result-container');
    const counterDisplay = document.getElementById('counter');

    // CONFIGURACIÓ
    const llistaDibuixos = ['IMG_4154.JPG', 'IMG_4301.JPG']; 
    const llistaGrafics = ['W.svg', 'W&P.svg'];
    const modesBlending = ['multiply', 'overlay', 'screen', 'difference', 'color-burn'];

    if (forgeBtn) {
        forgeBtn.addEventListener('click', function() {
            // Comptador
            let parts = counterDisplay.innerText.split('/');
            let currentAttempts = parseInt(parts[0]);

            if (currentAttempts <= 0) {
                alert("Has esgotat els teus intents!");
                return;
            }

            // Selecció aleatòria
            const randomDibuix = llistaDibuixos[Math.floor(Math.random() * llistaDibuixos.length)];
            const randomGrafic = llistaGrafics[Math.floor(Math.random() * llistaGrafics.length)];
            const randomBlend = modesBlending[Math.floor(Math.random() * modesBlending.length)];
            const randomColor = llistaColors[Math.floor(Math.random() * llistaColors.length)];

            // Generació de l'HTML del pòster
            // Utilitzem mask-image per aplicar el color al gràfic SVG
            container.innerHTML = `
                <div class="poster-frame">
                    <img src="dibuixos/${randomDibuix}" class="layer base-layer" alt="Base">
                    <div class="layer top-layer" 
                         style="background-color: ${randomColor}; 
                                mix-blend-mode: ${randomBlend}; 
                                -webkit-mask-image: url('gràfics/${randomGrafic}'); 
                                mask-image: url('gràfics/${randomGrafic}');">
                    </div>
                </div>
            `;

            // Actualitzar comptador
            counterDisplay.innerText = (currentAttempts - 1) + "/5";
        });
    }
});
