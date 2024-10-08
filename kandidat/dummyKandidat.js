import { timeout } from "../src/js/libraries/utilities.js";

export const rekapKandidatDummy = async () => {
  await timeout(300);

  return {
    total: 25,
    aktifMagang: 12,
    pelamarMagang: 12,
    aktifKerja: 10,
    pelamarKerja: 10,
    selesai: 3,
  };
};

export const listKandidatDummy = async () => {
  await timeout(300);
  return [
    {
      id: 1,
      name: "Leroy Nelson",
      type: "Magang",
      company: "PT. Pos Indonesia",
      position: "Junior Finance",
      profilePicture: "src/images/dummy_kandidat.png",
      studyProgramme: "D3-Akuntansi",
      applyTime: "12 Agustus 2024 - 14:32",
      currentStatus: "Aktif",
      applyStatus: "Diterima",
    },
    {
      id: 2,
      name: "Sandra Wilson",
      type: "Kerja",
      company: "PT. Pos Indonesia",
      position: "Junior Finance",
      profilePicture: "src/images/dummy_kandidat.png",
      studyProgramme: "D3-Akuntansi",
      applyTime: "12 Agustus 2024 - 14:32",
      currentStatus: "Aktif",
      applyStatus: "Diterima",
    },
    {
      id: 3,
      name: "Edwin Lee",
      type: "Magang",
      company: "PT. Pos Indonesia",
      position: "Junior Finance",
      profilePicture: "src/images/dummy_kandidat.png",
      studyProgramme: "D3-Akuntansi",
      applyTime: "12 Agustus 2024 - 14:32",
      currentStatus: "Selesai",
      applyStatus: "Diterima",
    },
    {
      id: 4,
      name: "Patricia Hernandez",
      type: "Kerja",
      company: "PT. Pos Indonesia",
      position: "Junior Finance",
      profilePicture: "src/images/dummy_kandidat.png",
      studyProgramme: "D3-Akuntansi",
      applyTime: "12 Agustus 2024 - 14:32",
      currentStatus: "Melamar",
      applyStatus: "Diterima",
    },
    {
      id: 5,
      name: "Ross Thompson",
      type: "Magang",
      company: "PT. Pos Indonesia",
      position: "Junior Finance",
      profilePicture: "src/images/dummy_kandidat.png",
      studyProgramme: "D3-Akuntansi",
      applyTime: "12 Agustus 2024 - 14:32",
      currentStatus: "Aktif",
      applyStatus: "Diterima",
    },
    {
      id: 6,
      name: "Christopher Jackson",
      type: "Kerja",
      company: "PT. Pos Indonesia",
      position: "Junior Finance",
      profilePicture: "src/images/dummy_kandidat.png",
      studyProgramme: "D3-Akuntansi",
      applyTime: "12 Agustus 2024 - 14:32",
      currentStatus: "Aktif",
      applyStatus: "Diterima",
    },
  ];
};
