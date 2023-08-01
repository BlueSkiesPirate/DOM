let pokeImg = document.querySelectorAll('img');
let body = document.querySelector('body')
let footer = document.querySelector('footer')


for(let i = 0; i < pokeImg.length;i++){
    pokeImg[i].style.borderStyle = "dotted";
    pokeImg[i].style.borderColor = "yellow";  
    // pokeImg.style.borderTop = 'white';
}

body.style.backgroundColor = "rgb(25,0,145)";
footer.style.textDecoration = "overline underline";