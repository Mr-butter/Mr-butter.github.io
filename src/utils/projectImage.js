import mallang from "../assets/img/projects/mallang.png";
import mountain from "../assets/img/projects/mountain.png";
import blockchain from "../assets/img/projects/blockchain.png";
import blockchain2 from "../assets/img/projects/blockchain2.png";
import handypick from "../assets/img/projects/handypick.png";
import blockdb from "../assets/img/projects/blockdb.png";
import creverse from "../assets/img/projects/creverse.png";
import kingofplanets from "../assets/img/projects/kingofplanets.png";
import marketproto from "../assets/img/projects/marketproto.png";
import superbooster from "../assets/img/projects/superbooster.jpg";
import artmuse from "../assets/img/projects/artmuse.jpg";

export const projectsImage = (project) => {
  const projectId = project.toLowerCase();
  switch (projectId) {
    case "mallang":
      return mallang;
    case "mountain":
      return mountain;
    case "blockchain":
      return blockchain;
    case "blockchain2":
      return blockchain2;
    case "handypick":
      return handypick;
    case "blockdb":
      return blockdb;
    case "creverse":
      return creverse;
    case "kingofplanets":
      return kingofplanets;
    case "marketproto":
      return marketproto;
    case "superbooster":
      return superbooster;
    case "artmuse":
      return artmuse;
    default:
      break;
  }
};
