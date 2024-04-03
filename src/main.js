import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

import { fetchImages } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions"

export const gallery = document.querySelector("ul")
export let inputValue

export const showLoader = () => {loader.style.display = "flex"}
export const hideLoader = () => {loader.style.display = "none"}

const form = document.querySelector("form")
const searchInput = document.querySelector("input")
const loader = document.querySelector(".loader")

loader.style.display = "none"

form.addEventListener("submit", event => {
  event.preventDefault()

  inputValue = searchInput.value.trim()

  if (inputValue !== "") {
  fetchImages(inputValue)
    .then((images) => renderImages(images.hits))
    .catch((error) => console.log(error)) 
  form.reset()
  }
  else {
    gallery.innerHTML = ""
    iziToast.info({
      message: "Please fill the field",
    })
  }
})