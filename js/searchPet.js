


function toggleDropdown(header) {
    const dropdown = header.parentElement;
    dropdown.classList.toggle('open');
}
function syncSlider(type) {
    const minInput = document.getElementById('age-min');
    const maxInput = document.getElementById('age-max');
    const minSlider = document.getElementById('slider-min');
    const maxSlider = document.getElementById('slider-max');

    if (type === 'min') {
        let val = parseInt(minInput.value);
        if (!isNaN(val) && val >= 0 && val <= 20) {
            minSlider.value = val;
        }
    } else {
        let val = maxInput.value;
        if (val === "20+") {
            maxSlider.value = 21;
        } else {
            let num = parseInt(val);
            if (!isNaN(num) && num >= 0 && num <= 20) {
                maxSlider.value = num;
            }
        }
    }
}

function syncInput(type) {
    const minInput = document.getElementById('age-min');
    const maxInput = document.getElementById('age-max');
    const minSlider = document.getElementById('slider-min');
    const maxSlider = document.getElementById('slider-max');

    if (type === 'min') {
        minInput.value = minSlider.value;
    } else {
        if (parseInt(maxSlider.value) === 21) {
            maxInput.value = "20+";
        } else {
            maxInput.value = maxSlider.value;
        }
    }
}

function confirmAge() {
    const min = document.getElementById('age-min').value;
    const max = document.getElementById('age-max').value;
    console.log(`Вік: від ${min} до ${max}`);
}

function toggleItem() {
    //undefined;
}