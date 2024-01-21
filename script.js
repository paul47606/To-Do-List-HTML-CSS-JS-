document.getElementById("btn").addEventListener("click", function(){
    let input = document.getElementById('input').value;
    // creating to do elements:
    let elem = document.createElement("li");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button"); // Corrected typo here
    btn1.innerHTML = "Done"; // Corrected typo here
    btn2.innerHTML = "Delete";
    elem.innerHTML = input;
    let ul = document.querySelector("ul");
    // append
    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2);
    // btn style
    btn1.style.margin="1%";

    btn1.style.marginLeft="3%";
    btn1.style.marginBottom="3%"
    btn1.style.borderRadius="5px"
    btn1.style.backgroundColor = "#C3EDC0"
    btn1.style.height = "45px"
    btn1.style.width = "65px"
    
    

    btn2.style.marginLeft="3%";
    btn2.style.margin="1%";
    btn2.style.borderRadius="5px"
    btn2.style.backgroundColor = "#C3EDC0"
    btn2.style.height = "45px"
    btn2.style.width = "65px"

    // function to buttoms
    btn1.addEventListener("click", function(){
        elem.style.textDecoration = "line-through";
    })
    btn2.addEventListener("click", function(){
        elem.remove();
    })
    document.getElementById("input").value = "";
});
