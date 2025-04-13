var isRegistered = false;

document.addEventListener("DOMContentLoaded", function () {
    changeHeader();
    console.log("DOM повністю завантажено!");
});
  

function goToNextPage(href) {
    if(isRegistered){
        
    }
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
							<a href="#">Знайти тваринку</a>
						</li>
						<li class="nav__item">
							<a href="#">Створити оголошення</a>
						</li>
						<li class="nav__item">
							<a href="#">Про нас</a>
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
							<a href="#">Знайти тваринку</a>
						</li>
						<li class="nav__item">
							<a href="#">Створити оголошення</a>
						</li>
						<li class="nav__item">
							<a href="#">Про нас</a>
						</li>
					</ul>
				</nav>
	
				<menu class="header__auth-menu">
					<button class="auth-menu__btn green-btn login-btn">Увійти</button>
					<button class="auth-menu__btn green-btn register-btn">
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
}
