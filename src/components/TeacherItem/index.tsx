import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/45692957?s=460&v=4" alt="Lucas Effting"/>
            <div>
              <strong>Lucas Effting</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            LOKO
            <br/>
            Loko 2
          </p>

          <footer>
            <p>
              Preco/Hora
              <strong>R$ 100,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;