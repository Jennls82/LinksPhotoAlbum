
$(document).ready(function() {
	var holddiv = $("#newuserInterface");
	holddiv.data("UNcheck", false);
	holddiv.data("PWcheck", false);
console.log(holddiv);

	$("#loginBtn").click(function(evt) {
	console.log("Login Button clicked.");
		var un = $("#unBox").val();
		var pw = $("#pwBox").val();
		if(un != undefined) {			
			for(var i = 0; i < users.length; i++) {
				if(users[i].username == un && users[i].password == pw) {
					var loggedinUser = users[i];
					loggedinUser.login();
					$("#loggedInInterface").userObj = users[i];
					return loggedinUser;
				} else {
			}
		}
		alert("Username and password combination not found.");
		$("#unBox").html("");
		$("#pwBox").html("");
	}
});
	
	$("#newuserBtn").click(function(evt) {
		console.log("New User Button clicked.");
		$("#newuserInterface").show();
		$("#loginBtn").hide();
		$("#newuserBtn").hide();
		$("#confirmLbl").show();
		$("#confirmBox").show();
		$("#newaccountBtn").show();
		$("#newaccountBtn").activate = false;
	});
	
	$("#unBox").blur(function(evt) {
		$("#unBox").css("border", "black solid 1px");
		if($("#confirmBox").is(":visible")) {
			var un = $("#unBox").val();
			for(var i = 0; i < users.length; i++) {
				if(un == users[i].username) {
					alert("Username is already taken, please select another");
					$("#unBox").css("border", "red solid 2px");
					$("#newuserInterface").data("UNcheck", false);
				} else {
					$("#unBox").css("border", "green solid 2px");
					$("#newuserInterface").data("UNcheck", true);
				}
			}
		}
	});

	$("#confirmBox").keyup(function(evt) {
		var c = evt.target.value;
		var orig = $("#pwBox").val();
		if(c.length > 3 && c.length <= orig.length) {
			//	continue
			$("#confirmBox").css("border", "yellow solid 2px");
			var osub = orig.substring(0, c.length);
			if(c == osub) {
				//	continue
				if(c.length == orig.length) {
					$("#pwBox").css("border", "green solid 2px");
					$("#confirmBox").css("border", "green solid 2px");
					holddiv.data("PWcheck", true);
				} else {
					//	continue
				}
			} else {
				$("#confirmBox").css("border", "red solid 2px");
				holddiv.data("PWcheck", false);
			}
		} 
	});
	
	$("#newaccountBtn").click(function(evt) {
		var unchk = holddiv.data("UNcheck");
		var pwchk = holddiv.data("PWcheck");
console.log("Create New Account Button clicked. UNcheck = " + unchk + " PWcheck = " + pwchk);

		if(unchk == true && pwchk == true) {
			var newuser = new User(); 
			newuser.newaccount($("#unBox").val(), $("#pwBox").val());
			users.push(newuser);
console.log(users);
			$("#loginBtn").click();
		} else {
			alert("Please complete username and password fields.");
		}
		
	});
});



