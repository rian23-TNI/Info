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
	alert('"Not Function"')
	alert('"thanks you!"')
}
var i = 0;
var txt = 'hallo... saya Trianto. Saya seorang pengembang perusahaan yang berdedikasi dan bersemangat dalam pekerjaan. Saya memiliki pengalaman dalam mengembangkan projek work seperti usaha makanan, pelayanan perbaikan mesin maupun elektrikal engineering juga klien dari berbagai industri perkebunan termasuk kakek saya yang memiliki keahlian bidang pertanian dan pendidikan.untuk lebih lanjutnya bisa di tinjau di alamat dan kontak di bawah ini : ';
var speed = 50;
let sudahKlik = false;

// 🔊 buat audio context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playClickSound() {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);	
	
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // volume kecil biar halus

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.02); // durasi sangat pendek
}

		  
function typeWriter() {
	if (i < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(i);
		playClickSound(); // 🔊 suara tiap huruf
		i++;
		setTimeout(typeWriter,speed,);
	}
}


function handleClick() {
  if (!sudahKlik) {
    audioCtx.resume(); // penting biar suara aktif setelah klik 
    typeWriter(); // klik pertama
    sudahKlik = true;
  } else {
    location.reload(); // klik kedua
  }
}
