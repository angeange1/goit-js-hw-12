import axios from "axios"
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

import { getImages } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions"

export const gallery = document.querySelector("ul")
export let inputValue

export const showLoader = () => {loader.style.display = "flex"}
export const hideLoader = () => {loader.style.display = "none"}

const form = document.querySelector("form")
const searchInput = document.querySelector("input")
const loader = document.querySelector(".loader")
const loadMoreBtn = document.querySelector(".loadmore-btn")
const loadMoreLoader = document.querySelector(".loading-more")

export let pageToShow = 1
export let perPage = 15 
export let endPage

loader.style.display = "none"

form.addEventListener("submit", handleSearchSubmit)

async function handleSearchSubmit(event){
  event.preventDefault()
  hideLoadMore()
  pageToShow = 1
  inputValue = searchInput.value.trim()
  gallery.innerHTML = ""

  if (inputValue !== "") {
    try {
      const images = await getImages(inputValue, pageToShow)
      endPage = Math.ceil(images.totalHits / perPage)
      renderImages(images.hits)
      isLoadMoreToShow()
      form.reset()
    } catch (error) {console.log(error)}
  }
  else {
    gallery.innerHTML = ""
    iziToast.info({
      message: "Please fill the field",
    })
  }
}

loadMoreBtn.addEventListener('click', handleLoadMoreClick)

async function handleLoadMoreClick() {
  try {
    pageToShow += 1
    showLoadMoreLoader()
    const images = await getImages(inputValue, pageToShow) 
    hideLoadMoreLoader()
    renderImages(images.hits)

    }catch (error) {
        console.log(error)
    }
    scrollImages()
    isLoadMoreToShow()
}

function isLoadMoreToShow() {
  if (pageToShow > endPage) {
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results"
    })
    hideLoadMore() 
  }
  else {showLoadMore()}
}

function showLoadMore() {
loadMoreBtn.classList.remove("hidden")
}

export function hideLoadMore() {
loadMoreBtn.classList.add("hidden")
}

function showLoadMoreLoader() {
loadMoreLoader.classList.remove('hidden')
}

function hideLoadMoreLoader() {
loadMoreLoader.classList.add('hidden')
}

function scrollImages(){
    const galleryItem = document.querySelector('.image-item')
    const height = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
        top: height*2,
        behavior: 'smooth',
      });
}