import { cn } from "@/libraries/utilities"; // Pastikan fungsi ini tersedia
import { html, render } from "lit-html"; // Menggunakan lit-html untuk rendering
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

/**
 * @element ui-card
 *
 * @attr {string} title
 * @attr {string} [variant="default"]
 * @attr {string} [imageSrc=""]
 * @attr {string} [imageWidth=""]  // Menambahkan atribut untuk lebar gambar
 * @attr {string} [imageHeight=""] // Menambahkan atribut untuk tinggi gambar
 * @attr {string} [imageBgColor=""] // Menambahkan atribut untuk warna latar belakang container gambar
 * @attr {string} [class]
 */
class UICard extends HTMLElement {
  constructor() {
    super();
    this.content = this.innerHTML;
    this.innerHTML = "";
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    const variant = this.getAttribute("variant") || "default";
    const title = this.getAttribute("title");
    const imageSrc = this.getAttribute("imageSrc") || "";
    const imageWidth = this.getAttribute("imageWidth") || "100%"; // Default lebar gambar 100%
    const imageHeight = this.getAttribute("imageHeight") || "auto";
    const imageBgColor = this.getAttribute("imageBgColor") || ""; // Warna latar belakang container gambar
    const className = this.getAttribute("class") || "";

    // Dynamic class based on the variant
    const variantClasses = cn("flex border border-gray-200 rounded-md overflow-hidden", className, {
      "flex-row": variant === "horizontal",
      "flex-col w-1/3": variant === "vertical",
      "p-4": variant === "no-image", // No image has padding applied
    });

    // Image wrapper styles
    const imageWrapperClass = cn("p-0 flex justify-center items-center overflow-hidden", {
      "w-1/5": variant === "horizontal",
      "w-full": variant === "vertical",
      hidden: variant === "no-image",
    });

    // Content wrapper styles
    const contentClass = "px-4 py-2 flex-grow text-xs";

    if (imageSrc) {
      return html`<img style="width: ${imageWidth}; height: ${imageHeight};" src="${imageSrc}" alt="Card Image" />`;
    } else {
      console.error("imageSrc tidak valid");
    }

    render(
      html`
        <div class="${variantClasses}">
          ${variant !== "no-image" && imageSrc
            ? html`<div class="${imageWrapperClass}" style="background-color: ${imageBgColor};">
                <img style="width: ${imageWidth}; height: ${imageHeight};" src="${imageSrc}" alt="Card Image" />
              </div>`
            : null}
          <div class="${contentClass}">
            <h3 class="font-bold mb-2">${unsafeHTML(title)}</h3>
            <div>${unsafeHTML(this.content)}</div>
          </div>
        </div>
      `,
      this
    );
  }
}

customElements.define("ui-card", UICard);
