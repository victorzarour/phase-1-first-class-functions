function receivesAFunction(callback){
    callback();
}

function callback() {
    console.log('Long time no see!')
}

function returnsANamedFunction() {
    return function sayHi() {
        // console.log('Hi!')
    }
}

function returnsAnAnonymousFunction() {
    return function (){
        console.log('Hi!')
    }
}