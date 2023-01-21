window.onload = () => {
  const pageHero = document.querySelector(".page-hero");
  pageHero.classList.add("active");
};

verzendenButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (messageInput.value.length < 10) {
    messageInput.classList.add("shake");
    verzendenButton.disabled = true;
    setTimeout(() => {
      messageInput.classList.remove("shake");
      verzendenButton.disabled = false;
    }, 1000);
    return;
  }

  if (naamInput.value.length < 1) {
    naamInput.classList.add("shake");
    verzendenButton.disabled = true;
    setTimeout(() => {
      naamInput.classList.remove("shake");
      verzendenButton.disabled = false;
    }, 1000);
    return;
  }

  if (emailInput.value.length < 5) {
    emailInput.classList.add("shake");
    verzendenButton.disabled = true;
    setTimeout(() => {
      emailInput.classList.remove("shake");
      verzendenButton.disabled = false;
    }, 1000);
    return;
  }

  const params = {
    from_name: naamInput.value,
    reply_email: emailInput.value,
    message: messageInput.value,
  };
  emailjs.send("service_syt8eao", "Standaard", params, "1ExHLcqOKMpwg2JF5");

  setTimeout(() => {
    messageInput.classList.add("slideOut");
  }, 500);

  setTimeout(() => {
    naamInput.classList.add("slideOut");
  }, 650);

  setTimeout(() => {
    emailInput.classList.add("slideOut");
  }, 750);
  setTimeout(() => {
    verzendenButton.classList.add("slideOut");
  }, 850);
  setTimeout(() => {
    succesMessage.classList.remove("hidden");
    succesMessage.classList.add("slideIn");
  }, 1000);
});
