if (localStorage.getItem("isRegistered") === null) {
    localStorage.setItem("isRegistered", "false");
}
if (localStorage.getItem("isVisitor") === null) {
    localStorage.setItem("isVisitor", "false");
}
if (localStorage.getItem("isVolunteer") === null) {
    localStorage.setItem("isVolunteer", "false");
}
if (localStorage.getItem("isInstitution") === null) {
    localStorage.setItem("isInstitution", "false");
}
if (localStorage.getItem("asInstitution") === null) {
    localStorage.setItem("asInstitution", "false");
}
if (localStorage.getItem("asVolunteer") === null) {
    localStorage.setItem("asVolunteer", "false");
}

function checkIfFromCetPageChat() {
    const referrer = document.referrer;

    if (referrer.includes("cabinet-chat.html")) {
		return true;
    } else {
		return false;
    }
}
function checkIfFromCetPageFingShelter() {
    const referrer = document.referrer;

    if (referrer.includes("search-company.html")||referrer.includes("animal-card.html")) {
		return true;
    } else {
		return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    changeHeader();
    console.log("DOM повністю завантажено!");
});

function goToNextPage(href) {
    window.location.href = href;
}

function changeHeader() {
    const Registered = localStorage.getItem("isRegistered") === "true";
    const Visitor = localStorage.getItem("isVisitor") === "true";
    const isVolunteer = localStorage.getItem("isVolunteer") === "true";
    const isInstitution = localStorage.getItem("isInstitution") === "true";
	const asVolunteer = localStorage.getItem("asVolunteer") === "true";
    const asInstitution = localStorage.getItem("asInstitution") === "true";
	console.log(`Registered = ${Registered}\nVisitor = ${Visitor} \nisVolunteer = ${isVolunteer} \nisInstitution = ${isInstitution} \nasVolunteer = ${asVolunteer} \nasInstitution = ${asInstitution}`);
    if (Registered) {
        if (document.getElementById("header")) {
            document.getElementById("header").innerHTML = `
        <div class="header__container">
				<div class="header__logo">
					<a href="index.html"><img src="./assets/img/logo.svg" alt="Logo" class="logo__image" /></a>
				</div>
	
				<nav class="header__nav">
					<ul class="nav__list">
						<li class="nav__item">
							<a href="news.html">Новини</a>
						</li>
						<li class="nav__item">
							<a href="search-company.html">Пошук організації</a>
						</li>
						<li class="nav__item">
							<a href="searchPet.html">Знайти тваринку</a>
						</li>
						<li class="nav__item">
							<a href="create-advert.html">Створити оголошення</a>
						</li>
						<li class="nav__item">
							<a href="about-us.html">Про нас</a>
						</li>
					</ul>
				</nav>

				<div class="header__user" class="user">
					<a onclick="goToAccount()" href="#"> <img class="logo__image" src="assets/img/zaklad_logo.png"/></a>
				</div>
	
				<!-- Додати бургер-іконку тут -->
				<div class="burger-icon">
				<span></span>
				<span></span>
				<span></span>
			</div>
        `;
        }
		if(asVolunteer && isInstitution){
			console.log("vol");
			if (document.getElementsByClassName("shelter-info-footer")[0]) {
                document.getElementsByClassName("shelter-info-footer")[0].innerHTML = `
				<button onclick="favorite()" class="btn-secondary"><img class="footer-icons" src="assets/img/favorites-icon.svg" alt="Вподобані">До вподобаних</button>
				`;
            }
		}
		else{
			console.log("not_vol");
			if (document.getElementsByClassName("shelter-info-footer")[0]) {
                document.getElementsByClassName("shelter-info-footer")[0].innerHTML = `
					<button class="btn-secondary"><img class="footer-icons" src="assets/img/icons8-settings-96 1.png" alt="налаштування">Налаштування</button>
					<button onclick="exit()" class="btn-secondary"><img class="footer-icons" src="assets/img/icons8-emergency-exit-96.png" alt="Вийти">Вийти з акаунту</button>
				`;
            }
		}
		if(asInstitution){
			console.log("inst");
			if (document.getElementsByClassName("shelter-info-footer")[0]) {
                document.getElementsByClassName("shelter-info-footer")[0].innerHTML = `
					<button class="btn-secondary"><img class="footer-icons" src="assets/img/icons8-settings-96 1.png" alt="налаштування">Налаштування</button>
					<button onclick="exit()" class="btn-secondary"><img class="footer-icons" src="assets/img/icons8-emergency-exit-96.png" alt="Вийти">Вийти з акаунту</button>
				`;
            }
		}
        if (document.getElementsByClassName("add-btn")[0]) {
            document.getElementsByClassName("add-btn")[0].style.display = "block";
        }
        
    } else {
        console.log(",,n,n");
        if (document.getElementById("header")) {
            document.getElementById("header").innerHTML = `
    			<div class="header__container">
				<div class="header__logo">
					<a href="index.html"><img src="./assets/img/logo.svg" alt="Logo" class="logo__image" /></a>
				</div>
	
				<nav class="header__nav">
					<ul class="nav__list">
						<li class="nav__item">
							<a href="news.html">Новини</a>
						</li>
						<li class="nav__item">
							<a href="search-company.html">Пошук організації</a>
						</li>
						<li class="nav__item">
							<a href="searchPet.html">Знайти тваринку</a>
						</li>
						<li class="nav__item">
							<a href="create-advert.html">Створити оголошення</a>
						</li>
						<li class="nav__item">
							<a href="about-us.html">Про нас</a>
						</li>
					</ul>
				</nav>
	
				<menu class="header__auth-menu">
					<button class="auth-menu__btn green-btn login-btn">Увійти</button>
					<button onclick="window.location.href='registration_volunteer.html'" class="auth-menu__btn green-btn register-btn">
						Зареєструватися
					</button>
				</menu>
	
				<!-- Додати бургер-іконку тут -->
				<div class="burger-icon">
				<span></span>
				<span></span>
				<span></span>
			</div>
        `; 
        }
        if (document.getElementsByClassName("add-btn")[0]) {
            document.getElementsByClassName("add-btn")[0].style.display = "none";
        }
        if (document.getElementsByClassName("shelter-info-footer")[0]) {
            document.getElementsByClassName("shelter-info-footer")[0].innerHTML = `
		<button onclick="favorite()" class="btn-secondary"><img class="footer-icons" src="assets/img/favorites-icon.svg" alt="Вподобані">До вподобаних</button>
		`;
        }
    }
	if(checkIfFromCetPageFingShelter()){
		if(document.getElementById("edit-profile-btn")){
			document.getElementById("edit-profile-btn").style.display = "none";
		}
		if(document.getElementById("btn_chat")){
			document.getElementById("btn_chat").style.display = "none";
		}
		if(document.getElementsByClassName("add-btn")[0]){
			document.getElementsByClassName("add-btn")[0].style.display = "none";
		}
		if (document.getElementsByClassName("shelter-info-footer")[0]) {
            document.getElementsByClassName("shelter-info-footer")[0].innerHTML = `
		<button onclick="favorite()" class="btn-secondary"><img class="footer-icons" src="assets/img/favorites-icon.svg" alt="Вподобані">До вподобаних</button>
		`;
        }
	}
}

function favorite() {
	if(checkIfFromCetPageChat()){
		localStorage.setItem("isVolunteer", "true");
		localStorage.setItem("isInstitution", "false");
	}
    const isRegistered = localStorage.getItem("isRegistered") === "true";
    if (isRegistered) {
        goToNextPage();
    } else {
        goToNextPage("registration_institution.html");
    }
}

function addAnimal() {
	if(checkIfFromCetPageChat()){
		localStorage.setItem("isVolunteer", "true");
		localStorage.setItem("isInstitution", "false");
	}
    goToNextPage("create-advert.html");
}

function register_volunteer() {
	if(checkIfFromCetPageChat()){
		localStorage.setItem("isVolunteer", "true");
		localStorage.setItem("isInstitution", "false");
	}
    localStorage.setItem("isRegistered", "true");
    localStorage.setItem("isVolunteer", "true");
	localStorage.setItem("asVolunteer", "true");
    goToNextPage("index.html");
}

function register_institution() {
	if(checkIfFromCetPageChat()){
		localStorage.setItem("isVolunteer", "true");
		localStorage.setItem("isInstitution", "false");
	}
    localStorage.setItem("isRegistered", "true");
    localStorage.setItem("isInstitution", "true");
	localStorage.setItem("asInstitution", "true");
    goToNextPage("index.html");
}

function exit() {
	if(checkIfFromCetPageChat()){
		localStorage.setItem("isVolunteer", "true");
		localStorage.setItem("isInstitution", "false");
	}
    localStorage.setItem("isRegistered", "false");
    localStorage.setItem("isVisitor", "false");
    localStorage.setItem("isVolunteer", "false");
    localStorage.setItem("isInstitution", "false");
    goToNextPage("searchPet.html");
}

function createAdvert() {
	if(checkIfFromCetPageChat()){
		localStorage.setItem("isVolunteer", "true");
		localStorage.setItem("isInstitution", "false");
	}
    const isRegistered = localStorage.getItem("isRegistered") === "true";
    if (isRegistered) {
        goToAccount();
    } else {
        goToNextPage("registration_volunteer.html");
    }
}

function goToAccount() {
	if(checkIfFromCetPageChat()){
		localStorage.setItem("isVolunteer", "true");
		localStorage.setItem("isInstitution", "false");
	}
    const isVolunteer = localStorage.getItem("isVolunteer") === "true";
    const isInstitution = localStorage.getItem("isInstitution") === "true";
    if (isVolunteer) {
        goToNextPage("cabinet-volunteer.html");
    }
    if (isInstitution) {
        goToNextPage("cabinet-shelter.html");
    }
}

function openChat() {
    localStorage.setItem("isVolunteer", "false");
	localStorage.setItem("isInstitution", "true");
	goToNextPage("cabinet-chat.html");
}

function openAccShelter(){
	if(checkIfFromCetPageChat()){
		localStorage.setItem("isVolunteer", "true");
		localStorage.setItem("isInstitution", "false");
	}
	localStorage.setItem("isVolunteer", "true");
	goToNextPage("cabinet-shelter.html");
}