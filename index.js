const allbtn = document.querySelectorAll(".Baton-name");

const rice = 550;
const economoy = "Economoy";

for (const btn of allbtn) {
  btn.addEventListener("click", function (event) {
    const setname = event.target.innerText;

    const seletediv = document.querySelector('.div'); // Assuming you have an element with class 'div'
    
    const div1 = document.createElement("div");
    div1.classList.add("seat");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = setname;
    p2.innerText = economoy;
    p3.innerText = rice;

    div1.appendChild(p1);
    div1.appendChild(p2);
    div1.appendChild(p3);

    seletediv.appendChild(div1);
  });
}
