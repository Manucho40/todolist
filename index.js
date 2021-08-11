const button = document.querySelector('form');
const ol = document.querySelector("ol");
const valeur = document.getElementById('champs');
const storedInput = localStorage.getItem("toDoList");
if(valeur){
    ol.innerHTML = storedInput;
   
}

button.addEventListener('input', function(){
    if(valeur.value.length > 0){
        valeur.style.backgroundColor = "#82ff9e";
    }else{
        valeur.style.backgroundColor = "";

    }
})

button.addEventListener('submit', function(e){
    e.preventDefault();
    if(valeur.value > ""){
        ol.innerHTML += `<li>${valeur.value} <i class="fas fa-times"></i></li>`;
        valeur.value = "";
        valeur.style.backgroundColor = "";
        storage()
    }else{
        valeur.style.backgroundColor = "red";
        // valeur.setAttribute("placeholder", "Le champs est vide !") 

    }
    
    
})

ol.addEventListener('click', checkDelete);

function storage(){
    window.localStorage.toDoList = ol.innerHTML;
    // localStorage.setItem("toDoList", o)

}

function checkDelete(e) {
    const item = e.target;
    const parent = item.parentElement;
     if(item.classList[1] === "fa-times"){
    parent.remove()
    storage()
    }

}