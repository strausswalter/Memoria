function ValidaEmail(pEmail) {
    //012345678910
    //mar@mar.com
    //1234567891011
    let posArroba = pEmail.indexOf('@');
    let posPonto = pEmail.indexOf('.', posArroba);
    //testo se o email possui um arroba '@'
    if(posArroba == -1) {
        return false;
    }
    //testo se o '@' é o primeiro caractere
    //if(pEmail.charAt(0) == '@')
    if(posArroba == 0) {
        return false;
    }
    //testo se o @ é o último caractere
    if(posArroba == pEmail.length-1) {
        return false;
    }
    //testo se tem ponto (.) depois do arroba
    if(posPonto < posArroba) {
        return false;
    }
    //testo se o '.' é o último caractere
    if(posPonto == pEmail.length-1) {
        return false;
    }
    return true;

}//fim do ValidaEmail()