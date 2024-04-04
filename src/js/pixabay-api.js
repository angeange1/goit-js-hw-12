import axios from "axios"
import { showLoader, hideLoader } from "../main"
import {inputValue} from "../main"

export async function fetchImages(currentPage) {
  showLoader()
  
  const searchParams = new URLSearchParams({
    key: "43138394-89c4115d2b9d73778d19dc685",
    q: inputValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    lang: "en",
    page: currentPage,
    per_page: 15
  })

  const BASE_URL = "https://pixabay.com"
  const END_POINT = "/api/"
  const url = BASE_URL + END_POINT
  
  const response = await axios.get(url, {searchParams})
  return response.data
}