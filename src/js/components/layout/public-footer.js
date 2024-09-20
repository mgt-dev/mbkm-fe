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
        <footer class="bg-ulbiBlack text-white text-xs">
          <div class="grid grid-cols-3 gap-10 mx-auto max-w-[90dvw] 2xl:max-w-7xl py-12">
            <div class="space-y-4 self-center">
              <img src="src/images/logo_ulbi_footer.png" alt="logo" />
              <p>
                ULBI adalah institusi pendidikan tinggi yang didirikan oleh Yayasan Pendidikan Bhakti Pos Indonesia (YPBPI), ULBI memiliki visi menjadi
                perguruan tinggi vokasi yang unggul secara Nasional dalam bidang Logistik dan Manajemen Rantai Pasok
              </p>
              <div class="flex flex-row gap-2">
                <iconify-icon icon="ic:baseline-facebook" height="22" noobserver noobserver></iconify-icon>
                <iconify-icon icon="mdi:twitter" height="22" noobserver></iconify-icon>
                <iconify-icon icon="mdi:youtube" height="22" noobserver></iconify-icon>
                <iconify-icon icon="mdi:instagram" height="22" noobserver></iconify-icon>
                <iconify-icon icon="ic:baseline-tiktok" height="22" noobserver></iconify-icon>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-lg font-semibold">Lokasi</span>
              <span>Yayasan Pendidikan Bhakti Pos Indonesia (YPBPI)</span>
              <span>Jalan Sariasih No. 54 Sarijadi Bandung, 40151, Jawa Barat Indonesia</span>
              <span class="text-lg font-semibold">Kontak</span>
              <span><iconify-icon icon="formkit:arrowright" height="10" noobserver></iconify-icon> Sekretariat</span>
              <span><iconify-icon icon="formkit:arrowright" height="10" noobserver></iconify-icon> HUMAS</span>
              <span><iconify-icon icon="formkit:arrowright" height="10" noobserver></iconify-icon> Admission</span>
              <span class="text-lg font-semibold">Email</span>
              <span><iconify-icon icon="formkit:arrowright" height="10" noobserver></iconify-icon> info@ulbi.ac.id</span>
              <span><iconify-icon icon="formkit:arrowright" height="10" noobserver></iconify-icon> humas@ulbi.ac.id</span>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-lg font-semibold">Link Terkait</span>
              <span><iconify-icon icon="formkit:arrowright" height="10" noobserver></iconify-icon> Penerimaan Mahasiswa Baru (Admission)</span>
              <span><iconify-icon icon="formkit:arrowright" height="10" noobserver></iconify-icon> Sistem Informasi Akademik (SIP)</span>
              <span><iconify-icon icon="formkit:arrowright" height="10" noobserver></iconify-icon> Sistem Informasi Sumberdaya Terintegrasi</span>
              <span><iconify-icon icon="formkit:arrowright" height="10" noobserver></iconify-icon> Asrama Kampus dan Kost</span>
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
