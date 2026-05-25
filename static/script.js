// --- 1. THE CLASSIC ALERT ---
// Wir suchen den Button mit der ID 'alertBtn'
const alertBtn = document.getElementById('alertBtn');

// Wir warten auf einen 'click'
alertBtn.addEventListener('click', function() {
    alert('Hallo! Danke, dass du mein Portfolio besuchst. 🏓');
});


// --- 2. THE THEME SWITCHER ---
const themeBtn = document.getElementById('themeBtn');
const bodyElement = document.body;

themeBtn.addEventListener('click', function() {
    // Schaltet die 'light-mode' CSS-Klasse an oder aus
    bodyElement.classList.toggle('light-mode');
    
    // Ändert den Text des Buttons je nach Modus
    if (bodyElement.classList.contains('light-mode')) {
        themeBtn.textContent = 'Dark Mode';
    } else {
        themeBtn.textContent = 'Light Mode';
    }
});


// --- 3. THE HOBBY GENERATOR ---
const hobbyBtn = document.getElementById('hobbyBtn');
const hobbyText = document.getElementById('hobbyText');

// Ein Array (Liste) mit verschiedenen Tischtennis-Tipps
const tips = [
    "Tipp: Halte den Schläger locker, nicht zu fest verkrampfen!",
    "Regel: Der Ball muss beim Aufschlag hochgeworfen werden.",
    "Tipp: Die Beinarbeit ist genauso wichtig wie der Schlag.",
    "Fakt: Tischtennis ist die schnellste Rückschlagsportart der Welt!",
    "Tipp: Konzentriere dich immer auf den Ball, nicht auf den Gegner."
];

hobbyBtn.addEventListener('click', function() {
    // Wählt eine zufällige Zahl basierend auf der Länge der Liste
    const randomIndex = Math.floor(Math.random() * tips.length);
    
    // Zeigt den zufälligen Tipp im leeren <p> Tag an
    hobbyText.textContent = tips[randomIndex];
    hobbyText.style.color = "#00ffcc"; // Macht den Text im Dark Mode gut sichtbar
});