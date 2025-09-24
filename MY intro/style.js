const introText = document.getElementById('intro'); 
if (introText) {
    const text = "Welcome to Govardhan Reddy's Portfolio :";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            introText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); 
        }
    }
    typeWriter();
}