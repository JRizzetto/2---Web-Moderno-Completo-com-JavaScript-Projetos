/* 

Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. 
Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

*/

function diaSemana(dia) {
    if(dia < 1){
        console.log("Número inválido")
        return
    }

    let diaDaSemana = dia % 7;

    switch(diaDaSemana) {
        case 1:
        case 0:
            console.log("Fim de semana");
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("Dia útil");
            break;
        default:
            console.log("Dia inválido");
            break;
    }
}

// Exemplos de uso
diaSemana(0);
diaSemana(1);
diaSemana(2);
diaSemana(3);
diaSemana(4);
diaSemana(5);
diaSemana(6);
diaSemana(7);

