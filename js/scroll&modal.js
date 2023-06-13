
// scroll

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


// modal
const modalContainer = document.getElementById("modal-skills-container");
const modal = document.getElementById("modal-skills");
const svgPJ = document.getElementById("svgPJ");
const body = document.querySelector(".body");

// Closing the modal
const closeIcon = document.querySelector(".close-icon");

// icons selection
const html = document.querySelectorAll("#html");
const css = document.querySelectorAll("#css");
const js = document.querySelectorAll("#js");
const python = document.querySelectorAll("#python");
const react = document.querySelectorAll("#react");
const electron = document.querySelectorAll("#electron");
const bootstrap = document.querySelectorAll("#boots");
const tailwind = document.querySelectorAll("#tail");
const node = document.querySelectorAll("#node");
const flask = document.querySelectorAll("#flask");
const mongo = document.querySelectorAll("#mongo");
const sqlite = document.querySelectorAll("#sqlite");
const ps = document.querySelectorAll("#ps");
const ai = document.querySelectorAll("#ai");
const figma = document.querySelectorAll("#figma");
const blender = document.querySelectorAll("#blender");
const fl = document.querySelectorAll("#fl");
const sony = document.querySelectorAll("#sony");
const git = document.querySelectorAll("#git");
const github = document.querySelectorAll("#github");


// Windows
const modalIcon = document.querySelector(".icon-selected");
const modalTitle = document.querySelector(".icon-title");
const modalDefinition = document.querySelector(".icon-definition");

// Selection function

const skills = [
  {
    id: "html",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508024/portfolio/img/html_kohyuc.png",
    definition:
      "The standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: "css",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508018/portfolio/img/css_yahnkc.png",
    definition:
      "CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc. It's the lenguage that brings the beauty to a website!",
  },
  {
    id: "js",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508033/portfolio/img/js_jhb41u.png",
    definition:
      "A scripting or programming language that allows you to implement complex features on web pages",
  },
  {
    id: "python",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508076/portfolio/img/python_wmge7b.png",
    definition:
      "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. His syntax it's beautiful, I'm still learning about it!",
  },
  {
    id: "react",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508066/portfolio/img/react_dih9qy.png",
    definition:
      "THE JavaScript library for building user interfaces. I'm recently learned it and get hooked automatically. It helps to make fluent and aesthetic applications.",
  },
  {
    id: "electron",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508020/portfolio/img/electron_nmvzs9.png",
    definition:
      "Framework that I used to make desktop apps with javascript. It's pretty awesome to see that something that works on a web can work on your desktop too.",
  },
  {
    id: "boots",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508019/portfolio/img/bootstrap_rc78ld.png",
    definition:
      "Aesthetic framework that simplifies the work on  the style of a webpage through css preformed classes.",
  },
  {
    id: "tail",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508059/portfolio/img/tailwind_lfpvpl.png",
    definition:
      "A more simplified (and clean) aesthetic framework. The heir of bootstrap, soon to detroned it.",
  },
  {
    id: "node",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508027/portfolio/img/node_wygbrz.png",
    definition:
      "Enviroment that allows you to use javascript on the backend processes. This, complemented with the previous ones and the databases, make the idea of the 'full-stack web developer'. His framework, express, allows me to work on routes.",
  },
  {
    id: "flask",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508024/portfolio/img/flask_w3frcr.png",
    definition:
      "What node it's to javascript, Flask it's to Python. The same logic only that it's applied to the Python web enviroment.",
  },
  {
    id: "mongo",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508042/portfolio/img/mongo_j8tk91.png",
    definition:
      "Where do we've been if it's not for the databases? MongoDb offers a simple and efective database service with bson logic. It's a NoSQL database.",
  },
  {
    id: "sql",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508056/portfolio/img/sqlite_vvxgby.png",
    definition:
      "A SQL database based on a lightform of MySQL. I implemented this in combination with Python and Flask, to have another workflow with a Python enviroment different (in the syntax and posibilities) from the MERN stack. (Mongo, Express, React, NodeJs).",
  },
  {
    id: "ps",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508051/portfolio/img/ps_nyqq39.png",
    definition:
      "The famous (and infamous) photo&images editor. It helps me to build the webpages through the modification of the images and icons that I need.",
  },
  {
    id: "ai",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508017/portfolio/img/ai_bhpofq.png",
    definition:
      "My most precious tool: the vectorial-graphic design. Different from photoshop, It allows me to create simple and aesthetic graphics that wouldn't break because of size. And, also, helps to make the UI/UX side of the job.",
  },
  {
    id: "figma",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508022/portfolio/img/figma_ckils6.png",
    definition:
      "A prototype-oriented web app that helps to share and collaborate on the UI/UX.",
  },
  {
    id: "blender",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508016/portfolio/img/blender_hz1dyd.png",
    definition:
      "I'm new on this but I'm getting the results that I want. A beautiful free-source app that allows you to make 3D designs. It's hard but the results are amazing.",
  },
  {
    id: "fl",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508027/portfolio/img/fl_h8sady.png",
    definition:
      "An audio editor and music production enviroment. I put it in here because there was times that I have to faced the urges to make an edit for an audio to be put it in a project.",
  },
  {
    id: "sony",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508069/portfolio/img/sony_pj8rbt.png",
    definition:
      "Same as before but with video. I'm currently learning Adobe Premiere but I get very experienced in the edit with Sony Vegas.",
  },
  {
    id: "git",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508020/portfolio/img/git_jsthtg.png",
    definition:
      "Version control system. It allows you to work in a project without the worries of broken the code because you can always go back to a previous version and continuing from there.",
  },
  {
    id: "github",
    icon: "https://res.cloudinary.com/dhbvri4ni/image/upload/v1677508023/portfolio/img/github_jqf24c.png",
    definition:
      "Our space as programmers. It's a community that helps us to share code and had our projects storaged in a cloud service through repositories.  ",
  },
];

const renderInfo = (id, name) => {
  const element = id;

  for (i = 0; i < element.length; i++) {
  
    element[i].addEventListener("click", () => {
      modalContainer.classList.toggle("active");
      modal.classList.toggle("active");
      svgPJ.classList.toggle("active");
      body.style.overflow = "hidden";
  
      skills.filter((skill) => {
        if (skill.id == name) {
          const skillId = skill.id;
          const skillIcon = skill.icon;
          const skillDefinition = skill.definition;
  
          modalIcon.src = skillIcon;
          modalDefinition.innerHTML = skillDefinition;
        }
      });
    });
  }


  closeIcon.addEventListener("click", () => {
    modalContainer.classList.remove("active");
    modal.classList.remove("active");
    svgPJ.classList.remove("active");
    body.style.overflow = "visible";
  });

  window.addEventListener("keydown", (e) => {
    if (e.keyCode == "27") {
      modalContainer.classList.remove("active");
      modal.classList.remove("active");
      svgPJ.classList.remove("active");
      body.style.overflow = "visible";
    }
  });
};

renderInfo(html, "html")
renderInfo(css, "css");
renderInfo(js, "js");
renderInfo(python, "python");
renderInfo(react, "react");
renderInfo(electron, "electron");
renderInfo(bootstrap, "boots");
renderInfo(tailwind, "tail");
renderInfo(node, "node");
renderInfo(flask, "flask");
renderInfo(mongo, "mongo");
renderInfo(sqlite, "sql");
renderInfo(ps, "ps");
renderInfo(ai, "ai");
renderInfo(figma, "figma");
renderInfo(blender, "blender");
renderInfo(fl, "fl");
renderInfo(sony, "sony");
renderInfo(git, "git");
renderInfo(github, "github");


// See more 

// let counter = 1; 
// setInterval(function() {
//     document.getElementById('radio' + counter).checked = true; 
//     counter++; 
//     if(counter >= 20) {
//         counter = 1; 
//     }
// }, 1000)