<a class="carousel-control-next" href="#carouselSpecials" data-slide="prev" onclick="$('#carouselSpecials').carousel('prev')">‹</a>
<a class="carousel-control-prev" href="#carouselSpecials" data-slide="next" onclick="$('#carouselSpecials').carousel('next')">›</a>

function confirmOrder(event) {
    event.preventDefault(); // Prevents page reload

    // Display confirmation message
    document.getElementById("confirmationMessage").style.display = "block";

    // Optionally clear the form fields
    document.querySelector("form").reset();
}
