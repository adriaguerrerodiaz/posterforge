<script>
document.querySelector('.forge-button').addEventListener('click', function() {
    const container = document.getElementById('poster-result-container');
    
    // Simulem una llista d'imatges (aquí podries posar les teves URLs)
    const images = [
        'https://picsum.photos/360/449?random=1',
        'https://picsum.photos/360/449?random=2',
        'https://picsum.photos/360/449?random=3'
    ];
    
    // Escollir una imatge a l'atzar
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    // Crear o actualitzar la imatge
    container.innerHTML = `<img src="${randomImage}" class="poster-img" alt="Generated Poster">`;
    
    // Opcional: Actualitzar el comptador (5/5 -> 4/5)
    const counter = document.querySelector('.green-counter');
    let currentVal = parseInt(counter.innerText.split('/')[0]);
    if (currentVal > 0) {
        counter.innerText = (currentVal - 1) + "/5";
    }
});
</script>
