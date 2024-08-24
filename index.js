const button = document.getElementById('btn-counter');
const heading = document.getElementById('txt-counter');
const isUndefinedOrNull = element => element === undefined || element === null;
const isAnyUndefined = () => isUndefinedOrNull(button) || isUndefinedOrNull(heading);

if(isAnyUndefined(button, heading)) {
    alert('One of the required elements is undefined');
    window.close();
}
else {
    let amount = 0;
    button.addEventListener('click', () => {
        amount++;
        heading.textContent = String.prototype.concat('You\'ve clicked the button ', amount.toString(), ' times');
    });
}
