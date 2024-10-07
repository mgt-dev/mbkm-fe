document.addEventListener("DOMContentLoaded", function () {
  // Tangkap tombol tambah benefit
  const addBenefitButton = document.getElementById("add-benefit");

  // Tangkap container tempat input benefit berada
  const benefitContainer = document.getElementById("benefit-container");

  // Fungsi untuk menambahkan input benefit baru
  addBenefitButton.addEventListener("click", function () {
    // Buat elemen fo-input baru
    const newBenefitInput = document.createElement("fo-input");

    // Setel atribut yang dibutuhkan
    newBenefitInput.setAttribute("name", `benefit-${Date.now()}`); // Nama unik berdasarkan waktu
    newBenefitInput.setAttribute("placeholder", "Benefit tambahan");
    newBenefitInput.setAttribute("value", "");

    // Tambahkan input baru ke dalam benefitContainer
    benefitContainer.appendChild(newBenefitInput);
  });
});
