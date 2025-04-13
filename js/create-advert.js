
function toggleDropdown(header) {
    const dropdown = header.parentElement;
    dropdown.classList.toggle('open');
}

function toggleItem() {
    //undefined;
}

document.getElementById('photo-upload').addEventListener('change', function () {
    const filename = this.files[0] ? this.files[0].name : 'Файл не обрано';
    document.querySelector('.photo-filename-display').value = filename;
});