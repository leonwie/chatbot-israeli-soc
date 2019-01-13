$(function(){
   	//make connection
	var socket = io.connect()

	//buttons and inputs
	var message = $("#message")
	var send_message = $("#send_message")
	var chatbox = $("#chatbox")
	var chatlogs = $("#chatlogs")

	//Emit message
	send_message.click(function(){
		var msg=message.val().replace(/[^\w\s!?]/g,'');
		if (msg!=''){
			socket.emit('new_message', {message : msg});
		}
		else {message.val('');}
	})

	//Listen on new_message
	socket.on("new_message_customer", (data) => {
		message.val('');
		chatlogs.append("<div class='chat'><div class='user-photo'><img src='images/icon_customer.png' alt=''></div><div class='chat_customer'><p class='message'>" + data.message + "</p></div></div>");
		chatlogs.scrollTop(chatlogs[0].scrollHeight);
	})
	socket.on("new_message_company", (data) => {
		message.val('');
		var x ='';
		chatlogs.append("<div class='chat'><div class='user-photo'><img src='images/IsraeliSocietyLogo.png' alt=''></div><div class='chat_company'><p class='message'>" + data.message +x+ "</p></div></div>");
		chatlogs.scrollTop(chatlogs[0].scrollHeight);
	})
});



var input = document.getElementById("message");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("send_message").click();
  }
});
