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
    if(Registered){
		if(document.getElementById("header")){
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
		if(document.getElementsByClassName("add-btn")[0]){
			document.getElementsByClassName("add-btn")[0].style.display = "block";
		}
		if(Visitor){
			if(document.getElementsByClassName("shelter-info-footer")[0]){
				document.getElementsByClassName("shelter-info-footer")[0].innerHTML =`
				<button onclick="favorite()" class="btn-secondary"><img class="footer-icons" src="assets/img/favorites-icon.svg" alt="Вподобані">До вподобаних</button>
				`;
			}
			if(document.getElementsByClassName("animal-list")[0]){
				document.getElementsByClassName("animal-list")[0].style.display = "none";
			}
			if(document.getElementsByClassName("edit-btn")[0].style.display){
				document.getElementsByClassName("edit-btn")[0].style.display = "none";
			}
			if(document.getElementsByClassName("shelter-info-footer")[0].style.display){
				document.getElementsByClassName("shelter-info-footer")[0].style.display = "none";
			}
		}
		else{
			if(document.getElementsByClassName("shelter-info-footer")[0]){
				document.getElementsByClassName("shelter-info-footer")[0].innerHTML =`
					<button class="btn-secondary"><img class="footer-icons" src="assets/img/icons8-settings-96 1.png" alt="налаштування">Налаштування</button>
					<button onclick="exit()" class="btn-secondary"><img class="footer-icons" src="assets/img/icons8-emergency-exit-96.png" alt="Вийти">Вийти з акаунту</button>
				`;
			}
			if(document.getElementsByClassName("animal-list")[0]){
				document.getElementsByClassName("animal-list")[0].style.display = "block";
			}
			if(document.getElementsByClassName("edit-btn")[0].style.display){
				document.getElementsByClassName("edit-btn")[0].style.display = "block";
			}
			if(document.getElementsByClassName("shelter-info-footer")[0]){
				document.getElementsByClassName("shelter-info-footer")[0].style.display = "block";
			}
		}
    }
    else{
		if(document.getElementById("header")){
        document.getElementById("header").innerHTML = `
    			<div class="header__container">
				<div class="header__logo">
					<img src="./assets/img/logo.svg" alt="Logo" class="logo__image" />
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
	if(document.getElementsByClassName("add-btn")[0]){
		document.getElementsByClassName("add-btn")[0].style.display = "none";
	}
	if(document.getElementsByClassName("shelter-info-footer")[0]){
		document.getElementsByClassName("shelter-info-footer")[0].innerHTML =`
		<button onclick="favorite()" class="btn-secondary"><img class="footer-icons" src="assets/img/favorites-icon.svg" alt="Вподобані">До вподобаних</button>
		`;
	}
    }
}

function submitAnApplication(){
	const isRegistered = localStorage.getItem("isRegistered") === "true";
	if(isRegistered){
		goToNextPage("cabinet-chat.html");
	}
	else{
		goToNextPage("registration_institution.html");
	}
}

function favorite(){
	const isRegistered = localStorage.getItem("isRegistered") === "true";
	if(isRegistered){
		goToNextPage();
	}
	else{
		goToNextPage("registration_institution.html");
	}
}

function addAnimal(){
	goToNextPage("create-advert.html");
}

function register_volunteer(){
	localStorage.setItem("isRegistered", "true");
	localStorage.setItem("isVolunteer", "true");
	goToNextPage("searchPet.html");
}

function register_institution(){
	localStorage.setItem("isRegistered", "true");
	localStorage.setItem("isInstitution", "true");
	goToNextPage("searchPet.html");
}

function exit(){
	localStorage.setItem("isRegistered", "false");
	localStorage.setItem("isVisitor", "false");
	localStorage.setItem("isVolunteer", "false");
	localStorage.setItem("isInstitution", "false");
	goToNextPage("searchPet.html");
}

function listAnimals(){
	const isVisitor = localStorage.getItem("isVisitor") === "true";
	if(isVisitor){

	}
}

function createAdvert(){
	const isRegistered = localStorage.getItem("isRegistered") === "true";
	const isVolunteer = localStorage.getItem("isVolunteer") === "true";
	const isInstitution = localStorage.getItem("isInstitution") === "true";
	if(isRegistered){
		goToAccount();
		goToNextPage("cabinet-volunteer.html");
	}
	else{
		goToNextPage("registration_volunteer.html");
	}
}

function goToAccount(){
	const isVolunteer = localStorage.getItem("isVolunteer") === "true";
	const isInstitution = localStorage.getItem("isInstitution") === "true";
	if(isVolunteer){
		goToNextPage("cabinet-volunteer.html");
	}
	if(isInstitution){
		goToNextPage("cabinet-shelter.html");
	}
}