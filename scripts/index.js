function userMsg(msg) {
  msgDiv = '<div class="user-photo"><img src="images/icon_customer.png" alt=""></div><p id="txt" class="chat-message">'+msg+'</p>';
  div = document.createElement('div');
  div.className = 'chat customer'
  div.innerHTML = msgDiv;
  document.getElementById("log").appendChild(div);
  botMsg(msg);
}

function send() {
  var x = document.getElementById("sendx").value;
  userMsg(x);
}
function botMsg(msg) {

  msgDiv = '<div class="user-photo"><img src="images/IsraeliSocietyLogo.png" alt=""></div><p class="chat-message">Whats up, Brother..!!</p>';
  div = document.createElement('div');
  div.className = 'chat company'
  div.innerHTML = msgDiv;
  document.getElementById("log").appendChild(div);
}
