function togglePassword(event) {
    const button = event.currentTarget; // Кнопка, по якій клікнули
    const input = button.previousElementSibling; // input перед кнопкою
    const img = button.querySelector(".button_eye"); // Картинка всередині кнопки

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    img.src = isPassword ? "assets/img/eye_on.png" : "assets/img/eye-off.svg";
    img.alt = isPassword ? "Сховати пароль" : "Показати пароль";
}
