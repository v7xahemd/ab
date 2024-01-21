document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "projects/1.jpeg",
        "projects/2.jpeg",
        "projects/3.jpeg",
        "projects/4.jpg",
        "projects/5.jpg",
        "projects/6.jpg",
        "projects/7.jpg",
        "projects/8.jpg",
        "projects/9.jpg",
        "projects/10.jpg",
        "projects/11.jpg",
        "projects/12.jpg",
        "projects/13.jpg",
        "projects/14.jpg",
        "projects/15.jpg",
        "projects/16.jpg",
        "projects/17.jpg",
        "projects/18.jpg",
        "projects/19.jpg",
        "projects/20.jpg",
        "projects/21.jpg",
        "projects/22.jpg",
        "projects/23.jpg",
        "projects/24.jpg",
        "projects/25.jpg",
        "projects/26.jpg",
        "projects/27.jpg",
        "projects/28.jpg",
        "projects/29.jpg",
        "projects/30.jpeg",
        // Ajoutez autant de chemins d'image que nécessaire
    ];

    const imgElement = document.querySelector('.fade-image');
    let currentIndex = 0;

    function showImage(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        imgElement.style.opacity = 0;
        
        setTimeout(() => {
            imgElement.src = images[currentIndex];
            imgElement.style.opacity = 1;
        }, 1000);
    }

    // Afficher la première image
    imgElement.src = images[currentIndex];
    imgElement.style.opacity = 1;

    // Ajouter des événements de clic pour les boutons
    document.querySelector('.prev-btn').addEventListener('click', () => showImage(-1));
    document.querySelector('.next-btn').addEventListener('click', () => showImage(1));
});
