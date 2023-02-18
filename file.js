let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText=='DEL'){
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
            
        }
        else if(buttonText=='√'){
            screenValue=Math.sqrt(screenValue);
            screen.value=screenValue;
        }
        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}











/*else if(buttonText=='sin'){
    screenValue=Math.sin(screenValue);
    screen.value=screenValue;

}
else if(buttonText=='cos'){
    screenValue=Math.cos(screenValue);
    screen.value=screenValue;
}
else if(buttonText=='tan'){
    screenValue=Math.tan(screenValue);
    screen.value=screenValue;
}
else if(buttonText=='log'){
    screenValue=Math.log(screenValue);
    screen.value=screenValue;
}*/