// Daily dynamic content
• Support: 2130 – 2124<br>
• Resistance: 2150 – 2158<br>
• Skenario: buy on pullback dengan konfirmasi candlestick.
`;


const todayFundamental = `
• Fokus pada rilis data NFP & CPI.<br>
• Volatilitas meningkat menjelang sesi New York.<br>
• USD berpotensi menguat sementara waktu.
`;


document.getElementById("technical-content").innerHTML = todayTechnical;
document.getElementById("fundamental-content").innerHTML = todayFundamental;


// AUTO UPDATE PRICE
function autoUpdatePrice() {
const price = (2120 + Math.random() * 40).toFixed(2);
document.getElementById('livePrice').innerText = price;


const vol = (Math.random() * 100).toFixed(1) + "%";
document.getElementById('volText').innerText = vol;


generateSignal(price);
}
setInterval(autoUpdatePrice, 3000);


// SIGNAL GENERATOR
function generateSignal(price) {
const signalBox = document.getElementById('signalBox');
let signal = "";


if (price < 2130) {
signal = "BUY — Harga memasuki area discount";
signalBox.className = "dash-card green";
showNotification("Signal Buy: " + price);
} else if (price > 2150) {
signal = "SELL — Harga memasuki premium zone";
signalBox.className = "dash-card red";
showNotification("Signal Sell: " + price);
} else {
signal = "WAIT — Tidak ada sinyal";
signalBox.className = "dash-card";
}


document.getElementById('signalText').innerText = signal;
}


// POPUP NOTIFIKASI
function showNotification(msg) {
const notif = document.createElement('div');
notif.className = "notification";
notif.innerText = msg;
document.body.appendChild(notif);


notif.style.display = "block";


setTimeout(() => {
notif.remove();
