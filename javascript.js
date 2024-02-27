const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listButton);
    listButton.textContent = 'Delete';
    list.appendChild(listItem);


    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    
    input.focus();

});

// function to calculate ticket price for zoo

function calculate() {
    let x = document.getElementById('price');

    let isOver18 = confirm('Click OK if you are under 18');

    if(isOver18 === true){
        x.textContent = 'Discounted price: $10';
    } else {
        x.textContent = 'Regular Price: $15';
    }
}

// function to calculate warranty

function calculateWarranty() {
    let basePrice = 20;
    let x = document.getElementById('feature').checked;

    if(feature){
        let total = basePrice + 5;
        document.getElementById('totalPrice').textContent = total;
    } else {
        document.getElementById('totalPrice').textContent = basePrice;
    }


}