function sum(a,b) {
    return a+b;
};

function sub(a,b){
    return a-b
};

function greaterThanZero(num){
    if(num > 0){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    sum,
    sub,
    greaterThanZero
};