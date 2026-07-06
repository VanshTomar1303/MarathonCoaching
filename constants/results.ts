import type { RankResult } from "@/types";

export const resultsByYear: Record<string, RankResult[]> = {
  "2021": [
    { name: "Hricheek Mondal", air: 464, image: "/results/hricheek-mondal-air-464.jpg", category: "JEE Advanced" },
    { name: "Soumyadip Das", air: 475, image: "/results/soumyadip-das-air-475.jpg", category: "JEE Advanced" },
    { name: "Ayush Ramteke", air: 957, image: "/results/ayush-ramteke-air-957.jpg", category: "JEE Advanced" },
    { name: "Aaronyak Dewanji", air: 1317, image: "/results/aaronyak-dewanji-air-1317.jpg", category: "JEE Advanced" },
    { name: "Avik Halder", air: 1647, image: "/results/Avik-Halder-air-1647.jpg", category: "JEE Advanced" },
    { name: "Shubhayan Pan", air: 2837, image: "/results/Shubhayan-pan-air-2837.jpg", category: "JEE Advanced" },
    { name: "Debaditya Das", air: 2896, image: "/results/Debaditya-Das-air-2896.jpg", category: "JEE Advanced" },
    { name: "Aritra Kundu", air: 3818, image: "/results/aritra-kundu-air-3818.jpg", category: "JEE Advanced" },
  ],
  "2020": [
    { name: "Danish Javed", air: 69, image: "/results/danish-javed-air-69.jpg", category: "JEE Advanced" },
    { name: "Tarang Sur Choudhury", air: 778, image: "/results/tarang-sur-choudhury-air-778.jpg", category: "JEE Advanced" },
    { name: "Mousam Biswas", air: 1128, image: "/results/mousam-biswas-air-1128.jpg", category: "JEE Advanced" },
    { name: "Biswayan Sarkar", air: 1277, image: "/results/biswayan-sarkar-air-1277.jpg", category: "JEE Advanced" },
    { name: "Soham Chakraborty", air: 1551, image: "/results/soham-chakraborty-air-1551.jpg", category: "JEE Advanced" },
    { name: "Paritosh Sarangi", air: 2166, image: "/results/paritosh-sarangi-air-2166.jpg", category: "JEE Advanced" },
    { name: "Ushasi Das", air: 2174, image: "/results/ushasi-das-air-2174.jpg", category: "JEE Advanced" },
    { name: "Amitava Roy", air: 2481, image: "/results/amitava-roy-air-2481.jpg", category: "JEE Advanced" },
  ],
  "2019": [
    { name: "Arka Das", air: 124, image: "/results/arka-das-air-124.jpg", category: "JEE Advanced" },
    { name: "Sankhojyoti Halder", air: 232, image: "/results/sankhojyoti-halder-air-232.jpg", category: "JEE Advanced" },
    { name: "Richeek Das", air: 544, image: "/results/richeek-das-air-544.jpg", category: "JEE Advanced" },
    { name: "Aritra Chatterjee", air: 555, image: "/results/aritra-chatterjee-air-555.jpg", category: "JEE Advanced" },
    { name: "Anubhab Goswami", air: 1271, image: "/results/anubhab-goswami-air-1271.jpg", category: "JEE Advanced" },
    { name: "Pobitra Karmakar", air: 1631, image: "/results/pobitra-karmakar-air-1631.jpg", category: "JEE Advanced" },
    { name: "Pramit Kr. Chandra", air: 2018, image: "/results/pramit-kr.-chandra-air-2018.jpg", category: "JEE Advanced" },
    { name: "Abhinav Dutta", air: 2312, image: "/results/abhinav-dutta-air-2312.jpg", category: "JEE Advanced" },
  ],
  "2018": [
    { name: "Avinandan Bose", air: 104, image: "/results/avinandan-bose-air-104.jpg", category: "JEE Advanced" },
    { name: "Saswata Banerjee", air: 535, image: "/results/saswata-banerjee-air-535.jpg", category: "JEE Advanced" },
    { name: "Sagnik Roy", air: 567, image: "/results/sagnik-roy-air-567.jpg", category: "JEE Advanced" },
  ],
};

export const resultYears = Object.keys(resultsByYear).sort((a, b) => Number(b) - Number(a));

export const totalSelections = Object.values(resultsByYear).reduce((sum, arr) => sum + arr.length, 0);

export const bestAIR = Math.min(
  ...Object.values(resultsByYear).flatMap((arr) => arr.map((r) => r.air))
);
