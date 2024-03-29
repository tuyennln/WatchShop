$(document).ready(function () {
    $('.list-card').slick({
        slidesToShow: 4,
        slidesToScroll: 1, //move 1 lần ? ảnh (default: 1)
        infinite: true, //lặp lại vô tận -> tới cuối quay lại đầu
        // autoplay: true,
        // autoplaySpeed: 1000, // 2s tự động move

        // Custom nút prev, next
        arrows: true, //xuất hiện nút prev, next
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-left-long' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-right-long' aria-hidden='true'></i></button>",

        draggable: false, // dùng chuột -> move ảnh
    });
})

// Read data.json -> reder
// TOP SẢN PHẨM
import hotProduct from "/data/HotProduct.json" assert { type: "json" };
console.log(hotProduct);

var card = document.querySelector('.list-card');

// load data
card.innerHTML = '';
hotProduct.forEach(item => {
    let newCard = document.createElement('div');
    newCard.classList.add('card-detail');
    newCard.innerHTML = `<a href="#" class="card-img">
                        <img src="${item.img1}" alt="No Image">
                        <img src="${item.img2}" alt="No Image">
                        </a>
                        <div class="sale">
                            <span>${item.sale}</span>
                        </div>
                        <div class="card-btn">
                            <button class="card-shopping icon">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </button>
                            <button class="card-like icon">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                            <button class="card-view icon">
                                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                            </button>
                        </div>
                        <div class="card-info">
                            <div class="category">
                                <a href=""><small>${item.category}</small></a>
                            </div>
                            <h3 class="name">${item.name}</h3>
                            <div class="rating">
                                <span>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                </span>
                            </div>
                            <div class="price">
                                <del class="old">${item.old} ₫</del>
                                <span class="new"><big>${item.new} ₫</big></span>
                            </div>
                        </div>`;
    card.appendChild(newCard);
})

// ĐỒNG HỒ ĐÔI
import couple from "/data/CoupleWatch.json" assert { type: "json" };
console.log(couple);

var itemDetail = document.querySelector('.list-item');

itemDetail.innerHTML = '';
couple.forEach(itemCouple => {
    let newItem = document.createElement('div');
    newItem.classList.add('item-detail');
    newItem.innerHTML = `<a href="" class="item-image">
                            <img src="${itemCouple.img}" alt="">
                        </a>
                        <div class="card-btn">
                            <button class="card-shopping icon">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </button>
                            <button class="card-like icon">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                            <button class="card-view icon">
                                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                            </button>
                        </div>
                        <div class="item-info">
                            <div class="sale">
                                <span>${itemCouple.sale}</span>
                            </div>
                            <h3 class="name">${itemCouple.name}</h3>
                            <div class="rating">
                                <span>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                </span>
                            </div>
                            <div class="price">
                                <del class="old">${itemCouple.old} ₫</del>
                                <span class="new"><big>${itemCouple.new} ₫</big></span>
                            </div>
                        </div>`;
    itemDetail.appendChild(newItem);
})

// PHỤ KIỆN
import accessary from "/data/Accessary.json" assert { type: "json"};
console.log(accessary);

var itemDetailAccessary = document.querySelector('.phu-kien .list-item');

itemDetailAccessary.innerHTML = '';
accessary.forEach(itemAccessary => {
    let newItem = document.createElement('div');
    newItem.classList.add('item-detail');
    newItem.innerHTML = `<a href="" class="item-image">
                            <img src="${itemAccessary.img}" alt="">
                        </a>
                        <div class="card-btn">
                            <button class="card-shopping icon">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </button>
                            <button class="card-like icon">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                            <button class="card-view icon">
                                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                            </button>
                        </div>
                        <div class="item-info">
                            <div class="sale">
                                <span>${itemAccessary.sale}</span>
                            </div>
                            <h3 class="name">${itemAccessary.name}</h3>
                            <div class="rating">
                                <span>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                </span>
                            </div>
                            <div class="price">
                                <del class="old">${itemAccessary.old} ₫</del>
                                <span class="new"><big>${itemAccessary.new} ₫</big></span>
                            </div>
                        </div>`;
    itemDetailAccessary.appendChild(newItem);
})

// FEMAL
var showImg = document.querySelector('.show-img');
var listImg = document.querySelectorAll('.list-img img');
var btnLeft = document.querySelector('.left');
var btnRight = document.querySelector('.right');

var currentIndex = 0;
function updateImg(index) {
    currentIndex = index;
    showImg.src = listImg[index].getAttribute('src');
}
btnLeft.addEventListener('click', function () {
    showImg.style.animation = '';

    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }

    setTimeout(() => {
        updateImg(currentIndex);
        showImg.style.animation = 'opacity 0.5s ease-in-out forwards';
    }, 100)
})

btnRight.addEventListener('click', function () {
    showImg.style.animation = '';

    if (currentIndex == listImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    setTimeout(() => {
        updateImg(currentIndex);
        showImg.style.animation = 'opacity 0.5s ease-in-out forwards';
    }, 100)

})

function autoShow() {
    showImg.style.animation = '';
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }

    setTimeout(() => {
        updateImg(currentIndex);
        showImg.style.animation = 'opacity 0.5s ease-in-out forwards';
    }, 100)
    setTimeout(autoShow, 2000);
}

autoShow();

// MALE
var showImg1 = document.querySelector('.show-img1');
var listImg1 = document.querySelectorAll('.list-img1 img');
var btnLeft1 = document.querySelector('.left1');
var btnRight1 = document.querySelector('.right1');

var currentIndex1 = 0;
function updateImg1(index1) {
    currentIndex1 = index1;
    showImg1.src = listImg1[index1].getAttribute('src');
}
btnLeft1.addEventListener('click', function () {
    showImg1.style.animation = '';

    if (currentIndex1 == 0) {
        currentIndex1 = listImg1.length - 1;
    } else {
        currentIndex1--;
    }

    setTimeout(() => {
        updateImg1(currentIndex1);
        showImg1.style.animation = 'opacity 0.5s ease-in-out forwards';
    }, 100)
})

btnRight1.addEventListener('click', function () {
    showImg1.style.animation = '';

    if (currentIndex1 == listImg1.length - 1) {
        currentIndex1 = 0;
    } else {
        currentIndex1++;
    }

    setTimeout(() => {
        updateImg(currentIndex1);
        showImg1.style.animation = 'opacity 0.5s ease-in-out forwards';
    }, 100)

})

function autoShow1() {
    showImg1.style.animation = '';
    if (currentIndex1 == 0) {
        currentIndex1 = listImg1.length - 1;
    } else {
        currentIndex1--;
    }

    setTimeout(() => {
        updateImg1(currentIndex1);
        showImg1.style.animation = 'opacity 0.5s ease-in-out forwards';
    }, 100)
    setTimeout(autoShow1, 2000);
}

autoShow1();

// POPUP CARD
var close = document.querySelector('.popup-item i');
var open = document.querySelectorAll('.card-btn .card-view');
var popup = document.querySelector('.popup-card');
var body = document.querySelector('body');

function togglePopup(e) {
    popup.classList.toggle('hide');
    body.classList.toggle('scroll-none');
}

open.forEach(e => {
    e.addEventListener('click', togglePopup);
});
close.addEventListener('click', togglePopup);
popup.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) togglePopup(e);
})

// POPUP IMG
var popupShowImg = document.querySelector('.popupImg');
var popupListImg = document.querySelectorAll('.popup-list-img img');

var popupCurrentIndex = 0;

function updateImagePopup(popupIndex) {
    popupCurrentIndex = popupIndex;
    popupShowImg.src = popupListImg[popupIndex].getAttribute('src');
}
popupListImg.forEach((imgE, popupIndex) => {
    imgE.addEventListener('click', function (e) {
        updateImagePopup(popupIndex);
    })
})