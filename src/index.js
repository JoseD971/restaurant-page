import './style.css';
import './css/menu.css';
import home from './js/home';

const homeButton = document.getElementById('home');

document.addEventListener('DOMContentLoaded', home);
homeButton.addEventListener('click', home);