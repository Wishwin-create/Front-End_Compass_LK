// Get ?id=name from URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Get destination data
const data = DESTINATIONS[id];

// Insert data into page
document.getElementById("dest-title").textContent = data.title;
document.getElementById("about-text").textContent = data.about;

//Top Image
const topImg = document.getElementById("top-image");
topImg.src = data.topImage;
topImg.alt = data.title;

// Gallery
const galleryDiv = document.getElementById("gallery-container");
data.gallery.forEach(img => {
    galleryDiv.innerHTML += `<img src="${img}" class="gallery-img">`;
});

// Reviews
const reviewDiv = document.getElementById("review-container");
data.reviews.forEach(r => {
    reviewDiv.innerHTML += `<p class="review">⭐ ${r}</p>`;
});
