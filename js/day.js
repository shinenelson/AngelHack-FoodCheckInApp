var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

if(dd<10) {
    dd='0'+dd
}

var d8 = month[mm] + ' ' + dd + ', ' + yyyy;
var dayno;

if (dd == 17 && mm == 3 && yyyy == 2014)
	dayno = 1;
else if (dd == 18 && mm == 3 && yyyy == 2014)
	dayno = 2;
else
	dayno = 0;

dayno = 2;

if (dayno == 2)
{
	$("#dinr").css("display", "none");
	// var link = document.getElementById('dinr').style["display"]="none";
	// link.style.display = 'none';
}