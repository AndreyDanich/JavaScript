const goods = [
    { title: 'jacket', price: 150, img: '0.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
    { title: 'pants', price: 100, img: '1.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
    { title: 'shorts', price: 50, img: '2.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
    { title: 'shoes', price: 60, img: '3.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
    { title: 't-shirt', price: 40, img: '4.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
    { title: 't-shirt', price: 50, img: '5.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
    { title: 'shirt', price: 60, img: '6.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
    { title: 'jacket', price: 170, img: '7.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
    { title: 'shirt', price: 40, img: '8.jpg', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.' },
];


const $goodsList = document.querySelector('.block__products');



const renderGoodsItem = ({ title, price, img, description }) => {
    return `
    <a href="product.html" class="new">
        <div class="block__elements">
            class="background__image__block">
                <button class="back-on-block">
                <img src="../img/8799622.svg" alt="cart">
                <p>Add to Cart</p>
                </button>
            </div>
            <img class="image__block" src="${img}" alt="${title}">
            <h3>${title}</h3>
            <p>${description}</p>
            <p>${price}</p>
        
        </div>
    </a>`
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    );

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();