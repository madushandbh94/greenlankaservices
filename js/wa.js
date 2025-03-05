document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("whatsappForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get form values
        var name = document.getElementById("name").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var service = document.getElementById("service").value.trim();
        var area = document.getElementById("area").value.trim();

        // Validate fields
        if (name === "" || phone === "" || service === "" || area === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // WhatsApp number (Sri Lankan format: 947XXXXXXXX)
        var whatsappNumber = "94722560520"; // 0722560520 in correct format

        // Create WhatsApp message
        var message = "Hello, I would like to make an appointment:\n\n";
        message += "👤 Name: " + name + "\n";
        message += "📞 Phone: " + phone + "\n";
        message += "🛠️ Service: " + service + "\n";
        message += "📍 Area: " + area + "\n";

        // Encode message for URL
        var encodedMessage = encodeURIComponent(message);

        // Open WhatsApp with pre-filled message
        window.open("https://wa.me/" + whatsappNumber + "?text=" + encodedMessage, "_blank");

        // Show success message and refresh page
        setTimeout(function() {
            alert("Message sent successfully!");
            location.reload(); // Refresh the page
        }, 1000);
    });
});
