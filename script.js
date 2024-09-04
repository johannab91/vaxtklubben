document.getElementById('plant-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const plantName = document.getElementById('plant-name').value;
    const plantType = document.getElementById('plant-type').value;
    const plantReview = document.getElementById('plant-review').value;

    addReview(plantName, plantType, plantReview);

    document.getElementById('plant-form').reset();
});

function addReview(name, type, review) {
    const reviewList = document.getElementById('reviews');

    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `<strong>${name} (${type})</strong><p>${review}</p>`;

    reviewList.appendChild(reviewItem);
}
