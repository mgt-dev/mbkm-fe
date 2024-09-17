import { html, render } from "uhtml";
import { dummyPokemon } from "@/libraries/server.function";
import { timeout } from "@/libraries/utilities";
import "iconify-icon";
import "@/components/ui/ui-pagination";
import "@/components/ui/ui-table";

export const MetaTitle = "Table";

export default async function Page() {
  return html`
    <div>
      <h1 class="text-lg font-bold">${MetaTitle}</h1>

      <div class="mt-4 max-w-5xl">
        <ui-table>
          <table>
            <thead>
              <tr>
                <th width="1">Id</th>
                <th width="1">Image</th>
                <th class="text-left">Name</th>
                <th class="text-left">Abilities</th>
                <th width="1">Pokedex</th>
              </tr>
            </thead>
            <tbody id="tableData">
              ${Array.from({ length: 5 }).map(
                () =>
                  html`<tr>
                    <td colspan="99" class="text-center">
                      <div class="bg-gray-200 h-12 animate-pulse rounded"></div>
                    </td>
                  </tr>`
              )}
            </tbody>
          </table>
        </ui-table>
        <ui-pagination id="paginationData" class="mt-4" data-pagination-count="16" data-pagination-limit="5" data-pagination-page="1"></ui-pagination>
      </div>
    </div>
  `;
}

export const Script = async () => {
  getAndRender(1);

  const paginationData = document.getElementById("paginationData");

  paginationData.addEventListener("pagination-page-change", async (event) => {
    // @ts-ignore
    const page = event.detail.page;
    getAndRender(page);
  });
};

const getAndRender = async (page) => {
  const tableData = document.getElementById("tableData");
  const pagination = document.querySelector("ui-pagination");

  if (tableData instanceof HTMLElement) {
    pagination.setAttribute("disabled", "");

    await timeout(300);
    const { data } = await dummyPokemon(page);

    pagination.removeAttribute("disabled");

    if (!data || data.length === 0) {
      return render(
        tableData,
        html`<tr>
          <td colspan="99" class="text-center text-gray-600">No Data</td>
        </tr>`
      );
    }

    render(
      tableData,
      html`
        ${data.map(
          (item) => html`
            <tr>
              <td class="text-center font-medium">${item.id}</td>
              <td>
                <div class="h-24 w-24 rounded-sm overflow-hidden mx-auto">
                  <img src=${item.image} class="h-full w-full object-cover" />
                </div>
              </td>
              <td class="capitalize">${item.name}</td>
              <td class="capitalize">${item.abilities.join(", ")}</td>
              <td class="text-center hover:animate-pulse">
                <iconify-icon icon="mdi:pokeball" height="24" class="text-blue-600"></iconify-icon>
              </td>
            </tr>
          `
        )}
      `
    );
  }
};
