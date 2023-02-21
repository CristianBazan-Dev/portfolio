const button = document.getElementById("resumeButton");

button.addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1bdW1QMrlfvrakZ4P2VqP29FBVexGGrLH/view?usp=share_link"
  );
});

const button1 = document.getElementById("btn-demo-1");
const button2 = document.getElementById("btn-demo-2");
const button3 = document.getElementById("btn-demo-3");
const button4 = document.getElementById("btn-demo-4");
const button5 = document.getElementById("btn-demo-5");
const button6 = document.getElementById("btn-demo-6");

const buttongh = document.getElementById("btn-gh-1");
const buttongh2 = document.getElementById("btn-gh-2");
const buttongh3 = document.getElementById("btn-gh-3");
const buttongh4 = document.getElementById("btn-gh-4");
const buttongh5 = document.getElementById("btn-gh-5");
const buttongh6 = document.getElementById("btn-gh-6");

const redirectButtons = (id, link1, gh, link2) => {
  id.addEventListener("click", () => {
    window.open(link1);
  });

  gh.addEventListener('click', () => {
    window.open(link2)
  })


};

redirectButtons(button1,"https://drive.google.com/file/d/1VOZ9I-Nn15rM9-uZdSbEF364KLbd3QS2/view?usp=share_link",buttongh, "https://github.com/CristianBazan-dev/La-esquina-glupis"
);

redirectButtons(button2, "https://drive.google.com/file/d/1NSSAU8esZt68oSmbUoZ6Hu9SuZVgGg_x/view?usp=share_link", buttongh2, "https://github.com/CristianBazan-dev/EasyStock" )

redirectButtons(button3, "https://drive.google.com/file/d/1PH27SOFZZ-A1QPnEqCpxErFNb6jC-NC3/view?usp=share_link", buttongh3, "https://github.com/CristianBazan-dev/planeta-precios-bajos-e-commerce")

redirectButtons(button4, "https://drive.google.com/file/d/1VE4LZWLKughIHIlb1PvEURODNmIDTE6S/view?usp=share_link", buttongh4, "https://github.com/CristianBazan-dev/Notes-app"); 

redirectButtons(button5, "https://drive.google.com/file/d/1T_NRszhr2JBz_ukdznx5c8IYaFTFB9bS/view?usp=share_link", buttongh5, ""); 
redirectButtons(button6, "https://drive.google.com/file/d/1CI7NcSBdOLtlsyoZw0vlUN0NKCRUzFxI/view?usp=share_link", buttongh6, ""); 


// alert("This portfolio it's on building. That's why some objects can be missed and the design for the mobile devices could be incomplete. I suggest to see it on a PC and complemented with the CV. I'm going to finish it through out this week. Thanks for your understanding, consideration and attention.")