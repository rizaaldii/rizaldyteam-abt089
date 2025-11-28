// === DAILY ANALYSIS ===
const tf = this.value;
document.querySelector('.tv-widget iframe').src = `https://s.tradingview.com/widgetembed/?symbol=XAUUSD&interval=${tf}&theme=dark&style=1&timezone=Asia%2FJakarta`;
});


// === AUTO UPDATE PRICE + DASHBOARD ===
function autoUpdatePrice() {
const price = (2120 + Math.random() * 40).toFixed(2);
document.getElementById('livePrice').innerText = price;


const vol = (Math.random() * 100).toFixed(1) + "%";
document.getElementById('volText').innerText = vol;


generateSignal(price);
}
setInterval(autoUpdatePrice, 3000);


// === SIGNAL GENERATOR (BUY/SELL) ===
function generateSignal(price) {
const signalBox = document.getElementById('signalBox');
let signal = "";


if (price < 2130) {
signal = "BUY — Harga memasuki area discount";
signalBox.className = "dash-card green";
showNotification("Signal Buy Terdeteksi: " + price);


} else if (price > 2150) {
signal = "SELL — Harga mendekati premium zone";
signalBox.className = "dash-card red";
showNotification("Signal Sell Terdeteksi: " + price);


} else {
signal = "Wait — Tidak ada sinyal kuat";
signalBox.className = "dash-card";
}


document.getElementById('signalText').innerText = signal;
}


// === NOTIFICATION POPUP ===
function showNotification(msg) {
const notif = document.createElement('div');
notif.className = "notification";
notif.innerText = msg;
document.body.appendChild(notif);


notif.style.display = "block";

setTimeout(() => {
notif.remove();
}, 4000);
}
<!-- Dashboard Section -->
<section class="dashboard">
<h2>Dashboard Market</h2>
<div class="dash-grid">
<div class="dash-card" id="priceBox">
<h3>XAU/USD Price</h3>
<p id="livePrice">Loading...</p>
</div>
<div class="dash-card" id="signalBox">
<h3>Sinyal Terbaru</h3>
<p id="signalText">Menunggu data...</p>
</div>
<div class="dash-card" id="volBox">
<h3>Volatilitas</h3>
<p id="volText">-</p>
</div>
</div>
</section>

// Auto Update Price Simulation (Randomized)
function autoUpdatePrice() {
const price = (2120 + Math.random() * 40).toFixed(2);
document.getElementById('livePrice').innerText = price;


const vol = (Math.random() * 100).toFixed(1) + "%";
document.getElementById('volText').innerText = vol;


generateSignal(price);
}
setInterval(autoUpdatePrice, 3000);


// Generate Buy/Sell Signal Automatically
function generateSignal(price) {
const signalBox = document.getElementById('signalBox');
let signal = "";


if (price < 2130) {
signal = "BUY — Harga memasuki area discount";
signalBox.className = "dash-card green";
showNotification("Signal Buy Terdeteksi: " + price);
} else if (price > 2150) {
signal = "SELL — Harga mendekati premium zone";
signalBox.className = "dash-card red";
showNotification("Signal Sell Terdeteksi: " + price);
} else {
signal = "Wait — Tidak ada sinyal kuat";
signalBox.className = "dash-card";
}


document.getElementById('signalText').innerText = signal;
}


// Notification Popup
function showNotification(msg) {
const notif = document.createElement('div');
notif.className = "notification";
notif.innerText = msg;
document.body.appendChild(notif);


notif.style.display = "block";


setTimeout(() => {
notif.remove();
}, 4000);
}
