let puppyImage = document.getElementById("puppyImage");
let likeIcon = document.getElementById("likeIcon");
let likeButtonColor = document.getElementById("likeButton");
let likeButtonBg = document.getElementById("likeButton");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === true) {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIcon.style.color = "#cbd2d9";
        likeButtonColor.style.color = "#9aa5b1";
        likeButtonBg.style.backgroundColor = "#cbd2d9";
        isImageLiked = false;
    } else {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIcon.style.color = "#0967d2";
        likeButtonColor.style.color = "#ffffff";
        likeButtonBg.style.backgroundColor = "#0967d2";
        isImageLiked = true;
    }
}
