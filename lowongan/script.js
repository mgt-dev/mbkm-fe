import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";
import { rekapLowonganMagangDummy, listLowonganMagangDummy } from "./dummyLowongan.js";
import { toMonetary } from "../src/js/libraries/utilities.js";

const fetchLowonganMagang = async () => {
  const rekap = await rekapLowonganMagangDummy();

  render(
    document.getElementById("rekapLowonganMagang"),
    html`
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center gap-2">
          <iconify-icon icon="solar:case-round-bold" height="22" class="text-ulbiOrange" noobserver></iconify-icon>
          <span class="text-lg text-ulbiBlue font-bold">Lowongan</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Total</div>
          <div class="text-xl font-bold">${rekap.total}</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Diterima</div>
          <div class="text-xl font-bold">${rekap.diterima}</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Ditinjau</div>
          <div class="text-xl font-bold">${rekap.ditinjau}</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Ditolak</div>
          <div class="text-xl font-bold">${rekap.ditolak}</div>
        </div>
      </div>
    `
  );
};

const fetchListLowongan = async () => {
  const list = await listLowonganMagangDummy();

  render(document.getElementById("totalLowonganMagang"), html` Menampilkan ${toMonetary(list.length)} Lowongan `);

  render(
    document.getElementById("listLowonganMagang"),
    html`
      ${list.map(
        (item) => html`
          <div class="flex-none flex gap-2 rounded-lg border border-gray-300">
            <div class="w-[120px] flex overflow-hidden rounded-l-lg">
              <img class="object-center object-contain" src=${item.picture} height="[100px]" alt="image" />
            </div>
            <div class="p-4 flex flex-col gap-2 text-xs">
              <div class="flex justify-between items-center">
                <div>Diposting 2 Hari Yang Lalu</div>
                <div>
                  ${item.status === "Aktif"
                    ? html`<ui-badge class="bg-green-600/25 text-green-600" dot>${item.status}</ui-badge>`
                    : item.status === "Perlu Ditinjau"
                    ? html`<ui-badge class="bg-orange-600/25 text-orange-600" dot>${item.status}</ui-badge>`
                    : item.status === "Ditolak"
                    ? html`<ui-badge class="bg-red-600/25 text-red-600" dot>${item.status}</ui-badge>`
                    : ""}
                </div>
              </div>
              <div class="text-sm font-semibold">${item.title}</div>
              <div class="flex justify-start items-center gap-2">
                <iconify-icon icon="solar:buildings-bold-duotone" height="22" class="text-ulbiOrange" noobserver></iconify-icon>
                <div>${item.company}</div>
              </div>
              <div class="flex justify-start items-center gap-2">
                <iconify-icon icon="solar:map-point-bold-duotone" height="22" class="text-ulbiOrange" noobserver></iconify-icon>
                <div>${item.location}</div>
              </div>
              <div class="flex justify-start items-center gap-2">
                <iconify-icon icon="solar:calendar-bold-duotone" height="22" class="text-ulbiOrange" noobserver></iconify-icon>
                <div>Batas Akhir Pendaftaran: ${item.date}</div>
              </div>
              <div class="flex justify-between items-center gap-2">
                <div class="flex justify-start items-center gap-2">
                  <iconify-icon icon="solar:user-bold-duotone" height="22" class="text-ulbiOrange" noobserver></iconify-icon>
                  <div class="font-semibold">${item.applicants} Kandidat Mendaftar</div>
                </div>
                <div class="flex gap-2">
                  <ui-button variant="outline_orange" type="button" href="lowongan/kurasi">Detail</ui-button>
                  <ui-button color="orange" type="button" href="lowongan/review">Tinjau</ui-button>
                </div>
              </div>
            </div>
          </div>
        `
      )}
    `
  );
};
//-----------------

fetchLowonganMagang();
fetchListLowongan();
