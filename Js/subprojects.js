const subprojectModal = document.getElementById("subprojectModal");
const detailModal = document.getElementById("detailModal");
const modalSubTitle = document.getElementById("modalSubTitle");
const subsubprojectGrid = document.getElementById("subsubprojectGrid");
const detailTitle = document.getElementById("detailTitle");
const slider = document.getElementById("imageSlider");
const sliderImg = slider.querySelector(".slider-img");
const prevBtn = slider.querySelector(".prev");
const nextBtn = slider.querySelector(".next");
const detailDescription = document.getElementById("detailDescription");

const closeModal = document.querySelector(".close");
const closeDetail = document.querySelector(".sub-close");

const projects = [
  // Project 1: Flat structure
  {
    title: "Microgrid-FPAG-MATLAB based projects",
    type: "flat",
    subprojects: [
      {
        title: "FIL implementation of block based inverter model.",
        images: [
            "../images/fil1_1.jpg",
            "../images/fil1_2.png",
            "../images/fil1_3.png",
            "../images/fil1_4.jpg",
            "../images/fil1_5.png",
            "../images/fil1_6.png",
            "../images/fil1_7.png"
            ],
            description: `<p>The 3bus microgrid model was considered as the case study for this project. A three-phase grid forming 
            inverter is connected to bus1 which has transmission lines connecting bus 2 and 3 to it. Bus 2 is assumed to be connected
            to the larger grid system with the 1pu voltage. There is a sudden surge in load of 1 kW in the microgrid system causing 
            disturbance at bus3. The effect of this load change on the microgrid system is observed by measuring the voltages and 
            currents at different buses in the microgrid system. The inverter from the microgrid system is isolated and implemented in 
            the FPGA-in-the-loop (FIL) workflow on the Arty A7 100T FPGA development board, while still being connected to the 
            microgrid which implemented and executed in the host PC. This is achieved by the FIL block which is the representation 
            of the FIL-implemented-inverter in the simulation. The original model of the block-based grid connected inverter from 
            Simulink is also provided the same inputs as the FIL implemented inverter and is compared to it by observing both of the 
            inverters’ outputs during the event of load surge. </p>

            <p>However, before the FIL conversion, the inverter is made to be HDL (Hardware Description Language) and FIL compatible. 
            This procedure includes converting the model to be in the discrete time domain if it is in the continuous form, for which 
            an appropriate sampling time needs to be determined. The data floating type data is not directly compatible for hardware 
            implementation so the conversion of all the data into fixed point data type is carried out using the fixed-point tool 
            provided by MATLAB. Once the model is ready for FIL implementation, the entire process of FIL is executed using the HDL 
            workflow advisor tool provided in MATLAB which provided the FIL block for inverter model.</p>
            
            <p>While creating the FIL block, a validation model is also designed to test the effectiveness of the FIL methodology. 
            A real-time FIL analysis is performed on the FPGA-based inverter connected to a microgrid, running alongside its original 
            continuous-time model. The output voltages from both inverters are then compared. It is observed that the voltage output of 
            a model designed in the Simulink has a higher peak and longer settling time as compared to the Fil inverter. This happens 
            because of discretization continuous model.</p>`
      },
      {
        title: "Mathematical model of inverter FIL implementation",
        images: [
          "../images/fil2_1.png",
          "../images/fil2_2.png",
          "../images/fil2_3.png",
          "../images/fil2_4.png",
          "../images/fil2_5.png",
          "../images/fil2_6.png",    
          "../images/fil2_7.png"],
        description:  `<p>Mathematical modeling of inverters is essential for understanding and analyzing their 
         dynamic behavior in power systems, especially with the increasing integration of renewable energy sources. 
         Unlike static models, dynamic models allow for the inclusion of various parameters and their interdependencies, 
         providing a more accurate and flexible representation. This is critical for designing reliable control strategies, 
         ensuring grid stability, and optimizing performance under varying conditions. Additionally, mathematical models support 
         advanced simulation methods like Software-in-the-Loop (SIL), Hardware-in-the-Loop (HIL), and FPGA-in-the-Loop (FIL), 
         allowing comprehensive testing and validation of inverter systems without the need for extensive physical setups, reducing 
         cost and complexity.</p>

         <p>FIL (FPGA-in-the-Loop) implementation of the inverter’s mathematical model enables real-time testing with high 
         accuracy and low latency, simulating hardware behavior without bulky setups. It offers a cost-effective, efficient 
         platform to validate dynamic performance, control strategies, and system interactions, bridging the gap between software 
         simulations and actual hardware deployment.Further procedure is same as the FIL implementation of block based inverter model.</p>`

      },
      {
        title: "Combined SST FIL implementation",
        images: [
          "../images/fil3_1.png",
          "../images/fil3_2.png",
          "../images/fil3_3.png",
          "../images/fil3_4.png",
          "../images/fil3_5.png",
          "../images/fil3_6.png",    
          "../images/fil3_7.png"],
        description: `<p>Solid-State Transformers (SSTs) are vital for modern power systems, offering advanced functionalities 
         such as voltage regulation, power quality improvement, and bidirectional power flow. A typical SST consists of three stages: 
         an AC-DC rectifier, a high-frequency DC-DC isolation stage, and a DC-AC inverter. This architecture enables compact,
         efficient, and fully controllable energy conversion. SSTs play a key role in integrating renewable energy sources, 
         enhancing grid stability, and enabling flexible, decentralized power distribution in smart grids.</p>

         <p>The modelling, testing and validation of SST is pivotal before its integration into the grid. Before the hardware 
         implementation of the three stage SST is performed, the mathematical model of the three stage SST is implemented into FPGA 
         to test its hardware compatibility and response analysis is performed for the validation of the mathematical model using 
         FPGA-in-the-loop. The model is discretised and assigned appropriate sampling time along with fixed point data type to make 
         model HDL compatible. Implementation of fixed point has many challenges. Finding the appropriate range to cover all the 
         dynamics of the system, while also considering the hardware limitations is a Herculean task. Once HDL compatible, it can be 
         validated by implementing the model into FIL with Simulink. </p>`
      }
    ]
  },

  // Project 2: Flat structure placeholder
  {
    title: "Robotic Arm",
    type: "flat",
    subprojects: [
      {
        title: "13 DOF Robotic Arm.",
        images: ["../images/project2.png"],
        description: `<p>The following project represents the realtime communication between software and hardware. 
          Hardware consists  of 6 degrees  of freedom (dof) small size robotic gripper arm. The arm has two DS3225MG digital 
          servo (25kg-cm torque) supporting the two axes at the base. The end grip, wrist rotation and up-down movement are 
          facilitated by three MG90S mini digital servo (2kg-cm torque). Remaining axes consist of MG996 digital servo (10kg-cm torque).</p>

          <p>Instead of focusing on enhancing speed, stability or automatic arm control the project enables the control of the 
          robotic arm using Hardware-In-The-Loop through Blender software. The robotic arm design in hardware is exactly replicated 
          in blender software through USB protocol. Inverse kinematics is introduced into the software replica of the robotic arm 
          through the tools provided in Blender. The hardware servos actuators are calibrated to that of the software robotic arm joints. This setup enables the user to control the robotic arm using the Blender software. We can record some movements, replay them, and take feedback from the hardware back to the software. The future scope will include the implementation of ROS and other sensors.  
          This method is very useful for robotic application where repeated functions are prominent also to program any robotic hardware without 
          hardcoding the entire thing.</p>`
        
      }
    ]
  },

  // Project 3: Nested structure
  {
    title: "Bionic Exosuit Prototype",
    type: "nested",
    subprojects: [
      {
        title: "Exosceleton for input mechanism.",
        image: "../images/project2.png",
        subsub: [
          {
            title: "Head/ Neck",
            images: ["../images/project2.png"],
            description: `<p>Human head moments are very tough to capture, as it has 5 degrees of freedom. Out of which, 
          3 movements are from around the same centre, i.e., for the average person, Head up-down movement with span of 
          110 degree, Head left-right movement with span of 160 degree, Head tilt left-right movement with span of 90 degree. 
          and two extra movements are neck movement i.e. Left-right slide and neck extension. For current exoskeleton we have 
          considered only three head movements which exclude neck movement. To capture these movements, half circled PVC assembly 
          is connected to the back of the head. From that point the suspension mechanism is connected to the lower back which avoids 
          the constraint for natural movement of the spine of the human body and also avoids error caused in the sensor due to movement
          of other body parts. Mechanical assembly is able to capture all three-axial movements in the head.</p>`
          },
          {
          title: "Jaw",
          images: ["../images/exo1.jpg"],
          description: `<p>For the human jaw a unique mechanism is developed. Jaw movement has 3 dimensions which are biting, 
          chewing (jaw left-right and jaw extension). At primary state, we are able to replicate biting movement by capturing the 
          jaw movement of humans by placing a specialised gear mechanism made out of sensor, metal wire and PVC, on a jaw. This jaw 
          movement capturing mechanism is mounted on the head movement capturing mechanism. </p>`
        },
        {
          title: "Elbow",
          images: ["../images/exo1.jpg"],
          description: `<p>The elbow joint is quite simple to replicate as it has a single dimension. The PVC mechanism is 
          attached to the bicep and forearm to capture elbow movement. Elastic is attached to the mechanism as a holding to 
          compensate for the expansion of  biceps as the angle of the elbow becomes more acute. </p>`
        },
        {
          title: "Forearm",
          images: ["../images/exo1.jpg"],
          description: `<p>It seems easy to capture the rotation of the forearm as the rotation is of one dimension. 
          This rotation of the forearm can be differently interpreted as wrist rotation wrt elbow frame. However, its 
          implementation is still difficult. It consists of a two dimensional joint to capture a single dimensional movement 
          as the sensor is attached to the wrist movement-capturing mechanism and the reference frame is  the elbow joint.  </p>`
        },
        {
          title: "Wrist",
          images: ["../images/exo1.jpg"],
          description: `<p>The wrist joint is tricky as it has two dof centered at the same point. The arrangement of two 
          sensors is made in such a way that they do not interface with each other's movement and are able to capture two axial 
          movements with perfect accuracy. </p>`
        }
        ]
      },
    {
      title: "Output mechanism.",
      image: "../images/exo1.jpg",
      subsub: [
        {
          title: "Head/ Neck",
          images: ["../images/exo1.jpg"],
          description: `<p>.................</p>`
        },
        {
          title: "Jaw",
          images: ["../images/exo1.jpg"],
          description: `<p>>.................... </p>`
        },
        {
          title: "Elbow",
          images: ["../images/exo1.jpg"],
          description: `<p>>.................... </p>`
        },
        {
          title: "Forearm",
          images: ["../images/exo1.jpg"],
          description: `<p>>....................  </p>`
        },
        {
          title: "Wrist",
          images: ["../images/exo1.jpg"],
          description: `<p>.................... </p>`
        },
        {
          title: "Eye",
          images: ["../images/exo1.jpg"],
          description: `<p>The human eye and its movements are a wonder in themselves. To replicate the look of an 
          eyeball we have used white ping pong ball and for pupils the printed human pupil is stuck to the ball. To add a 
          translucent and glossy effect on the eye, transparent nail polish is applied on the eyeball. To add a realistic 
          human eye effect, red threads are added to the lower part of the eyeball using nail paint which replicates a realistic 
          red vein effect on the eye </p>
          <p>Then at the edge of the eyeball two joints are such a way that the eyeball can move left, right and up 
          down with the corresponding servo motor. </p>`
        }
      ]
    },
    {
      title: "Control and power supply.",
      image: "../images/exo1.jpg",
      subsub: [
        {
          title: "Control circuit.",
          images: ["../images/exo1.jpg"],
          description: `<p>..............</p>`
        },
        {
          title: "Power supply",
          images: ["../images/exo1.jpg"],
          description: `<p>................... </p>`
        }
      ]
    }
    ]
  }
];

// Get project index from URL
const params = new URLSearchParams(window.location.search);
const projectIndex = parseInt(params.get("project")) || 0;
const selectedProject = projects[projectIndex];
const subprojectGrid = document.getElementById("subprojectGrid");

// Render logic
if (selectedProject.type === "flat") {
  selectedProject.subprojects.forEach((sub, idx) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <img src="${sub.images[0]}" alt="${sub.title}">
      <div class="project-details">
        <h3>${sub.title}</h3>
        <p>Click to view details</p>
      </div>
    `;
    card.onclick = () => {
      detailTitle.textContent = sub.title;
      let currentSlide = 0;
      sliderImg.src = sub.images[0];
      slider.style.display = sub.images.length > 1 ? "block" : "none";

      prevBtn.onclick = () => {
        currentSlide = (currentSlide - 1 + sub.images.length) % sub.images.length;
        sliderImg.src = sub.images[currentSlide];
      };

      nextBtn.onclick = () => {
        currentSlide = (currentSlide + 1) % sub.images.length;
        sliderImg.src = sub.images[currentSlide];
      };

      detailDescription.innerHTML = sub.description;
      detailModal.style.display = "block";
    };
    subprojectGrid.appendChild(card);
  });
} else if (selectedProject.type === "nested") {
  selectedProject.subprojects.forEach((sub, idx) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <img src="${sub.image}" alt="${sub.title}">
      <div class="project-details">
        <h3>${sub.title}</h3>
        <p>Click to explore modules</p>
      </div>
    `;
    card.onclick = () => {
      modalSubTitle.textContent = sub.title;
      subsubprojectGrid.innerHTML = "";

      sub.subsub.forEach(subsub => {
        const block = document.createElement("div");
        block.classList.add("subproject-card");
        block.innerHTML = `<h4>${subsub.title}</h4>`;
        block.onclick = () => {
          detailTitle.textContent = subsub.title;
          let currentSlide = 0;
          sliderImg.src = subsub.images[0];
          slider.style.display = subsub.images.length > 1 ? "block" : "none";

          prevBtn.onclick = () => {
            currentSlide = (currentSlide - 1 + subsub.images.length) % subsub.images.length;
            sliderImg.src = subsub.images[currentSlide];
          };

          nextBtn.onclick = () => {
            currentSlide = (currentSlide + 1) % subsub.images.length;
            sliderImg.src = subsub.images[currentSlide];
          };

          detailDescription.innerHTML = subsub.description;
          detailModal.style.display = "block";
        };
        subsubprojectGrid.appendChild(block);
      });

      subprojectModal.style.display = "block";
    };
    subprojectGrid.appendChild(card);
  });
}

// Modal close handlers
closeModal.onclick = () => subprojectModal.style.display = "none";
closeDetail.onclick = () => detailModal.style.display = "none";
window.onclick = (e) => {
  if (e.target === subprojectModal) subprojectModal.style.display = "none";
  if (e.target === detailModal) detailModal.style.display = "none";
};
