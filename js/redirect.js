const button = document.getElementById("resumeButton");

button.addEventListener("click", () => {
  window.open(
    "https://docs.google.com/document/d/15WK4EAhBhaNCftVeuAAT8dwKXOLxtf5u/edit?usp=share_link&ouid=117474804519959038343&rtpof=true&sd=true"
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

redirectButtons(button3, "https://www.planetapreciosbajos.com/", buttongh3, "https://github.com/CristianBazan-dev/planeta-precios-bajos-e-commerce")

redirectButtons(button4, "https://drive.google.com/file/d/1VE4LZWLKughIHIlb1PvEURODNmIDTE6S/view?usp=share_link", buttongh4, "https://github.com/CristianBazan-dev/Notes-app"); 

redirectButtons(button5, "https://cristianbazan-dev.github.io/GetJinxed/", buttongh5, ""); 

redirectButtons(button6, "https://cristianbazan-dev.github.io/Classroom5toNaturales/", buttongh6, ""); 


// Email sending 

const mail = document.getElementById('mail');

mail.addEventListener('click', ()=>{
  window.location.href = "mailto:cristianbazandev@gmail.com?subject=I%20want%20to%20bring%20my%20project%20to%20life!&body=message%20goes%20here";

})