import { html } from "uhtml";
import { artikel, lowonganMagang } from "@/data/list.js";
import banner from "@/assets/images/banner.png";
import bgulbi from "@/assets/images/logo_ulbi_dark.png";
import image1 from "@/assets/images/Frame 6.png";
import image2 from "@/assets/images/logo_ulbi.png";
import image3 from "@/assets/images/logo_bni.png";
import image4 from "@/assets/images/card_header.png";
import image5 from "@/assets/images/card_header_2.png";
import image6 from "@/assets/images/poster.png";

const imageMap = {
  image1,
  image2,
  image3,
  image4,
  image5,
};

console.log(bgulbi);

const bgContainer = document.getElementById("background-container");
if (bgContainer) {
  bgContainer.style.backgroundImage = `url('${bgulbi}')`;
}

const searchComponent = document.querySelector("ui-search");

if (searchComponent) {
  searchComponent.addEventListener("search", (event) => {
    const customEvent = /** @type {CustomEvent} */ (event); // Casting event to CustomEvent
    const keyword = customEvent.detail.keyword;
    console.log(`Searching for: ${keyword}`);

    // Logika pencarian dapat ditambahkan di sini
  });
}
