// import { galleryItems } from './gallery-items.js';

// const refs = {
//     ulEl: document.querySelector(".gallery"),
// };

//     const creatEl = createElements(galleryItems);
//     refs.ulEl.insertAdjacentHTML("beforeend", creatEl);
//     refs.ulEl.addEventListener('click', openModalWindow);


// function createElements(galleryItems){
//     return galleryItems.map(({preview, original, description}) => {
//         return ` <li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img
//             class="gallery__image"
//             src="${preview}"
//             data-source=${original}
//             alt="${description}"/></a></li>`
//     }).join('');
// };

// function openModalWindow(event){
//     event.preventDefault();
    
//     if(event.target.nodeName !== "IMG"){
//         return;
//     }
    
//     const originalImg = event.target.dataset.source;
//     console.log(event.target.dataset.source);
//     const instance = basicLightbox.create(`
//     <img src="${originalImg}" width="800" height="600">
//     `)
    
//     instance.show();
//     const visible = basicLightbox.visible()
    
//     document.addEventListener('keydown', closeModalOnEscape);
//     function closeModalOnEscape(event){
//         if(event.key === "Escape" && visible){
//             instance.close();
//             document.removeEventListener('keydown', closeModalOnEscape);
//         };
//     };
// };

