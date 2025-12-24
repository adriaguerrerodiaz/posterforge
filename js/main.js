document.addEventListener('DOMContentLoaded', function() {
    
    // 1. GESTIÓ DELS SELECTORS (Obrir/Tancar)
    const selectors = document.querySelectorAll('.custom-select-container');
    
    selectors.forEach(selector => {
        const trigger = selector.querySelector('.select-trigger');
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
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

    const llistaDibuixos = ['IMG_4154.JPG', 'IMG_4301.JPG']; 
    const llistaGrafics = ['W.svg', 'W&P.svg'];
    // Hem eliminat llistaColors i modesBlending per simplificar si no es veia bé

    if (forgeBtn) {
        forgeBtn.addEventListener('click', function() {
            let parts = counterDisplay.innerText.split('/');
            let currentAttempts = parseInt(parts[0]);

            if (currentAttempts <= 0) {
                alert("Has esgotat els teus intents!");
                return;
            }

            const randomDibuix = llistaDibuixos[Math.floor(Math.random() * llistaDibuixos.length)];
            const randomGrafic = llistaGrafics[Math.floor(Math.random() * llistaGrafics.length)];

            const graphicUrl = encodeURI(`gràfics/${randomGrafic}`);
            const dibuixUrl = `dibuixos/${randomDibuix}`;

            // ESTRUCTURA NETEJA: Imatge a sota, SVG a sobre al 100% de mida
            container.innerHTML = `
                <div class="poster-frame" style="position:relative; width:100%; height:100%; overflow:hidden; background:#fff;">
                    
                    <img src="${dibuixUrl}" alt="Base" 
                         style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:1;">
                    
                    <img src="${graphicUrl}" alt="Graphic" 
                         style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:contain; z-index:2; pointer-events:none;">
                </div>
            `;

            counterDisplay.innerText = (currentAttempts - 1) + "/5";
        });
    }
});

document.querySelectorAll('.logo-font').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => window.location.href = 'home.html');
});