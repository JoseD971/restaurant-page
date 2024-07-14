import './style.css';
import './css/menu.css';
import home from './js/home';
import menu from './js/bill';
import about from './js/about';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('bill');
const aboutButton = document.getElementById('about');

document.addEventListener('DOMContentLoaded', home);
homeButton.addEventListener('click', home);
menuButton.addEventListener('click', menu);
aboutButton.addEventListener('click', about);