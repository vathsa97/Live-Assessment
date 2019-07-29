window.onload=function(){
let log = document.getElementById('person');
log.onmouseover=function(){
    let showLogout = document.getElementById('logout');
    showLogout.style.display="block";
}
log.onmouseout=function(){
    let showLogout = document.getElementById('logout');
    showLogout.style.display="none";
}
let showMore = document.getElementById('show-more') ;
let count = 0;
showMore.onclick = function(){
    let show = document.getElementsByClassName('show-container');
    show[0].classList.replace("show-container","hide-container");
    count++;
    if(count==2){
        showMore.style.display="none";
        let hide = document.getElementById('show-less');
        hide.style.display="flex";
    }
}
let hide = document.getElementById("show-less");
hide.onclick = function() {
    let showLess = document.getElementsByClassName('hide-container');
    let size = showLess.length;
    for(let i=0;i<size;i++){
        showLess[0].classList.replace("hide-container","show-container");
    }
    hide.style.display="none";
    let show = document.getElementById('show-more');
    show.style.display="flex";
    count=0;
    
}
let paragraph = document.getElementsByClassName("paragraph");
for(let i=0;i<paragraph.length;i++){
paragraph[i].onmouseover = function() {
    let tooltip = document.getElementsByClassName("tooltip");
    tooltip[i].style.display="block";
}
paragraph[i].onmouseout = function() {
    let tooltip = document.getElementsByClassName("tooltip");
    tooltip[i].style.display="none";
}
}
let search = document.getElementById('search');
search.onclick = function() {
    let searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('search-click');
}
let button = document.getElementById('button');
button.onclick = function() {
    let form = document.getElementById('form-container');
    form.style.display="flex";
}
let submit = document.getElementById('submit');
submit.onclick = function() {
    let form = document.getElementById('form-container');
    form.style.display="none";
    let input = document.getElementsByClassName('name-date');
    for(let i=0;i<input.length;i++){
        input[i].value="";
    }
}

let nav = document.getElementsByClassName('cata-link');
for(let i = 0 ; i < nav.length ; i++){
    nav[i].addEventListener("mouseover",function (e) {
        e.currentTarget.classList.add('nav-change');
    });
    nav[i].addEventListener("mouseout",function (e){
        e.currentTarget.classList.remove('nav-change');
    });
}
};






