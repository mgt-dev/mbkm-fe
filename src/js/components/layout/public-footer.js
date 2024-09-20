import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";
/**
 * @element public-footer
 */
class PublicFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      this,
      html`
        <footer>
          <div class="h-[455px] w-full flex gap-10 justify-center items-center bg-ulbiBlack text-white text-xs">
            <div class="w-96 flex flex-col gap-4">
              <img src="src/images/logo_ulbi_footer.png" width="${150}" alt="logo" />
              <p>
                ULBI adalah institusi pendidikan tinggi yang didirikan oleh Yayasan Pendidikan Bhakti Pos Indonesia (YPBPI), ULBI memiliki visi menjadi
                perguruan tinggi vokasi yang unggul secara Nasional dalam bidang Logistik dan Manajemen Rantai Pasok
              </p>
              <div class="flex flex-row gap-2">
                <iconify-icon icon="ic:baseline-facebook" height="22"></iconify-icon>
                <iconify-icon icon="mdi:twitter" height="22"></iconify-icon>
                <iconify-icon icon="mdi:youtube" height="22"></iconify-icon>
                <iconify-icon icon="mdi:instagram" height="22"></iconify-icon>
                <iconify-icon icon="ic:baseline-tiktok" height="22"></iconify-icon>
              </div>
            </div>
            <div class="flex flex-col gap-2 align-items: start">
              <span class="text-lg font-semibold">Lokasi</span>
              <span>Yayasan Pendidikan Bhakti Pos Indonesia (YPBPI)</span>
              <span>Jalan Sariasih No. 54 Sarijadi Bandung, 40151, Jawa Barat Indonesia</span>
              <span class="text-lg font-semibold">Kontak</span>
              <span><iconify-icon icon="formkit:arrowright" height="10"></iconify-icon> Sekretariat</span>
              <span><iconify-icon icon="formkit:arrowright" height="10"></iconify-icon> HUMAS</span>
              <span><iconify-icon icon="formkit:arrowright" height="10"></iconify-icon> Admission</span>
              <span class="text-lg font-semibold">Email</span>
              <span><iconify-icon icon="formkit:arrowright" height="10"></iconify-icon> info@ulbi.ac.id</span>
              <span><iconify-icon icon="formkit:arrowright" height="10"></iconify-icon> humas@ulbi.ac.id</span>
            </div>
            <div class="flex flex-col gap-2 align-items: start">
              <span class="text-lg font-semibold">Link Terkait</span>
              <span><iconify-icon icon="formkit:arrowright" height="10"></iconify-icon> Penerimaan Mahasiswa Baru (Admission)</span>
              <span><iconify-icon icon="formkit:arrowright" height="10"></iconify-icon> Sistem Informasi Akademik (SIP)</span>
              <span><iconify-icon icon="formkit:arrowright" height="10"></iconify-icon> Sistem Informasi Sumberdaya Terintegrasi</span>
              <span><iconify-icon icon="formkit:arrowright" height="10"></iconify-icon> Asrama Kampus dan Kost</span>
            </div>
          </div>
          <div class="h-[56px] w-full flex bg-ulbiOrange text-white text-sm justify-center items-center">
            2024.Universitas Logistik dan Bisnis Internasional (ULBI). Allrights reserved.
          </div>
        </footer>
      `
    );
  }
}

customElements.define("public-footer", PublicFooter);
