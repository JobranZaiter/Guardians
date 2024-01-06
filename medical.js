const titleElement = document.querySelector('.image-title');

function typeWriter() {
    const text = 'Medical Insurance';
    let i = 0;
    titleElement.innerHTML = ''; // Clear the content initially

    function type() {
        if (i < text.length) {
            titleElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            setTimeout(resetTypeWriter, 1000); // Reset the typing effect after completion
        }
    }

    type();
}

function resetTypeWriter() {
    titleElement.innerHTML = '';
    setTimeout(typeWriter, 1000); // Restart the typing effect after a pause
}

typeWriter();

document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function(item) {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});