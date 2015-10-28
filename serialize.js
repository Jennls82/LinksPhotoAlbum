var cookieName = "all";
deleteCookie(cookieName);
//var mantransJson = JSON.stringify(mantrans);
//var cookie = setCookie("mantrans", mantransJson);
//console.log(cookie);

//var banktransJson = JSON.stringify(banktrans);
//cookie = setCookie("banktrans", banktransJson);
//console.log(cookie);

//var accountJson = JSON.stringify(account);
//cookie = setCookie("account", accountJson);
//console.log(cookie);


function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
	return document.cookie;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
			c = c.substring(1);
		}
        if (c.indexOf(name) == 0) {
			return c.substring(name.length,c.length);
		}
    }
    return "";
}

function serialize(name, obj) {
	$.cookie(name, JSON.stringify(obj), {
		expires: 1
	});
}

function deserialize(name) {
	return $.cookie(name);
}

function deleteCookie(name) {
	$.removeCookie(name);
}