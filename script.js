const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Open Lightbox
document.querySelectorAll('.img-card img').forEach(image => {
    image.onclick = () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
    };
});

// Close Lightbox
closeBtn.onclick = () => {
    lightbox.style.display = 'none';
};

// Close on clicking outside the image
lightbox.onclick = (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
};

// Filtering behavior for category buttons
const filterButtons = document.querySelectorAll('.green-btn');
const imgCards = document.querySelectorAll('.img-card');
const gallery = document.querySelector('.gallery');
const homeScreen = document.getElementById('home-screen');
const aboutScreen = document.getElementById('about-screen');
const contactScreen = document.getElementById('contact-screen');

function applyFilter(filter) {
    imgCards.forEach(card => {
        const cat = card.dataset.category;
        if (!filter || filter === 'all' || cat === filter) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // hide the home screen on first interaction
        if (homeScreen && !homeScreen.classList.contains('hidden')) {
            homeScreen.classList.add('hidden');
            if (gallery) gallery.classList.remove('hidden');
        }

        if (aboutScreen && !aboutScreen.classList.contains('hidden')) {
            aboutScreen.classList.add('hidden');
            if (gallery) gallery.classList.remove('hidden');
        }
        if (contactScreen && !contactScreen.classList.contains('hidden')) {
            contactScreen.classList.add('hidden');
            if (gallery) gallery.classList.remove('hidden');
        }

        // active class toggle
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter(btn.dataset.filter);
    });
});

// Logo button click returns the user to the home screen
const logoBtn = document.querySelector('.Logo-btn');
if (logoBtn) {
    logoBtn.addEventListener('click', () => {
        if (homeScreen) homeScreen.classList.remove('hidden');
        if (gallery) gallery.classList.add('hidden');
        if (aboutScreen) aboutScreen.classList.add('hidden');
        if (contactScreen) contactScreen.classList.add('hidden');
        // clear any active state on filter buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // close lightbox if open
        if (lightbox) lightbox.style.display = 'none';
    });
}

const aboutBtn = document.querySelector('.About-btn');
if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
        if (aboutScreen) aboutScreen.classList.remove('hidden');
        if (homeScreen) homeScreen.classList.add('hidden');
        if (gallery) gallery.classList.add('hidden');
        if (contactScreen) contactScreen.classList.add('hidden');
        // clear any active state on filter buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // close lightbox if open
        if (lightbox) lightbox.style.display = 'none';
    });
}

const contactBtn = document.querySelector('.Contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        if (contactScreen) contactScreen.classList.remove('hidden');
        if (homeScreen) homeScreen.classList.add('hidden');
        if (gallery) gallery.classList.add('hidden');
        if (aboutScreen) aboutScreen.classList.add('hidden');
        // clear any active state on filter buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // close lightbox if open
        if (lightbox) lightbox.style.display = 'none';
    });
}