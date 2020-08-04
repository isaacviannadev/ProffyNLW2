import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/60493567?s=460&u=45ee2c64d56394687fc834339dc770ce09faebea&v=4" alt="Isaac Vianna" />
            <div>
                <strong>Isaac Vianna</strong>
                <span>Desenvolvimento de Software</span>
            </div>
        </header>
        <p>
            Entusiasta das melhores tecnologias de Desenvolvimento.
            <br/><br/>
            Apaixonado pelo Desenvolvimento de soluções para problemas reais de empresas reais, buscando o uso
            de aplicações personalizadas atravéz de tecnologias atuais e disruptivas.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 120,00</strong>
            </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
        </footer>
    </article>
    )
}

export default TeacherItem;