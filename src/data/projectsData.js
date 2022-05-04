import mallang from "../assets/svg/projects/mallang.png";
import mountain from "../assets/svg/projects/mountain.png";
import blockchain from "../assets/svg/projects/blockchain.png";
import blockchain2 from "../assets/svg/projects/blockchain2.png";

export const projectsData = [
  {
    id: 1,
    projectName: "말랑 아트갤러리",
    projectDesc:
      "코로나 시국에 방문이 어려운 오프라인 갤러리를 온라인을 통해 만나보실 수 있습니다. 작가와, 관객 모두가 함께하는 온라인 전시관.",
    tags: ["HTML", "CSS", "Javascript", "jQuery"],
    code: "https://github.com/Mr-butter/mallang-art-gallery",
    demo: "https://holly-plastic-f70.notion.site/Mallang-Art-Gallery-51b57c6f572f47028f9ec28eafb66dcf",
    image: mallang,
  },
  {
    id: 2,
    projectName: "In To The Mountain",
    projectDesc:
      "어른들의 여가 생활로만 생각했던 등산이 젊은 세대들의 관심이 높아짐에 따라 어른들의 이미지를 탈피한 사이트를 제작하고자 함.",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "jQuery",
      "Mysql",
      "Open API",
    ],
    code: "https://github.com/Mr-butter/mountain",
    demo: "https://holly-plastic-f70.notion.site/In-To-The-Mountain-16650141bc92465dbfc2915fdee791ef",
    image: mountain,
  },
  {
    id: 3,
    projectName: "BlockChainProject",
    projectDesc: "블록체인 개념를 이해하고 적용해보기 위한 마이닝 사이트",
    tags: [
      "Ubuntu",
      "NodeJS",
      "React",
      "Redux",
      "MariaDB",
      "WebSoket",
      "BlockChain",
      "Ethereum",
    ],
    code: "https://github.com/Mr-butter/BlockChainProject1",
    demo: "https://holly-plastic-f70.notion.site/BlockChainProject1-8dd38dad50e540efa59346709f2f9ca5",
    image: blockchain,
  },
  {
    id: 4,
    projectName: "BlockChainProject2",
    projectDesc:
      "ACTS29 기업 협업 프로젝트\nBinance Smart Chain 기반의 특정 NFT 홀더들만 참여할 수 있는 게임 플랫폼 개발, 게임 참여자들이 Token을 보상으로 얻을 수 있는 시스템 구현 (P2E)",
    tags: [
      "Solidity",
      "NodeJS",
      "React",
      "Redux",
      "Mysql",
      "Web3",
      "Metamask",
      "Ethereum",
    ],
    code: "https://github.com/NamingCenter/play-to-earn",
    demo: "https://holly-plastic-f70.notion.site/BlockChainProject2-a1b2941765c84831bd9b5167f0b0eade",
    image: blockchain2,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
