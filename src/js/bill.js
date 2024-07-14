import '../css/bill.css';
import CoffeeToast from '../images/mug-8235059_640.jpg';
import BasilBurguer from '../images/hamburger-494706_640.jpg';
import SpringRolls from '../images/spring-roll-6760871_640.jpg';
import Pancakes from '../images/pancakes-2291908_640.jpg';
import RiceWithVegetables from '../images/rice-6319366_640.jpg';
import Salad from '../images/salad-8274421_640.jpg';


function menuPage() {
    var MyImage = new Image();
    const menuItems = [
        {
            name: 'Coffee with toast',
            description: 'Hot coffee with three toast and chopped banana.',
            price: '5.00',
            image: CoffeeToast,
        },
        {
            name: 'Gourmet Basil Burger',
            description: 'Burger with tomato, onion rings, basil, cheese and artisan bread.',
            price: '12.00',
            image: BasilBurguer,
        },
        {
            name: 'Spring rolls',
            description: 'Rolls wrapped in rice paper with a filling of shrimp, vegetables and rice noodles. Dipping sauce and tea.',
            price: '25.00',
            image: SpringRolls,
        },
        {
            name: 'Pancakes',
            description: 'Stacked pancakes, garnished with fresh raspberries and drizzled with maple syrup.',
            price: '18.00',
            image: Pancakes,
        },
        {
            name: 'Rice with sautéed vegetables',
            description: 'White rice with carrots, broccoli, cauliflower and green beans.',
            price: '30.00',
            image: RiceWithVegetables,
        },
        {
            name: 'Stir-fried salad',
            description: 'Broccoli, carrot, pepper and bean salad.',
            price: '15.00',
            image: Salad,
        }
    ];
    const content = document.getElementById('content');
    content.innerHTML = null;

    content.innerHTML = 
    `<div class="container">
        <h1 class="page-title">Our dishes</h1>
        <div class="menu-list">
        </div>
    </div>`;

    const listContent = () => {
        var itemList = '';
        menuItems.forEach(item => {
            MyImage.src = item.image;
            var card =
            `<div class="card">
                <img src="${MyImage.src}" alt="${item.name} image">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <span>$${item.price}</span>
                    <p>${item.description}</p>
                    <button>Order now</button>
                </div>
            </div>`;
            itemList += card;
        });
        return itemList;
    }

    const menuList = document.querySelector('.menu-list');
    menuList.innerHTML = listContent();
}

export default menuPage;