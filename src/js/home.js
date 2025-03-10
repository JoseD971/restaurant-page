import '../css/home.css';
import MyImage from '../images/odiseo-castrejon-1SPu0KT-Ejg-unsplash.jpg'

function homePage() {
    const content = document.getElementById('content');
    content.innerHTML = null;
    content.innerHTML = 
    `<div class="container">
        <div class="main-panel">
            <img src="` + MyImage + `" alt="Food">
            <div class="home-info">
                <h3>Welcome to Bachira</h3>
                <p>All the food you can imagine from all over the world in one place</p>
                <button>Book a table</button>
            </div>
        </div>
    </div>`;
};

export default homePage;