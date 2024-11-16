// script.js

function generateQRCode() {
    const qrInput = document.getElementById("qrInput").value;
    const qrCodeDiv = document.getElementById("qrCode");

    // Clear any previous QR code
    qrCodeDiv.innerHTML = "";

    // Generate new QR code
    if (qrInput.trim() !== "") {
        new QRCode(qrCodeDiv, {
            text: qrInput,
            width: 200,
            height: 200,
        });
    } else {
        alert("Please enter text or a URL to generate QR code.");
    }
}
