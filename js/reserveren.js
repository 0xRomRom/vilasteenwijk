let month = "Januari";
let currentDates = {};

window.onload = async () => {
  const pageHero = document.querySelector(".page-hero");
  pageHero.classList.add("active");
  const fetcher = await fetch(
    `https://prompt-maker-default-rtdb.europe-west1.firebasedatabase.app/calendar.json`
  );
  const data = await fetcher.json();
  currentDates = await data;
  renderCalendar(month);
};

const tab1 = document.querySelectorAll(".tab1");
const tab2 = document.querySelectorAll(".tab2");
const tab3 = document.querySelectorAll(".tab3");

const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");
const page5 = document.querySelector(".page5");

tab1.forEach((item) => {
  item.addEventListener("click", () => {
    page1.classList.remove("hidden");
    page2.classList.add("hidden");
    page3.classList.add("hidden");
  });
});

tab2.forEach((item) => {
  item.addEventListener("click", () => {
    if (reservation.days === 0) return;
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    page3.classList.add("hidden");
  });
});

tab3.forEach((item) => {
  item.addEventListener("click", () => {
    if (reservation.room === "") return;
    page1.classList.add("hidden");
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
  });
});

const room1 = document.querySelector(".opt1");
const room2 = document.querySelector(".opt2");
const room3 = document.querySelector(".opt3");
const room4 = document.querySelector(".opt4");

const check1 = document.querySelector(".c1");
const check2 = document.querySelector(".c2");
const check3 = document.querySelector(".c3");
const check4 = document.querySelector(".c4");

room1.addEventListener("click", () => {
  room1.style.backgroundColor = "rgba(4, 61, 4, 0.695)";
  room2.style.backgroundColor = "black";
  room3.style.backgroundColor = "black";
  room4.style.backgroundColor = "black";
  check1.classList.add("selected");
  check2.classList.remove("selected");
  check3.classList.remove("selected");
  check4.classList.remove("selected");
  reservation.room = "Johan Van Den Kornput";
});

room2.addEventListener("click", () => {
  room1.style.backgroundColor = "black";
  room2.style.backgroundColor = "rgba(4, 61, 4, 0.695)";
  room3.style.backgroundColor = "black";
  room4.style.backgroundColor = "black";
  check1.classList.remove("selected");
  check2.classList.add("selected");
  check3.classList.remove("selected");
  check4.classList.remove("selected");
  reservation.room = "Hildo Krop";
});

room3.addEventListener("click", () => {
  room1.style.backgroundColor = "black";
  room2.style.backgroundColor = "black";
  room3.style.backgroundColor = "rgba(4, 61, 4, 0.695)";
  room4.style.backgroundColor = "black";
  check1.classList.remove("selected");
  check2.classList.remove("selected");
  check3.classList.add("selected");
  check4.classList.remove("selected");
  reservation.room = "Tromp Meesters";
});

room4.addEventListener("click", () => {
  room1.style.backgroundColor = "black";
  room2.style.backgroundColor = "black";
  room3.style.backgroundColor = "black";
  room4.style.backgroundColor = "rgba(4, 61, 4, 0.695)";
  check1.classList.remove("selected");
  check2.classList.remove("selected");
  check3.classList.remove("selected");
  check4.classList.add("selected");
  reservation.room = "Kleibeuker";
});

let reservation = {
  date: {},
  days: 0,
  room: "",
  totalPrice: 0,
  totalGuests: 1,
  userInfo: {
    name: "",
    surname: "",
    gender: "Man",
    address: "",
    city: "",
    zipcode: "",
    emailAddress: "",
    phoneNumber: "",
    payment: "Overschrijving",
  },
};
const maleGender = document.querySelector(".male");
const femaleGender = document.querySelector(".female");
maleGender.addEventListener("click", () => {
  reservation.userInfo.gender = "Man";
});
femaleGender.addEventListener("click", () => {
  reservation.userInfo.gender = "Vrouw";
});

const transferCash = document.querySelector(".transfer");
const payCash = document.querySelector(".cash");

transferCash.addEventListener("click", () => {
  reservation.userInfo.payment = "Contant";
});
payCash.addEventListener("click", () => {
  reservation.userInfo.payment = "Overschrijving";
});

const datumBevestigen = document.querySelector(".cta1");
const kamerBevestigen = document.querySelector(".cta2");
const boekingBevestigen = document.querySelector(".cta3");
const totalPrice = document.querySelector(".total-price");
const boekingString = document.querySelector(".order-string");

kamerBevestigen.addEventListener("click", () => {
  if (reservation.room === "") {
    alert("Kies een kamer");
    return;
  }
  if (reservation.totalGuests === 1) {
    reservation.totalPrice = 89 * reservation.days;
  } else {
    reservation.totalPrice = 99 * reservation.days;
  }
  totalPrice.textContent = "";
  totalPrice.textContent = "Totaal: €" + reservation.totalPrice;
  boekingString.textContent = `${reservation.days} overnachting${
    reservation.days > 1 ? "en" : ""
  } in ${reservation.room}`;
  page1.classList.add("hidden");
  page2.classList.add("hidden");
  page3.classList.remove("hidden");
});

const male = document.querySelector(".male");
const female = document.querySelector(".female");

male.addEventListener("click", () => {
  male.classList.add("gender-choice");
  female.classList.remove("gender-choice");
  reservation.userInfo.gender = "Male";
});

female.addEventListener("click", () => {
  female.classList.add("gender-choice");
  male.classList.remove("gender-choice");
  reservation.userInfo.gender = "Female";
});

const cash = document.querySelector(".cash");
const transfer = document.querySelector(".transfer");

cash.addEventListener("click", () => {
  cash.classList.add("pay-choice");
  transfer.classList.remove("pay-choice");
  reservation.userInfo.payment = "Contant";
});

transfer.addEventListener("click", () => {
  transfer.classList.add("pay-choice");
  cash.classList.remove("pay-choice");
  reservation.userInfo.payment = "Overschrijving";
});

const nameInput = document.querySelector(".name-input");
const surnameInput = document.querySelector(".surname-input");
const addressInput = document.querySelector(".address-input");
const cityInput = document.querySelector(".city-input");
const zipcodeInput = document.querySelector(".zipcode-input");
const emailInput = document.querySelector(".email-input");
const confirmEmailInput = document.querySelector(".confirm-email-input");
const phoneInput = document.querySelector(".phone-number-input");

boekingBevestigen.addEventListener("click", () => {
  if (nameInput.value.length < 2) {
    nameInput.classList.add("shake");
    boekingBevestigen.disabled = true;
    setTimeout(() => {
      nameInput.classList.remove("shake");
      boekingBevestigen.disabled = false;
    }, 1000);
    return;
  }

  if (surnameInput.value.length < 2) {
    surnameInput.classList.add("shake");
    boekingBevestigen.disabled = true;
    setTimeout(() => {
      surnameInput.classList.remove("shake");
      boekingBevestigen.disabled = false;
    }, 1000);
    return;
  }

  if (addressInput.value.length < 2) {
    addressInput.classList.add("shake");
    boekingBevestigen.disabled = true;
    setTimeout(() => {
      addressInput.classList.remove("shake");
      boekingBevestigen.disabled = false;
    }, 1000);
    return;
  }

  if (cityInput.value.length < 2) {
    cityInput.classList.add("shake");
    boekingBevestigen.disabled = true;
    setTimeout(() => {
      cityInput.classList.remove("shake");
      boekingBevestigen.disabled = false;
    }, 1000);
    return;
  }

  if (cityInput.value.length < 2) {
    cityInput.classList.add("shake");
    boekingBevestigen.disabled = true;
    setTimeout(() => {
      cityInput.classList.remove("shake");
      boekingBevestigen.disabled = false;
    }, 1000);
    return;
  }

  if (zipcodeInput.value.length !== 6) {
    zipcodeInput.classList.add("shake");
    boekingBevestigen.disabled = true;
    setTimeout(() => {
      zipcodeInput.classList.remove("shake");
      boekingBevestigen.disabled = false;
    }, 1000);
    return;
  }

  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    emailInput.classList.add("shake");
    boekingBevestigen.disabled = true;
    setTimeout(() => {
      emailInput.classList.remove("shake");
      boekingBevestigen.disabled = false;
    }, 1000);
    return;
  }

  if (confirmEmailInput.value !== emailInput.value) {
    confirmEmailInput.classList.add("shake");
    boekingBevestigen.disabled = true;
    setTimeout(() => {
      confirmEmailInput.classList.remove("shake");
      boekingBevestigen.disabled = false;
    }, 1000);
    return;
  }

  if (phoneInput.value.length < 10) {
    phoneInput.classList.add("shake");
    boekingBevestigen.disabled = true;
    setTimeout(() => {
      phoneInput.classList.remove("shake");
      boekingBevestigen.disabled = false;
    }, 1000);
    return;
  }

  reservation.userInfo.name = nameInput.value;
  reservation.userInfo.surname = surnameInput.value;
  reservation.userInfo.address = addressInput.value;
  reservation.userInfo.city = cityInput.value;
  reservation.userInfo.zipcode = zipcodeInput.value;
  reservation.userInfo.emailAddress = confirmEmailInput.value;
  reservation.userInfo.phoneNumber = phoneInput.value;

  page3.classList.add("hidden");
  if (reservation.userInfo.payment === "Overschrijving") {
    page4.classList.remove("hidden");
    const totalCheckOut = document.querySelector(".page4-hero-sub1");
    totalCheckOut.textContent = `Gelieve €${reservation.totalPrice},- over te maken naar:`;
  } else {
    page5.classList.remove("hidden");
  }

  console.log(reservation);

  const params = {
    date:
      reservation.date[1] +
      "," +
      reservation.date[2] +
      "," +
      reservation.date[3],
    room: reservation.room,
    guests: reservation.totalGuests,
    total: reservation.totalPrice,
    name: reservation.userInfo.name,
    surname: reservation.userInfo.surname,
    gender: reservation.userInfo.gender,
    address: reservation.userInfo.address,
    city: reservation.userInfo.city,
    zipcode: reservation.userInfo.zipcode,
    emailaddress: reservation.userInfo.emailAddress,
    phonenumber: reservation.userInfo.phoneNumber,
    payment: reservation.userInfo.payment,
  };
  emailjs.send("service_syt8eao", "Standaard", params, "1ExHLcqOKMpwg2JF5");
});

const vanafCalendarButton = document.querySelector(".calendar-icon");
const vanafCalendar = document.querySelector(".calendar-box");

//Show calendar
vanafCalendarButton.addEventListener("click", () => {
  vanafCalendar.classList.remove("hidden");
});

//Render calendar dates
const maandDropdown = document.querySelector(".maand-select");
const calendarGrid = document.querySelector(".calendar-grid");

maandDropdown.addEventListener("change", (e) => {
  renderCalendar(e.target.value);
});

const renderCalendar = (index) => {
  let monthLength = Object.keys(currentDates[index]).length;
  calendarGrid.innerHTML = "";
  for (let i = 1; i < monthLength; i++) {
    let date = document.createElement("div");
    date.dataset.datum = i + " " + index;
    if (currentDates[index][i] === false) {
      date.classList.add("date-available");
    } else {
      date.classList.add("date-unavailable");
    }
    date.textContent = i;
    calendarGrid.append(date);
  }
};
// renderCalendar("Januari");

const date1 = document.querySelector(".date1");
const date2 = document.querySelector(".date2");
const date3 = document.querySelector(".date3");

let tempDates = {
  1: "",
  2: "",
  3: "",
};

let datesCount = 0;

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const deleteDate1 = document.querySelector(".del1");
const deleteDate2 = document.querySelector(".del2");
const deleteDate3 = document.querySelector(".del3");

calendarGrid.addEventListener("click", (e) => {
  if (e.target.dataset.datum === undefined) return;
  if (e.target.classList[0] === "date-unavailable") return;
  console.log(e.target.classList[0]);
  if (
    e.target.dataset.datum === tempDates[1] ||
    e.target.dataset.datum === tempDates[2] ||
    e.target.dataset.datum === tempDates[3]
  ) {
    alert("Datum al geselecteerd");
    return;
  }
  if (datesCount === 0) {
    tempDates[1] = e.target.dataset.datum;
    datesCount++;

    row1.classList.remove("hidden");

    date1.textContent = tempDates[1];
    date2.textContent = tempDates[2];
    date3.textContent = tempDates[3];

    return;
  }
  if (datesCount === 1) {
    tempDates[2] = e.target.dataset.datum;
    datesCount++;

    row2.classList.remove("hidden");

    date1.textContent = tempDates[1];
    date2.textContent = tempDates[2];
    date3.textContent = tempDates[3];

    return;
  }
  if (datesCount === 2) {
    tempDates[3] = e.target.dataset.datum;

    row3.classList.remove("hidden");

    date1.textContent = tempDates[1];
    date2.textContent = tempDates[2];
    date3.textContent = tempDates[3];
  }
});

deleteDate1.addEventListener("click", () => {
  tempDates[1] = "";

  if (datesCount > 0) {
    datesCount--;
  }
  date1.textContent = tempDates[1];
  row1.classList.add("hidden");
});

deleteDate2.addEventListener("click", () => {
  tempDates[2] = "";

  if (datesCount > 0) {
    datesCount--;
  }

  date2.textContent = tempDates[2];
  row2.classList.add("hidden");
});

deleteDate3.addEventListener("click", () => {
  tempDates[3] = "";

  if (datesCount > 0) {
    datesCount--;
  }

  date3.textContent = tempDates[3];
  row3.classList.add("hidden");
});

let daysCount = 0;

datumBevestigen.addEventListener("click", () => {
  const days = Object.values(tempDates);
  if (date1.textContent === "") {
    alert("Kies een datum");
    return;
  }
  reservation.date = tempDates;

  days.forEach((day) => {
    if (day !== "") {
      daysCount++;
    }
    reservation.days = daysCount;
  });
  daysCount = 0;
  console.log(reservation.date);
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  page3.classList.add("hidden");
});

//Toggle 1 or 2 person

const person1 = document.querySelector(".person1");
const person2 = document.querySelector(".person2");

const roomPrices = document.querySelectorAll(".price");

person1.addEventListener("click", () => {
  person1.classList.add("person-select");
  person2.classList.remove("person-select");
  roomPrices.forEach((room) => {
    room.textContent = "€89,- Per Nacht";
  });
  reservation.totalGuests = 1;
});

person2.addEventListener("click", () => {
  person2.classList.add("person-select");
  person1.classList.remove("person-select");
  roomPrices.forEach((room) => {
    room.textContent = "€99,- Per Nacht";
  });
  reservation.totalGuests = 2;
});
