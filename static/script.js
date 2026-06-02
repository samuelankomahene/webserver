// --- CLIENT-SERVER CONNECTION ---
const alertBtn = document.getElementById('alertBtn');

alertBtn.addEventListener('click', async () => {
    try {
        // 1. The Network Request: Ask the Python server for data
        // (Feel free to change "Sammy" to any name you want!)
        const response = await fetch('/api/greet/Sammy');
        
        // 2. The Unpacking: Extract the raw JSON from the server's response
        const serverData = await response.json();
        
        // 3. The Display: Show the server's message on the frontend
        alert("Antwort vom Server: " + serverData.message);
        
    } catch (error) {
        // Fallback in case the server is offline
        console.error("Netzwerkfehler:", error);
        alert("Fehler: Der Python-Server ist nicht erreichbar.");
    }
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