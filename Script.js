// Button animation
document.querySelectorAll('.btn, .cta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => (btn.style.transform = 'scale(1)'), 150);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    const signInBtn = document.querySelector('.sign-in');
    const signUpBtn = document.querySelector('.get-started');
    const myItinerary = document.getElementById('myItinerary');

    if (userName) {
        // Hide Sign In / Sign Up
        if (signInBtn) signInBtn.style.display = 'none';
        if (signUpBtn) signUpBtn.style.display = 'none';

        // Show My Itinerary
        if (myItinerary) myItinerary.style.display = 'inline-block';

        // Create Sign Out button
        const signOutBtn = document.createElement('button');
        signOutBtn.textContent = 'Sign Out';
        signOutBtn.className = 'btn sign-out';
        signOutBtn.style.backgroundColor = '#ffffffff';
        signOutBtn.style.marginLeft = '10px';
        signOutBtn.onclick = () => {
            localStorage.removeItem('userName');
            localStorage.removeItem('userId');

            if (signInBtn) signInBtn.style.display = 'inline-block';
            if (signUpBtn) signUpBtn.style.display = 'inline-block';
            if (myItinerary) myItinerary.style.display = 'none';

            signOutBtn.remove();
            window.location.href = 'Landing_page.html';
        };

        // Append Sign Out
        signInBtn.parentElement.appendChild(signOutBtn);
    }
});
