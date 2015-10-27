var users = [];

function User() {
	this.userID = User.counter++;
	this.username;
	this.password;
	this.photos = [];
	this.albums = [];
}

User.counter = 0;

User.prototype.login = function() {
	$("#loginInterface").hide;
	$("#newuserInterface").hide;
	$("#loggedInInterface").show;
	$("#username").value = this.username;
}

User.prototype.newaccount = function(un, pw) {
	this.username = un;
	this.password = pw;
}

$("#loginBtn").click(function(evt) {
	var un = $("#unBox").value;
	var pw = $("#pwBox").value;
	for(var user in users) {
		if(user.unsername == un && user.password == pw) {
			var loggedinUser = user;
			loggedinUser.login();
			$("#loggedInInterface").userObj = user;
		} else {
			alert("Username and password combination not found.");
			$("#unBox").value = "";
			$("#pwBox").value = "";
		}
	}
});

$("#newuserBtn").click(function(evt) {
	$("#loginBtn").hide;
	$("#newuserBtn").hide;
	$("#confirmLbl").show;
	$("#confirmBox").show;
	$("#newaccountBtn").show;
	$("#newaccountBtn").activate = false;
});

$("#unBox").blur(function(evt) {
	if($("#confirmBox").is(":visible")) {
		var un = $("#unBox").value;
		for(var user in users) {
			if(un == user.username) {
				alert("Username is already taken, please select another");
				$("#unBox").border = "red"
			}
		}
	}
});

$("#confirmBox").keyup(function(evt) {
	var c = evt.target.value;
	var orig = $("#password").value;
	if(c.length > 3 && c.length <= orig.length) {
		//	continue
		if(c == orig.substr(c.length)) {
			$("#pwBox").border = "green";
			$("#confirmBox").border = "green";
			
		}
	} else {
		//	mark confirm as red
	}
});

$("newaccountBtn").click(function(evt) {
	var newuser = User.newaccount($("#unBox").value, $("#pwBox.value"));
	users.push(newuser);
	$("#loginBtn").click();
	
});


		

