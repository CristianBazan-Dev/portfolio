const button = document.getElementById("resumeButton");

button.addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1bdW1QMrlfvrakZ4P2VqP29FBVexGGrLH/view?usp=share_link"
  );
});

const button1 = document.getElementById("btn-demo-1");
const button2 = document.getElementById("btn-demo-2");
const button3 = document.getElementById("btn-demo-3");


const buttongh = document.getElementById("btn-gh-1");
const buttongh2 = document.getElementById("btn-gh-2");
const buttongh3 = document.getElementById("btn-gh-3");

const redirectButtons = (id, link1, gh, link2) => {
  id.addEventListener("click", () => {
    window.open(link1);
  });

  gh.addEventListener('click', () => {
    window.open(link2)
  })


};

redirectButtons(button1,"https://drive.google.com/file/d/1Qmnys-UW182yywynN46pOcUkjunMjQK2/view?usp=share_link",buttongh, "https://github.com/CristianBazan-dev/La-esquina-glupis"
);

redirectButtons(button2, "https://drive.google.com/file/d/1NSSAU8esZt68oSmbUoZ6Hu9SuZVgGg_x/view?usp=share_link", buttongh2, "https://github.com/CristianBazan-dev/EasyStock" )

redirectButtons(button3, "https://drive.google.com/file/d/1q0ZjAsm51ibCFfE8ojjAFRj9UygsxSfW/view?usp=share_link", buttongh3, "https://github.com/CristianBazan-dev/planeta-precios-bajos-e-commerce")

alert("This portfolio it's on building. That's why some objects can be missed and the design for the mobile devices could be incomplete. I suggest to see it on a PC and complemented with the CV. I'm going to finish it through out this week. Thanks for your understanding, consideration and attention.")