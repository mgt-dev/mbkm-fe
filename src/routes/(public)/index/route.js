import { html } from "uhtml";
import picture from "@/assets/images/pos_ind.png";
import "@/components/ui/ui-card.js";

export const MetaTitle = "Landing Page";
export const MetaDescription = "Description of this page";

export default async function Page() {
  return html`
    <img src="${picture}" alt="logo" />
    <div>
      <h1 class="text-lg font-bold">${MetaTitle}</h1>
    </div>
    <div class="mx-16 my-8 flex flex-col gap-8">
      <span class="text-3xl text-center font-bold">Lowongan Magang</span>
      <ui-card variant="no-image" className="bg-gray-300 font-semibold">Cari Berdasarkan Perusahaan, Pekerjaan dan Program Studi </ui-card>
      <div>Total: 24 Lowongan Magang</div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <ui-card variant="horizontal" imageSrc="${picture}" imageBgColor="#1B2C5A;">
            <div class="flex flex-col gap-2 text-gray-500">
              <div class="flex justify-between items-center">
                <div>Diposting 2 Hari Yang Lalu</div>
                <div><ui-badge content="New Badge" class="bg-green-400 text-white" dot>Aktif</ui-badge></div>
              </div>
              <div class="text-sm font-semibold">Global Finance Accounting Internship</div>
              <div class="flex justify-start items-center gap-2">
                <iconify-icon icon="solar:buildings-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                <div>PT. Pos Indonesia</div>
              </div>
              <div class="flex justify-start items-center gap-2">
                <iconify-icon icon="solar:map-point-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                <div>Bandung, Jawa Barat</div>
              </div>
              <div class="flex justify-start items-center gap-2">
                <iconify-icon icon="solar:calendar-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                <div>Batas Akhir Pendaftaran: 6 September 2024</div>
              </div>
              <div class="flex justify-between items-center gap-2">
                <div class="flex justify-start items-center gap-2">
                  <iconify-icon icon="solar:user-bold-duotone" height="22" class="text-ulbiOrange"></iconify-icon>
                  <div class="text-sm font-semibold">10 Kandidat Mendaftar</div>
                </div>
                <div class="flex gap-2">
                  <ui-button variant="outline" type="button" href="">Simpan</ui-button>
                  <ui-button color="orange" type="button" href="">Detail</ui-button>
                </div>
              </div>
            </div>
          </ui-card>
        </div>
        <div>tes</div>
      </div>
      <ui-card variant="no-image">Would You Want To Join Us</ui-card>
      <div>Artikel</div>
      <ui-card variant="vertical" imageSrc="${image}">
        <div>Dipublikasikan oleh Admin CDC | 6 September 2024</div>
        <div>Onboarding Internship PKKM Flagship Program</div>
        <div>Here are the biggest enterprise technology acquisition of 2021 so far, in reverse chronological order.</div>
        <div class="flex justify-between items-center">
          <ui-button color="orange" type="button" href="" class="text-xs font-medium"
            >Read more <iconify-icon icon="formkit:arrowright" height="15"></iconify-icon
          ></ui-button>
          <div>
            <iconify-icon icon="solar:eye-bold" height="10"></iconify-icon>
            Dilihat 1.250 kali
          </div>
        </div>
      </ui-card>
    </div>
  `;
}
