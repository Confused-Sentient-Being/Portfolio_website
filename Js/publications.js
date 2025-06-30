const modal = document.getElementById("publicationModal");
const closeBtn = document.querySelector(".close");

const modalTitle = document.getElementById("modalTitle");
const modalAuthors = document.getElementById("modalAuthors");
const modalJournal = document.getElementById("modalJournal");
const modalAbstract = document.getElementById("modalAbstract");
const modalKeywords = document.getElementById("modalKeywords");

// Define publications data
const publications = [
  {
    title: `Grid-forming Inverter Implementation using Arty A7 100T: A FIL for Microgrid Analysisrid-forming Inverter Implementation 
    using Arty A7 100T`,
    authors: "Ojasvi Sanjay Sonone, Amey Sushil Chavekar, Parthsarthi Goyanka, Sunny Kumar",
    journal: "IEEE PESGM 2025, 27-31 July 2025 in Austin, Texas, JW Marriott",
    abstract: `This paper explores the FPGA-The continuous efforts in the development of the green energy options has resulted 
    in the inverter rich grid, operating either in grid-following mode (GFL) or independent grid-forming (GFM) modes. As the 
    traditional power grid already operates on various time scales from a few seconds to minutes for various controls such as exciter, 
    turbine and prime-mover, etc, the introduction of power electronics devices in operation of microgrid has resulted in fast dynamics
    and responses. In such circumstances having a reliable simulation platform becomes  essential for design, testing, and validation 
    of microgrids operation. Though, various Software-In-The-Loop (SIL) as well as Hardware-In-The-Loop (HIL) methodologies  are 
    already reported in the literature, SIL gets constrained in capturing the complexities of real time hardware behavior, while HIL 
    is the costly solution. In view of this, as a trade-off between SIL and HIL, the paper proposes a FPGA-in-the-loop (FIL) using 
    Arty A7 100T FPGA board, which would be more compact and portable setup for real-time testing and validation. In order to 
    synthesize microgrid on Field Programmable Gate Array (FPGA), the microgrid simulation model is modified for HDL support in 
    MATLAB Simulink. A FIL-based model is then created using the HDL toolset in order to validate inverter subsystem for microgrid 
    simulation and analysis. The software simulation results and FIL-based results shows close mapping confirming the validation of 
    grid analysis using FIL. The noteworthy contribution of the FIL is that, it is close to real-time like HIL or actual hardware 
    setup but excluding the requirements of power rating components for the setup making it cost effective as compared to costly HIL 
    without compromising the real-time analysis requirements.`,
    keywords: "ARTY A7 100T, Bitsream, FIL, FIL-Wizard, FPGA, HDL, HDL verifier, MATLAB, Simulink, Xilinx Vivado"
  },
  {
    title: "RT FIL Analysis for Inverter Integrated Microgrid using ARTY A7 100T",
    authors: "Ojasvi Sanjay Sonone, Amey Sushil Chavekar, Sunny Kumar, Sushama Wagh",
    journal: "IEMTRONICS 2025, Imperial College London, UK",
    abstract: `The energy consumption and economic growth of a country go hand in hand; hence, to uplift the living standards, 
    every remote location should be powered by necessary energy. However, to fulfil high demands with traditional sources may 
    defeat the ongoing efforts of a zero carbon emission plan which aims to eliminate greenhouse gas emissions by heavily relying 
    on renewable energy sources (RES) like solar, wind, hydro, geothermal, and biomass. To facilitate the seamless connection of 
    RES and energy storage systems with the main grid, converters play an important role. However, this integration introduces many 
    challenges, such as low inertia of electromechanical devices, switching transients, harmonics, and mismatched time frames of 
    different events. To analyse such hybrid grids, there are many attempts in literature using simulation-in-loop or hardware-in-loop 
    as two extreme end methods, resulting in either theoretical solution away from reality or real-time simulation using hardware but 
    having laboratory operating constraints. In view of this, the paper proposes a trade-off approach by formulating and validating the 
    model using Field Programming Gate Array (FPGA). The research also highlights how Simulink offers ease in methodology to perform 
    testing of power electronics devices using the FPGA-in-the-Loop (FIL). This papers utilizing ARTY A7 100T as the target FPGA board; 
    the papers also shows quantitative analysis of resource utilization of FPGA during the inverter testing.`,
    keywords: "FPGA, FIL, ARTY A7 100T, Inverter, MATLAB/Simulink, Resouce utilization matrix."
  }
];

// Bind click events to cards
document.querySelectorAll(".publication-card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const pub = publications[index];
    modalTitle.textContent = pub.title;
    modalAuthors.textContent = pub.authors;
    modalJournal.textContent = pub.journal;
    modalAbstract.textContent = pub.abstract;
    modalKeywords.textContent = pub.keywords;
    modal.style.display = "block";
  });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};