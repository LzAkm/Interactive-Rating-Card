// Récupération des données 
const buttons = document.querySelectorAll('#btn');
const submitBtn = document.getElementById('submit');
const finalRating = document.querySelector('.selection');
const numberRated = document.getElementById('number_rated');


// Récupération de la valeur de chaque bouton
buttons.forEach(function(button) {
    // Lier la fonction au clicks des boutons
    button.addEventListener('click', function(e) {
        // Récupération du data-num du bouton 
        let value = e.target.dataset.num;
        console.log(value);
    });
});


// Afficher la thank card et cacher la start card
submitBtn.addEventListener('click', hiddenShow);

function hiddenShow() {
    // Cacher la start card
    const startCard = document.getElementById('rating_start_card');
    if(startCard.style.display ='flex'){
        startCard.style.display = 'none';
    }

    // Afficher la thank card
    const thankCard = document.getElementById('rating_thank_card');
    if(thankCard.style.display ='none'){
        thankCard.style.display = 'flex';
    }
}


// Afficher le résultat dans le DOM
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        numberRated.innerHTML = button.innerHTML;
    });
});