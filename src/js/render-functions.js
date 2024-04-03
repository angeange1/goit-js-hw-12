import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

import {gallery} from "../main"

export function renderImages(array) {
  
  if (!array.length) {
    iziToast.error({
      message: `❌ Sorry, there are no images matching your search query. Please try again!`
    })
  }
  gallery.innerHTML = ""

  const markup = array.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `<li class="image-item">
      <a href="${largeImageURL}">
        <img
          src="${webformatURL}"
          data-source="${largeImageURL}"
          alt="${tags}"
        />
        <ul class="image-description">
          <li>
            <h3>Likes</h3>
            <p><b>${likes}</b></p>
          </li>
          <li>
            <h3>Views</h3>
            <p><b>${views}</b></p>
          </li>
          <li>
            <h3>Comments</h3>
            <p><b>${comments}</b></p>
          </li>
          <li>
            <h3>Downloads</h3>
            <p><b>${downloads}</b></p>
          </li>
        </ul>
      </a>
    </li>`
  })
    .join("")

  gallery.insertAdjacentHTML("beforeend", markup)

  const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,})
  lightbox.refresh()
}