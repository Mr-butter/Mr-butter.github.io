import React from "react";
import { projectsImage } from "../utils/projectImage";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      projectName: "Creverse",
      projectDesc: "크리에이터를위한 메타버스 생태계 구축",
      detail: "https://holly-plastic-f70.notion.site/Creverse-7b6e41fedc9940afa89d3c27852622d2",
      image: "creverse",
    },
    {
      id: 2,
      projectName: "Blockchain db",
      projectDesc: "블록체인기술을 사용한 자료의 위변조 검증 시스템 프로토타입 개발",
      detail: "https://holly-plastic-f70.notion.site/Blockdb-e1c317b9da124ef88686d79f49d2ec6b",
      image: "blockdb",
    },
    {
      id: 3,
      projectName: "Market Proto",
      projectDesc: "중고물품 거래 플랫폼 개발(해외)",
      detail: "https://holly-plastic-f70.notion.site/Market-Proto-60a394f1e9ac40febf13762f848a98ec",
      image: "marketproto",
    },
    {
      id: 4,
      projectName: "handypick",
      projectDesc: "실시간 데이터를 활용한 예측 컨텐츠 개발 및 출시",
      detail: "https://holly-plastic-f70.notion.site/22184fc22d9744fc8f438ddf5475c648",
      image: "handypick",
    },
    {
      id: 5,
      projectName: "KOP",
      projectDesc: "특정 NFT홀더들만 참여할수 있는 배틀시스템 개발",
      detail: "https://holly-plastic-f70.notion.site/King-Of-Planets-34950756cffa48da92f2c469d0706447",
      image: "kingofplanets",
    },
    {
      id: 6,
      projectName: "Naming Center NFT",
      projectDesc:
        "ACTS29 기업 협업 프로젝트\nBinance Smart Chain 기반의 특정 NFT 홀더들만 참여할 수 있는 게임 플랫폼 개발, 게임 참여자들이 Token을 보상으로 얻을 수 있는 시스템 구현 (P2E)",
      detail: "https://holly-plastic-f70.notion.site/BlockChainProject2-a1b2941765c84831bd9b5167f0b0eade",
      image: "blockchain2",
    },
    {
      id: 7,
      projectName: "Co-Link",
      projectDesc: "블록체인 개념를 이해하고 적용해보기 위한 마이닝 사이트",
      detail: "https://holly-plastic-f70.notion.site/BlockChainProject1-8dd38dad50e540efa59346709f2f9ca5",
      image: "blockchain",
    },
    {
      id: 8,
      projectName: "In To The Mountain",
      projectDesc: "어른들의 여가 생활로만 생각했던 등산이 젊은 세대들의 관심이 높아짐에 따라 어른들의 이미지를 탈피한 사이트를 제작하고자 함.",
      detail: "https://holly-plastic-f70.notion.site/In-To-The-Mountain-16650141bc92465dbfc2915fdee791ef",
      image: "mountain",
    },
    {
      id: 9,
      projectName: "말랑 아트갤러리",
      projectDesc: "코로나 시국에 방문이 어려운 오프라인 갤러리를 온라인을 통해 만나보실 수 있습니다. 작가와, 관객 모두가 함께하는 온라인 전시관.",
      detail: "https://holly-plastic-f70.notion.site/Mallang-Art-Gallery-51b57c6f572f47028f9ec28eafb66dcf",
      image: "mallang",
    },
  ];

  return (
    <div id="projects">
      <div className="container-fluid text-center">
        <div className="text-center my-5">
          <h2 className="display-3 fw-bold">Projects</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 m-auto mt-5">
          {projectsData.map((project, id) => (
            <div class="card p-0" key={id}>
              <img src={projectsImage(project.image)} class="card-img-top object-fit-cover w-100" style={{ height: "50vh" }} alt="..." />
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 class="card-title">{project.projectName}</h5>
                  <p class="card-text">{project.projectDesc}</p>
                </div>
                <a href={project.detail} target="_blank" class="btn btn-primary mt-2">
                  Detail
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
