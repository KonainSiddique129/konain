let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;; 


function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');

}

function  prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length)  % slides.length;
    slides[index].classList.add('active');

}
     

     const nameInput = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const success = document.querySelector("#success");
    const errorNodes = document.querySelector("#error");


     function validateForm(){
        clearMessages();
        let errorFlag = false;

      if(nameInput.value.length < 1){
        errorNodesrrorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
        
      }
      if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag =true;
      }
      if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
      }

      if(!errorFlag){
        success.innerText = "Success!";
      }
     }
    

     function clearMessages(){
        for(let i = 0; i < erroNodes.length; i++){
            errorNodes[i].innerText = "";

        }
         success.innerText = "";
        nameInput.classList.remove(error-border);
        email.classList.remove("error-border");
        message.classList.remove("error-border");
     }


     function emailIsValid(email){
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);

     }