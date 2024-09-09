import { useEffect, useState } from "react";

// Criando função Saudacao
function Saudacao() {
    //Criando estado de saudação
    const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('');

    // Chamando função de saudação e definindo um intervalo de 1 segundo
    useEffect(() => {
        atualizaSaudacao();
    }, [])

    //Criando texto de suadação de cabecalho
    function atualizaSaudacao() {

        // Ddeclarando objeto do tipo Date
        const agora = new Date();

        // Obtendo hora em inteiro exemplo 07:35:00 retorna 1
        const hora = agora.getHours();

        //Obtendo dia da semana em inteiro iniando em domingo que retorna 0 e sabado que retorna 6
        const dia = agora.getDay();

       //Declarando variavel do texto da saudação
        let textoSaudacao = '';

        // Definindo array com dias da semana
        const diaSemana = [
            'Domingo',
            'Segunda-Feira',
            'Terça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira',
            'Sabado',
        ];

        // Adicionando o dia da semana no textoSaudacao
        textoSaudacao += diaSemana[dia];

        //Adiocionando saudação ao textoSaudacao
        if (hora>=18){
            textoSaudacao += ' Boa Noite';
        }else if(hora>=12){
            textoSaudacao += ' Boa Tarde';
        }else{
            textoSaudacao += "Bom dia"
        }

        //Chamando função de atribuição
        setSaudacaoPeriodo(textoSaudacao);
    }

    return (
        <div>{saudacaoPeriodo}</div>
    )
}
export default Saudacao;
