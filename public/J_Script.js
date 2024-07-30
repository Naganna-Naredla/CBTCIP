    document.addEventListener('DOMContentLoaded', () => {
            const customerLoggedIn = localStorage.getItem('customerLoggedIn') === 'true';
            const ownerLoggedIn = localStorage.getItem('ownerLoggedIn') === 'true';

            if (!customerLoggedIn && !ownerLoggedIn) {
                window.location.href = 'login.html'; // Redirect to login page
            }
        });

    
        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-link');
        
            navLinks.forEach(link => {
                // Check if the link is not the login button
                if (!link.classList.contains('login-button')) {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        const targetId = link.getAttribute('href').substring(1);
                        const targetSection = document.getElementById(targetId);
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    });
                }
            });
        });
        
document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slideIndex = (n + slides.length) % slides.length;

        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }

    function moveCarousel(n) {
        showSlide(slideIndex + n);
    }

    function currentSlide(n) {
        showSlide(n - 1);
    }

    showSlide(slideIndex);
    setInterval(function() {
        moveCarousel(1);
    }, 2000);

    document.querySelector('.prev').addEventListener('click', function() {
        moveCarousel(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        moveCarousel(1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide(index + 1);
        });
    });



const searchButton = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-bar input');

if (searchButton) {
    searchButton.addEventListener('click', handleSearch);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

function handleSearch() {
    const query = searchInput.value.toLowerCase();
    const sections = document.querySelectorAll('section, .service-card, .subsection-content button');

    let found = false;
    sections.forEach(section => {
        if (sectionMatchesQuery(section, query)) {
            console.log(`Match found: ${section.id || section.querySelector('h3')?.innerText}`);
            section.scrollIntoView({ behavior: 'smooth' });
            found = true;
        } else if (sectionContainsMatchingButton(section, query)) {
            const button = section.querySelector('button');
            console.log(`Button match found: ${button.innerText}`);
            button.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }
    });

    if (!found) {
        alert('No match found');
    }
}

function sectionMatchesQuery(section, query) {
    if (section.id && section.id.toLowerCase().includes(query)) {
        return true;
    } else if (section.querySelector('h3') && section.querySelector('h3').innerText.toLowerCase().includes(query)) {
        return true;
    }
    return false;
}

function sectionContainsMatchingButton(section, query) {
    const button = section.querySelector('button');
    if (button && button.innerText.toLowerCase().includes(query)) {
        return true;
    }
    return false;
}



    // Review form functionality
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const formData = new FormData(reviewForm);
            const name = formData.get('reviewName');
            const rating = formData.get('rating');
            const reviewText = formData.get('reviewText'); // Ensure this key matches the schema
    
            const newReview = {
                name,
                rating: parseInt(rating), // Ensure rating is an integer
                review: reviewText // Ensure this key matches the schema
            };
    
            fetch('/api/reviews/add', { // Ensure this matches the route in the server code
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newReview)
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text); });
                }
                return response.json();
            })
            .then(data => {
                reviewForm.reset();
                alert("Thank you for your message")
                fetchReviews();
            })
            .catch(error => {
                console.error('Error:', error.message || error);
                alert('Failed to submit review. Please try again.');
            });
        });
    } else {
        console.error('Review form not found');
    }
    
    function fetchReviews() {
        fetch('/api/reviews')
        .then(response => response.json())
        .then(reviews => {
            reviewsList.innerHTML = '';
            reviews.forEach(review => {
                const li = document.createElement('li');
                li.classList.add('review-item');
                li.innerHTML = `
                    <h3>${review.name}</h3>
                    <div class="rating">${getStarRating(review.rating)}</div>
                    <p class="review-text">${review.review}</p> <!-- Changed review.comment to review.review -->

                `;
                reviewsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
    }
    
    function getStarRating(rating) {
        const maxRating = 5;
        let stars = '';
        for (let i = 1; i <= maxRating; i++) {
            if (i <= rating) {
                stars += '<span class="fa fa-star checked"></span>';
            } else {
                stars += '<span class="fa fa-star"></span>';
            }
        }
        return stars;
    }
    
    fetchReviews();
    

    // Load subsection content
    function loadSubsection(service) {
        const content = {
            'event-planning': `
                <div class="subsection">
                    <h3>Event Planning</h3>
                    <div class="subsection-items">
                        <div class="subsection-item">
                            <img src="birthday.jpg" alt="Birthday">
                            <h3>Birthday</h3>
                            <p>Enjoy AT Rs. 20599.00</p>
                            <a href="Lookit.html" class="look-it-btn">Look It</a>
                        </div>
                        <div class="subsection-item">
                            <img src="wedding.jpeg" alt="Wedding">
                            <h3>Marriage</h3>
                            <p>Enjoy AT Rs. 155999.00</p>
                            <a href="Lookit.html" class="look-it-btn">Look It</a>
                        </div>
                        <div class="subsection-item">
                            <img src="conference.jpg" alt="Conference">
                            <h3>Conference</h3>
                            <p>Enjoy AT Rs. 14999.00</p>
                            <a href="Lookit.html" class="look-it-btn">Look It</a>
                        </div>
                    </div>
                </div>
            `,
            'catering-services': `
                <div class="subsection">
                    <h3>Catering Services</h3>
                    <div class="subsection-items">
                        <div class="subsection-item">
                            <img src="food1.jpg" alt="Buffet">
                            <h3>Buffet</h3>
                            <p>Enjoy AT Rs. 299.00 per Plate</p>
                            <a href="Lookit.html" class="look-it-btn">Look It</a>
                        </div>
                        <div class="subsection-item">
                            <img src="food2.avif" alt="Plated Service">
                            <h3>Plated Service</h3>
                            <p>Enjoy AT Rs. 499.00 per Plate</p>
                            <a href="Lookit.html" class="look-it-btn">Look It</a>
                        </div>
                        <div class="subsection-item">
                            <img src="food3.jpg" alt="Beverage Service">
                            <h3>Beverage Service</h3>
                            <p>Enjoy AT Rs. 449.00 per One</p>
                            <a href="Lookit.html" class="look-it-btn">Look It</a>
                        </div>
                    </div>
                </div>
            `,
            'venue-selection': `
                <div class="subsection">
                    <h3>Venue Selection</h3>
                    <div class="subsection-items">
                        <div class="subsection-item">
                            <img src="venue1.jpg" alt="Outdoor">
                            <h3>Outdoor</h3>
                            <p>Enjoy AT Rs. 259999.00 </p>
                            <a href="Lookit.html" class="look-it-btn">Look It</a>
                        </div>
                        <div class="subsection-item">
                            <img src="venue2.jpg" alt="Indoor">
                            <h3>Indoor</h3>
                            <p>Enjoy AT Rs. 299999.00</p>
                            <a href="Lookit.html" class="look-it-btn">Look It</a>
                        </div>
                        <div class="subsection-item">
                            <img src="venue3.jpg" alt="Destination">
                            <h3>Destination</h3>
                            <p>Enjoy AT Rs. 499999.00</p>
                            <a href="Lookit.html" class="look-it-btn">Look It</a>
                        </div>
                    </div>
                </div>
            `
        };

        document.getElementById('subsection-content').innerHTML = content[service];
        document.getElementById('subsection-content').style.display = 'block';
    }

    window.loadSubsection = loadSubsection;
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., display a message to the user)
        alert('Thank you for your message!'); 
        alert( 'We will get you soon');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., display an error message to the user)
        alert('There was an error submitting your message. Please try again.');
    });
});

function openModal(src) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.getElementById('planForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = {};
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    try {
        const response = await fetch('/plans', { // Updated endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataObj)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        alert('Form submitted successfully');
        event.target.reset();
    } catch (error) {
        alert('An error occurred while submitting the form');
        console.error('Error:', error);
    }
});
