let username = "";

const joinChatButton = document.getElementById("join-chat");
const userNameInput = document.getElementById("username-input");
const form = document.getElementById("form");
const chatroom = document.querySelector(".chatroom-container");

joinChatButton.addEventListener("click",(event)=>{
     
    event.preventDefault();
    event.stopPropagation();
    username = userNameInput.value;
     if(username){
        form.style.display="none";
        chatroom.style.display="block";
     }
});