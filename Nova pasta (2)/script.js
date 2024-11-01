function Resposta(){
    let res = document.querySelector('input').value;

    switch (res) {
        case "A":
            // console.log("Errado");
            // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break
            case "a":
            // console.log("Errado");
            // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break;
        case "B":
            // console.log("Correto");
            // alert("Correto");
            document.querySelector('#resposta').innerHTML="Correto";
            break
            case "b":
            // console.log("Correto");
            // alert("Correto");
            document.querySelector('#resposta').innerHTML="Correto";
            break;
        case "C":
            // console.log("Errado");
            // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break
            case "c":
            // console.log("Errado");
            // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break;
        default:
            // alert("Valor não aceito");
            // console.log("Valor não aceito");
            document.querySelector('#resposta').innerHTML="Valor não aceito";
            break


    }



}