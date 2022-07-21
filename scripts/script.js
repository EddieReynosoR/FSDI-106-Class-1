// Hello function
function Hello(Name){
    let lastName = "Reynoso";
    console.log("Hello " + Name + " " + lastName);
}


function Sum(n1, n2){
    console.log(n1+n2);
    return n1 + n2;
}



function exec1(){
    for (let i = 0; i <= 20; i++) {
        if(i!=7 && i!=13){
            console.log(i);
        }
        
    }



    let name = "";

    if(!name){
        console.error("Name is required.")
    }
}


function exer2(){
    let numbers = [123,3,-1,12,-123,45,10,20,203, -2, -29, 12,123];

    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]<0){
            console.log(numbers[i]);

        }

        total += numbers[i];
    }

    console.log(total);
}


function init(){
    console.log("Intro page");

    let myName = "Eduardo";

    Hello(myName);



    Sum(5,5);


    let res = Sum(105,11);
    console.log(res);

    // access any DOM element



    exec1();
    exer2();
}

window.onload = init;