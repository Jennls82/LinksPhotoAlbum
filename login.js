

function readyLoginDiv() {
	var holddiv = $("#newuserInterface");
	holddiv.data("UNcheck", false);
	holddiv.data("PWcheck", false);
console.log(holddiv);

	$("#loginBtn").click(function(evt) {
	console.log("Login Button clicked.");
		var un = $("#unBox").val();
		var pw = $("#pwBox").val();
		var usersarray = users;
console.log(usersarray.length);
		if(un != undefined) {			
			for(var i = 0; i < usersarray.length; i++) {
				if(usersarray[i].username == un && usersarray[i].password == pw) {
					var loggedinUser = usersarray[i];
					loggedinUser.login();
//					$("#loggedInInterface").userObj = usersarray[i];
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
	
	$("#radio1").click(function(evt) {
console.log("Radio Button #1 (Add Photo) clicked.");
		$("#maindiv").empty();
		$("#maindiv").load("upload.html #maindiv", function() {
			readyUpload();
		});
	});
				
	$("#radio2").click(function(evt) {
console.log("Radio Button #2 (Album Management) clicked.");
		$("#maindiv").empty();
		$("#maindiv").load("albumselect.html #albumcreatediv", function() {
			readyASDiv();
		});
	});
				
	$("#radio3").click(function(evt) {
console.log("Radio Button #3 (Display Albums) clicked.");
		$("#maindiv").empty();
		$("#maindiv").load("displayalbum.html #displayAlbum", function() {
			readyDAdiv($("#loggedInInterface").data("user").albums[0]);
		});
	});
	
	$("#radio4").click(function(evt) {
console.log("Radio Button #4 (Add Photos to Albums) clicked.");
		$("#maindiv").empty();
		$("#maindiv").load("addphotostoalbum.html #addphotoalbumdiv", function() {
			readyAPtADiv();
		});
	});

	$("#radio5").click(function(evt) {
console.log("Radio Button #5 (Manage Photo) clicked.");
		$("#maindiv").empty();
		$("#maindiv").load("photomgmt.html #photomgmtdiv", function() {
			readyPMDiv($("#loggedInInterface").data("user").photos[0]);
		});
	});
	
}	//	end of document ready



