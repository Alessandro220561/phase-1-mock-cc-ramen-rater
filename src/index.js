//See all ramen images in the div with the id of ramen-menu.
// When the page loads, request the data from the server to get all the ramen objects. 
//Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

//create DOMContent event,
//iterate through info to get image on DOM

const ramenMenu = document.querySelector('#ramen-menu')

document.addEventListener('DOMContentLoaded', renderRamens)

function renderRamens() {
    fetch(`http://localhost:3000/ramens`)
    .then(response => response.json())
    .then(ramens => renderRamen(ramens))
}

function renderRamen(ramens) {
    ramens.forEach((ramen) => renderRamenImages(ramen))
}

function renderRamenImages(ramen) {
    const img = document.createElement('img')
    img.src = ramen.image
    img.id = 'menu-image'
    img.addEventListener('click',() => renderRamenInfo(ramen))
    ramenMenu.append(img)
}

function renderRamenInfo(ramen) {
    const img = document.querySelector('.detail-image')
    img.src = ramen.image
    const name = document.querySelector('.name')
    name.innerText = ramen.name
    const restaurant = document.querySelector('.restaurant')
    restaurant.innerText = ramen.restaurant
    const rating = document.querySelector('#rating-display')
    rating.innerText = ramen.rating
    const comment = document.querySelector('#comment-display')
    comment.innerText = ramen.comment
}

const ramenForm = document.querySelector('#new-ramen')

ramenForm.addEventListener('submit', newRamenInfo)

function newRamenInfo(event) {
    event.preventDefault()
    const name = document.querySelector('#new-name').value
    const restaurant = document.querySelector('#new-restaurant').value
    const image = document.querySelector('#new-image').value
    const rating = document.querySelector('#new-rating').value
    const comment = document.querySelector('#new-comment').value
    const ramen = {name, restaurant, image, rating, comment}
    renderRamenImages(ramen)

}