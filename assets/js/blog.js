let blogPage = document.querySelector('.blogpage');
let sifirla = document.querySelector('.delete');

let yapayzeka = document.querySelector('.yapayzeka');
let saglik = document.querySelector('.saglik');
let gezi = document.querySelector('.gezi');
let moda = document.querySelector('.moda');
let kisiselGelisim = document.querySelector('.kisiselGelisim');

let blogList = [];

if(typeof localStorage.blogList !== 'undefined' ) {
  blogList = JSON.parse(localStorage.blogList);
  renderBlogForm();
}

function handleSubmitForm(e) {
  e.preventDefault();
  let formData = new FormData(blogPage);
  let formObj = Object.fromEntries(formData);
  blogList.push(formObj);
  blogPage.reset();
  renderBlogForm();
  save();
}

blogPage.addEventListener('submit', handleSubmitForm);

function save() {
  localStorage.blogList = JSON.stringify(blogList);
}

function renderBlogForm() {
  yapayzeka.innerHTML = '';
  saglik.innerHTML = '';
  gezi.innerHTML = '';
  kisiselGelisim.innerHTML = '';
  moda.innerHTML = '';
  
  for(let i = 0; i < blogList.length; i++) {

  if(blogList[i].katagori === 'Yapay Zeka') {
    yapayzeka.innerHTML += `<div class="blogList-item">
     <p> ${blogList[i].baslik} </p>
     <p> ${blogList[i].aciklama} </p>
     <p> ${blogList[i].yazar} </p>   
     </div>`; 
  } else if(blogList[i].katagori === 'Sağlık') {
    saglik.innerHTML += `<div class="blogList-item">
     <p> ${blogList[i].baslik} </p>
     <p> ${blogList[i].aciklama} </p>
     <p> ${blogList[i].yazar} </p>   
     </div>`; 
  } else if(blogList[i].katagori === 'Gezi') {
    gezi.innerHTML += `<div class="blogList-item">
     <p> ${blogList[i].baslik} </p>
     <p> ${blogList[i].aciklama} </p>
     <p> ${blogList[i].yazar} </p>   
     </div>`; 
  } else if(blogList[i].katagori === 'Kişisel Gelişim') {
    kisiselGelisim.innerHTML += `<div class="blogList-item">
     <p> ${blogList[i].baslik} </p>
     <p> ${blogList[i].aciklama} </p>
     <p> ${blogList[i].yazar} </p>   
     </div>`; 
  } else if(blogList[i].katagori === 'Moda') {
    moda.innerHTML += `<div class="blogList-item">
     <p> ${blogList[i].baslik} </p>
     <p> ${blogList[i].aciklama} </p>
     <p> ${blogList[i].yazar} </p>   
     </div>`; 
  }
}
}

function clearForm() {
  localStorage.clear();
  blogList = [];
  renderBlogForm();
}

sifirla.addEventListener('click', clearForm);