// Hamburger Menu
function onToggleMenu(icon) {
  icon.name = icon.name === "menu-outline" ? "close-outline" : "menu-outline";
  const nav = document.querySelector("ul");
  nav.classList.toggle("top-[6%]");
}

//Recieving form data in email using smtpjs and elastic email
function sendEmail() {
  Email.send({
    SecureToken: "b7d1157b-56cb-4f26-a0d5-b1f355f9a14d",
    To: "tunewithpk@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Message from " + document.getElementById("name").value,
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br>Email: " +
      document.getElementById("email").value +
      "<br>Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent successfully"));
}
