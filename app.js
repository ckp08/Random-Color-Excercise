
const bt1=document.querySelector('button');
const h3=document.querySelector('h3');
const span=document.querySelector('span');


function randColor(num){
    return Math.floor(Math.random() * num);
}

bt1.classList.add('center');
document.querySelector('h1').classList.add('center');
document.querySelector('h3').classList.add('center');

bt1.addEventListener('click', (e) => {
    console.log('jj');
    const newColor=`rgb(${randColor(256)},${randColor(256)},${randColor(256)})`;
    document.body.style.backgroundColor=newColor;
    span.innerText=newColor;
    console.log(e);
});
