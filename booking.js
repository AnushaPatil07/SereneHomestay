function sendWhatsAppMessage() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const room = document.getElementById("room").value;
  const message = document.getElementById("message").value;

  const text = `Hello Serene Homestay 🌿%0A%0A` +
               `Name: ${name}%0A` +
               `Phone: ${phone}%0A` +
               `Check-in: ${checkin}%0A` +
               `Check-out: ${checkout}%0A` +
               `Room Preference: ${room}%0A` +
               `Message: ${message}`;

  const encodedText = encodeURIComponent(text);
  window.open(`https://wa.me/917338216616?text=${encodedText}`, "_blank");
}
