let text = document.getElementById("counter");
let body = document.body;
let sum = 0;
 
function incre() {
    text.textContent = sum + 1;
    sum += 1;
 
    let ele = document.createElement("div");
    ele.setAttribute("class", "newDiv");
    ele.innerHTML = "<p>localhost:3000 says</p>";
    ele.innerHTML += sum;
 
    let button = document.createElement("button");
    button.innerText = "OK";
    ele.appendChild(button);
 
    ele.style.cssText = "color: white; background-color: black; height: 20vh; padding: 10px; margin-top: 10px;";
    body.appendChild(ele);
 
    button.addEventListener("click", function() {
        ele.style.display = "none";
    });
}