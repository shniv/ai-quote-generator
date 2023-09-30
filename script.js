document.getElementById('getQuoteBtn').addEventListener('click', async function() {
    const mood = document.getElementById('mood').value;
    const apiUrl = "https://api.quotable.io/random";
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const quote = data.content;
        const author = data.author;
        
        document.getElementById('quote').innerText = '"' + quote + '"';
        document.getElementById('author').innerText = ""+ author;
        
    } catch (error) {
        console.error("Error fetching the quote:", error);
        document.getElementById('quote').innerText = "Oops! There was an error fetching your quote. Please try again.";
        document.getElementById('author').innerText = "";  // Clearing the author section so no dash is shown.
    }
});
