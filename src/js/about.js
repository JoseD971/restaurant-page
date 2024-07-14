import '../css/about.css';
import MyImage from '../images/pesce-huang-Qm7EiTf4AoM-unsplash.jpg';

function aboutPage() {
    const content = document.getElementById('content');
    const Img = new Image();
    const firstPara = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim metus ac eros lobortis consectetur. Nulla eu dolor magna. Nulla sem metus, porttitor id justo sit amet, vulputate pretium sapien. Curabitur sed molestie lorem. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque nec lorem id diam porta blandit eu in eros. Donec imperdiet suscipit placerat. Vestibulum est erat, posuere vel lacus sit amet, fringilla placerat turpis. Quisque vulputate id velit quis dignissim. Duis a risus sed erat consequat interdum eget vel turpis.`;
    const secondPara = `Etiam ipsum ligula, hendrerit sed sem eu, finibus mattis odio. Curabitur fermentum nulla enim, ut pretium erat tristique vel. In at lacus massa. Praesent fringilla id nunc ut auctor. Maecenas posuere mollis erat id elementum. Suspendisse potenti. Vestibulum non euismod lorem. Maecenas gravida orci in mi mollis, a varius eros sodales. Etiam ac convallis lorem.`;
    const thirdPara = `Vivamus nunc libero, dapibus nec turpis non, volutpat finibus nisi. Fusce finibus pretium mattis. Nam fermentum enim est, sed tincidunt ex fermentum et. Vivamus eu magna id nunc varius scelerisque eu condimentum metus. Maecenas ultricies magna risus, et scelerisque justo sagittis in. Vestibulum finibus nec lectus vel lacinia. Nunc bibendum dapibus dictum. Aliquam risus elit, euismod eu elementum ac, dapibus eget tortor.`;

    Img.src = MyImage;
    content.innerHTML = null;
    content.innerHTML = 
    `<div class="container">
        <div class="about-panel">
            <div class="about-info">
                <h1>About Us</h1>
                <p>${firstPara}</p>
                <p>${secondPara}</p>
                <p>${thirdPara}</p>
            </div>
            <img src="${MyImage}" alt="About us image">
        </div>
    </div>`;
}

export default aboutPage;