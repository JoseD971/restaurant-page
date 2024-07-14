import './style.css';
import './css/menu.css';
import home from './js/home';
import menu from './js/bill'

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('bill');

document.addEventListener('DOMContentLoaded', home);
homeButton.addEventListener('click', home);
menuButton.addEventListener('click', menu);