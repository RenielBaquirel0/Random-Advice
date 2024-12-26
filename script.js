// DOM Elements
const adviceContainer = document.getElementById('advice-container');
const getAdviceBtn = document.getElementById('get-advice-btn');

// Fetch and Display Advice
const fetchAdvice = async () => {
    try {
        adviceContainer.textContent = "Fetching advice...";
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const advice = data.slip.advice;
        adviceContainer.textContent = `"${advice}"`;
    } catch (error) {
        adviceContainer.textContent = "Oops! Something went wrong. Please try again.";
        console.error("Error fetching advice:", error);
    }
};

// Event Listener
getAdviceBtn.addEventListener('click', fetchAdvice);