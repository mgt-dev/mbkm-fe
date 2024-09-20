import { redirect } from "@/libraries/client.router";
import { $auth } from "@/stores/auth";
import { html } from "uhtml";
import headerLogo from "@/assets/images/ulbi_2.png";
import footerLogo from "@/assets/images/logo_ulbi_footer.png";
import "iconify-icon";
import "@/components/ui/ui-button.js";
import "@/components/ui/ui-link";

export default async function Layout() {
  const auth = $auth.get();
  if (auth?.token) {
    return redirect("/dashboard");
  }

  return html`
    <header>
      <div class="h-[34px] w-full flex bg-ulbiOrange text-white text-sm gap-6 justify-center items-center">
        <span>+62821 2000 2716</span>
        <span>+62813 1111 0194</span>
        <span>info@ulbi.ac.id</span>
        <span>Jl. Sariasih No.54, Sarijadi, Sukasari, Kota Bandung</span>
      </div>
      <div class="h-[80px] w-full flex gap-6 justify-evenly items-center">
        <div class="flex gap-6 items-center">
          <img width="${150}" src="${headerLogo}" alt="logo" />
          <ui-link type="spa" href="/" class="text-gray-600 font-semibold hover:text-blue-400">Home</ui-link>
          <ui-link type="spa" href="/about" class="text-gray-600 font-semibold hover:text-blue-400">Tentang</ui-link>
        </div>
        <div class="flex gap-6">
          <ui-button color="orange" type="button" href="/login">Login</ui-button>
        </div>
      </div>
    </header>
    <div class="space-y-4 m-4">
      <div id="app-page"></div>
    </div>
    <footer>
      <div class="h-[455px] w-full flex gap-10 justify-center items-center bg-ulbiBlack text-white text-xs">
        <div class="w-96 flex flex-col gap-4">
          <img src="${footerLogo}" width="${150}" alt="logo" />
          <p>
            ULBI adalah institusi pendidikan tinggi yang didirikan oleh Yayasan Pendidikan Bhakti Pos Indonesia (YPBPI), ULBI memiliki visi menjadi perguruan
            tinggi vokasi yang unggul secara Nasional dalam bidang Logistik dan Manajemen Rantai Pasok
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
  `;
}
