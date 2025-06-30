const modal = document.getElementById("projectModal");
const subModal = document.getElementById("subModal");
const modalTitle = document.getElementById("modalTitle");
const subprojectContainer = document.getElementById("subprojectContainer");
const subTitle = document.getElementById("subTitle");
const subImage = document.getElementById("subImage");
const subDescription = document.getElementById("subDescription");
const span = document.getElementsByClassName("close")[0];
const subClose = document.getElementsByClassName("sub-close")[0];

const projects = [
  {
    title: "Microgrid-FPAG-MATLAB based projects.",
    subprojects: [
      {
        title: "FIL implementation of block based inverter model.",
        img: "../images/fil1_3.png",
        description: "AI-driven pressure-sensitive grip for soft and hard objects."
      },
      {
        title: "Mathematical model of inverter FIL implementation",
        img: "../images/project1.jpg",
        description: "Dynamic planner that ensures collision-free movements."
      },
      {
        title: "Combined SST FIL implementation",
        img: "../images/project1.jpg",
        description: "Dynamic planner that ensures collision-free movements."
      }
    ]
  },
  {
    title: "Robotic Arm",
    subprojects: [
      {
        title: "Environmental Node",
        img: "../images/project2.jpg",
        description: "Monitors humidity, temperature, and gas with ESP-NOW reporting."
      },
      {
        title: "Central Aggregator",
        img: "../images/project2.jpg",
        description: "Gateway to collect and visualize factory-wide sensor data."
      }
    ]
  },
  {
    title: "Bionic Exosuit Prototype",
    subprojects: [
      {
        title: "Hip-Assist Module",
        img: "../images/project2.png",
        description: "Supports hip movement using torque-controlled joints."
      },
      {
        title: "EMG Signal Interpreter",
        img: "../images/project2.png",
        description: "Decodes muscle signals for real-time motion control."
      }
    ]
  }
];

document.querySelectorAll(".project-card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const project = projects[index];
    modalTitle.textContent = project.title;
    subprojectContainer.innerHTML = "";

    project.subprojects.forEach(sub => {
      const div = document.createElement("div");
      div.classList.add("subproject-card");
      div.innerHTML = `<h4>${sub.title}</h4>`;
      div.onclick = () => {
        subTitle.textContent = sub.title;
        subImage.src = sub.img;
        subDescription.textContent = sub.description;
        subModal.style.display = "block";
      };
      subprojectContainer.appendChild(div);
    });

    modal.style.display = "block";
  });
});

span.onclick = () => modal.style.display = "none";
subClose.onclick = () => subModal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
  if (e.target === subModal) subModal.style.display = "none";
};
