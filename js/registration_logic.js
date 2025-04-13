var isRegistered = false;
var isVisitor = true;

document.addEventListener("DOMContentLoaded", function () {
    changeHeader();
    console.log("DOM повністю завантажено!");
});
  

function goToNextPage(href) {
    window.location.href = href;
}

function changeHeader() {
    if(isRegistered){
        document.getElementById("header").innerHTML = `
        <div class="header__container">
				<div class="header__logo">
					<img src="./assets/img/logo.svg" alt="Logo" class="logo__image" />
				</div>
	
				<nav class="header__nav">
					<ul class="nav__list">
						<li class="nav__item">
							<a href="#">Новини</a>
						</li>
						<li class="nav__item">
							<a href="#">Пошук організації</a>
						</li>
						<li class="nav__item">
							<a href="searchPet.html">Знайти тваринку</a>
						</li>
						<li class="nav__item">
							<a href="#">Створити оголошення</a>
						</li>
						<li class="nav__item">
							<a href="about-us.html">Про нас</a>
						</li>
					</ul>
				</nav>

				<div class="header__user" class="user">
					<img class="logo__image" src="assets/img/zaklad_logo.png"/>
				</div>
	
				<!-- Додати бургер-іконку тут -->
				<div class="burger-icon">
				<span></span>
				<span></span>
				<span></span>
			</div>
        `;
		document.getElementsByClassName("add-btn")[0].style.display = "block";
		if(isVisitor){
			document.getElementsByClassName("shelter-info-footer")[0].innerHTML =`
		<button onclick="favorite()" class="btn-secondary"><img class="footer-icons" src="assets/img/favorites-icon.svg" alt="Вподобані">До вподобаних</button>
		`;
		}
		else{
			document.getElementsByClassName("shelter-info-footer")[0].innerHTML =`
			<button class="btn-secondary"><img class="footer-icons" src="assets/img/icons8-settings-96 1.png" alt="налаштування">Налаштування</button>
				<button class="btn-secondary"><img class="footer-icons" src="assets/img/icons8-emergency-exit-96.png" alt="Вийти">Вийти з акаунту</button>
				
			`;
		}
    }
    else{
        document.getElementById("header").innerHTML = `
    			<div class="header__container">
				<div class="header__logo">
					<img src="./assets/img/logo.svg" alt="Logo" class="logo__image" />
				</div>
	
				<nav class="header__nav">
					<ul class="nav__list">
						<li class="nav__item">
							<a href="#">Новини</a>
						</li>
						<li class="nav__item">
							<a href="#">Пошук організації</a>
						</li>
						<li class="nav__item">
							<a href="searchPet.html">Знайти тваринку</a>
						</li>
						<li class="nav__item">
							<a href="#">Створити оголошення</a>
						</li>
						<li class="nav__item">
							<a href="about-us.html">Про нас</a>
						</li>
					</ul>
				</nav>
	
				<menu class="header__auth-menu">
					<button class="auth-menu__btn green-btn login-btn">Увійти</button>
					<button onclick="window.location.href='registration_institution.html'" class="auth-menu__btn green-btn register-btn">
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
		document.getElementsByClassName("add-btn")[0].style.display = "none";
		document.getElementsByClassName("shelter-info-footer")[0].innerHTML =`
		<button onclick="favorite()" class="btn-secondary"><img class="footer-icons" src="assets/img/favorites-icon.svg" alt="Вподобані">До вподобаних</button>
		`;
    }
}

function submitAnApplication(){
	if(isRegistered){
		goToNextPage("cabinet-chat.html");
	}
	else{
		goToNextPage("registration_institution.html");
	}
}

function favorite(){
	if(isRegistered){
		goToNextPage();
	}
	else{
		goToNextPage("registration_institution.html");
	}
}
