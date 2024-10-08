import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";
import { listKandidatDummy, rekapKandidatDummy } from "./dummyKandidat.js";

const fetchKandidat = async () => {
  const rekap = await rekapKandidatDummy();

  render(
    document.getElementById("rekapJumlahKandidat"),
    html`
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center gap-2">
          <iconify-icon icon="solar:user-hands-bold" height="22" class="text-ulbiOrange" noobserver></iconify-icon>
          <span class="text-lg text-ulbiBlue font-bold">Kandidat</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Total</div>
          <div class="text-xl font-bold">${rekap.total}</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Aktif Magang</div>
          <div class="text-xl font-bold">${rekap.aktifMagang}</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Pelamar Magang</div>
          <div class="text-xl font-bold">${rekap.pelamarMagang}</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Aktif Kerja</div>
          <div class="text-xl font-bold">${rekap.aktifKerja}</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Aktif Kerja</div>
          <div class="text-xl font-bold">${rekap.pelamarKerja}</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="text-xs text-gray-500 font-semibold">Selesai</div>
          <div class="text-xl font-bold">${rekap.selesai}</div>
        </div>
      </div>
    `
  );
};

const fetchTabelKandidat = async () => {
  const list = await listKandidatDummy();

  render(
    document.getElementById("tabelKandidat"),
    html`
      ${list.map((item) => {
        return html`
          <tr>
            <td>${item.applyTime}</td>
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.company}</td>
            <td>${item.position}</td>
            <td>${item.studyProgramme}</td>
            <td>
              ${item.currentStatus === "Aktif"
                ? html`<ui-badge class="bg-green-600/25 text-green-600" dot>${item.currentStatus}</ui-badge>`
                : item.currentStatus === "Melamar"
                ? html`<ui-badge class="bg-orange-600/25 text-orange-600" dot>${item.currentStatus}</ui-badge>`
                : item.currentStatus === "Selesai"
                ? html`<ui-badge class="bg-gray-600/25 text-gray-600" dot>${item.currentStatus}</ui-badge>`
                : ""}
            </td>
            <td class="flex space-x-4">
              <div><iconify-icon icon="solar:eye-bold" class="text-orange-500" height="16"></iconify-icon></div>
              <div><iconify-icon icon="solar:download-square-bold" class="text-blue-900" height="16"></iconify-icon></div>
            </td>
          </tr>
        `;
      })}
    `
  );
};

//-----------------

fetchKandidat();
fetchTabelKandidat();
