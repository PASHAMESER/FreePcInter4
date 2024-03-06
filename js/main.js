let conImgChat = document.getElementsByClassName("con-img-chat")[0];
let conItemChat = document.getElementsByClassName("con-item-chat")[0];
let send = document.getElementById("send");
let textarea = document.getElementById("textarea");
let bodyItemChat = document.getElementById("body-item-chat");

conImgChat.onclick = function () {
  textarea.focus();
  this.classList.add("removing");
  console.log("done");
  conItemChat.classList.add("Show-scale");
};

// start fun chat

// Not connected
let spanOnline = document.getElementById("spanOnline");
let textActive = document.getElementById("text-active");

window.addEventListener("online", () => {
  funOnline();
});
window.addEventListener("offline", () => {
  funOffline();
});

let funOnline = () => {
  spanOnline.style.background = "green";
  textActive.innerHTML = " Active now "
};
let funOffline = () => {
  spanOnline.style.background = "red";
  textActive.innerHTML = " Not connected "
};

window.onload = function () {
  if (window.navigator.onLine) {
    funOnline();
  } else {
    funOffline();
  }
};

let audioFile = new Audio("../sound/notification.mp3");

let funAudioNotf = () => {
  audioFile.play();
};

send.onclick = function () {
  let msgUserChat = document.createElement("p");
  msgUserChat.id = "msg-user-chat";

  let msgBotChat = document.createElement("p");
  msgBotChat.id = "msg-bot-chat";

  if (textarea.value === "") {
    setTimeout(() => {
      bodyItemChat.innerHTML += ` <p id= "msg-bot-chat" > الدردشة فارغة من فضلك راسلنا بشكل صحيح </p> `;
      funAudioNotf();
      setTimeout(() => {
        bodyItemChat.innerHTML += ` <p id= "msg-bot-chat" > المساعد الذكى هل تريد ان اساعدك ؟ </p> `;
        funAudioNotf();
        setTimeout(() => {
          bodyItemChat.innerHTML += ` <p id= "msg-bot-chat" >  يمكنك التواصل مع صانع البرمجية لشراء الخدمة التى تقدمها المنصة من خلال هذا الرابط </p> `;
          funAudioNotf();
          setTimeout(() => {
            bodyItemChat.innerHTML += ` <p id= "msg-bot-chat" > https://t.me/IncreaseSpeed </p> `;
            funAudioNotf();
          }, 1000);
        }, 3000);
      }, 1000);
    }, 1000);
  } else {
    msgUserChat.innerText = textarea.value;
    bodyItemChat.innerHTML += ` <p id= "msg-user-chat" > ${textarea.value} </p> `;
    textarea.value = "";
    textarea.focus();
  }
};

// end fun chat
