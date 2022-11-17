
// imposto il bottone PLAY
let playButton = document.getElementById('play');
// metto tutti i box nel addeventlistener per generarli al click
playButton.addEventListener('click', 
    function(){
        const myContainer = document.getElementById ("container");
        console.log (myContainer);
        // Genero 16 bombe
        const myArrNum = genArrNumUniciRandomMinMax(16, 1, 100);
            console.log(myArrNum);
        // sovrascrive i box per evitare che si sommino 
        myContainer.innerHTML = '';

        for (let i = 1; i <= 100; i++){
                                        // Aggiungo i parametri
            let nuovoElemento = createBox("div", "box", [i]);

            // let numeroIesimo = myArrNum[i + 1];
            // nuovoElemento.append(numeroIesimo);

            // Aggiungo il click to change 
            nuovoElemento.addEventListener('click', 
                function(){
                    // nuovoElemento.classList.toggle('clicked');
                    console.log([i]);
                    // se è una mina sarà rossa
                    if(myArrNum.includes(i)){
                        // Aggiungi classe mina
                        this.classList.add('mine');
                        const gameOver = alert('Game Over');
                    }else{
                        this.classList.add('clear');
                    }
                }
            );
            // Aggiungo nuovoElemento a myContainer
            myContainer.appendChild(nuovoElemento);

        }

    }
);




// Functions       //argomenti
function createBox(tipoElemento, classe, insertData){
    // Creo un elemento div
    const mioElemnt = document.createElement (tipoElemento);
    mioElemnt.classList.add(classe);
    // Aggiungo un parametro alla funzione per aggiungere gli elementi
    const addData = document.createTextNode(insertData);
    mioElemnt.appendChild(addData);

    return mioElemnt;
}

// Generate Random numbers
function randomInteger(min, max){
    return(Math.floor(Math.random() * ((max + 1) - min) + min));
}

function genArrNumUniciRandomMinMax(howMany, minNum, maxNum) {
    // Numero random tra min-max
    const newArr = [];
    // generare un arrey di howmany elements
    while (newArr.length < howMany){
        let newNumber = randomInteger(minNum, maxNum);
        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        }
    }
    return newArr;
}