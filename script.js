var form = document.querySelector('form');
var text = document.querySelector('.name');
var number = document.querySelector('.number');
var symbol = document.querySelector('.symbol');
var generated = document.querySelector('.generated');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let generatedPassword = [];
    Array.from(text.value).forEach(item=>{
        generatedPassword.push(item);
    });

    Array.from(number.value).forEach(item=>{
        generatedPassword.push(item);
    });

    Array.from(symbol.value).forEach(item=>{
        generatedPassword.push(item);
    })

    const password = generatedPassword[0] + generatedPassword[2] + generatedPassword[10] + generatedPassword[12] + generatedPassword[6] + generatedPassword[8];
    generated.textContent = `Generated Password: ${password}`;
})