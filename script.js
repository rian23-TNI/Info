function showMenu() {
	var menu = document.getElementById("menu");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}


window.addEventListener("load", function () {
	var loading = document.getElementById("loading");
	loading.style.display = "none";
});


function notif() {
	alert('Haiii,,,?')
	alert('Salam Sipetulang 👍😉')
}
var i = 0;
var txt = 'hallo... saya Trianto. Saya seorang pengembang perusahaan yang berdedikasi dan bersemangat dalam pekerjaan. Saya memiliki pengalaman dalam mengembangkan projek work seperti usaha makanan, pelayanan perbaikan mesin maupun elektrikal engineering juga klien dari berbagai industri perkebunan termasuk kakek saya yang memiliki keahlian bidang pertanian dan pendidikan.untuk lebih lanjutnya bisa di tinjau di alamat dan kontak di bawah ini : ';
var speed = 60;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed,);
	}

}