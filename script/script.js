const countDownDate = new Date("Oct 31, 2025 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM elements
    const updateElement = (id, value) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = value < 10 ? `0${value}` : value;
        }
    };

    if (distance < 0) {
        // Countdown finished
        ['days', 'hours', 'minutes', 'seconds'].forEach(id => updateElement(id, '00'));
        clearInterval(countdownInterval);
    } else {
        // Update countdown
        updateElement('days', days);
        updateElement('hours', hours);
        updateElement('minutes', minutes);
        updateElement('seconds', seconds);
    }
};

// Update countdown immediately and then every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);