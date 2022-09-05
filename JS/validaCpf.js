function ValidaCpf(pCpf) {
    //012345678910
    //08458188724

    //crio as variaveis
    let soma, resto, dv1, dv2, i, j;

    //testo se o CPF possui 11 caracteres
    if(pCpf.length != 11) {
        return false;
    }

    //testo se o numero de cpf é igual aos numeros invalidos
    if (pCpf == 12345678909 || 
        pCpf == 00000000000 || 
        pCpf == 11111111111 || 
        pCpf == 22222222222 || 
        pCpf == 33333333333 || 
        pCpf == 44444444444 || 
        pCpf == 55555555555 || 
        pCpf == 66666666666 || 
        pCpf == 77777777777 || 
        pCpf == 88888888888 || 
        pCpf == 99999999999 ) {
        return false;
    }

    //Calculo do 1º Digito Verificador
    soma = (pCpf.charAt(0)*10) + 
            (pCpf.charAt(1)*9) +
            (pCpf.charAt(2)*8) +
            (pCpf.charAt(3)*7) +
            (pCpf.charAt(4)*6) +
            (pCpf.charAt(5)*5) +
            (pCpf.charAt(6)*4) +
            (pCpf.charAt(7)*3) +
            (pCpf.charAt(8)*2);
    
    resto = soma % 11;

    if(resto <= 1) {
        dv1 = 0;
    } else {
        dv1 = 11 - resto;
    }

    //testo se DV1 digitado é igual ao DV1 encontrado
    if(pCpf.charAt(9) != dv1) {
        return false;
    }
    
    //Calculo do 2º Digito Verificador
    soma = 0, j = 11;
    for(i = 0; i < 10; i++) {
        soma += (pCpf.charAt(i)*j);
        j--;
    }
    resto = soma % 11;
    dv2 = (resto <= 1) ? 0 : 11-resto;
    //testo se DV2 digitado é igual ao DV2 encontrado
    if(pCpf.charAt(10) != dv2) {
        return false;
    }
    //passou pela validacao
    return true;

}//fim do ValidaCpf()