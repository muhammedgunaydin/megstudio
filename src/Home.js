import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="Home">
      <img src={require('../src/assets/img/backg.png')} alt="Background" />
      <header className="Home-header">
        <p className="indextext">
          MEG Studio is a mobile application developer and publisher that has
          been growing since 2022.
        </p>
        <div class="flex-grid-center">
          <a href='https://play.google.com/store/apps/dev?id=9201619571273451657&hl=tr&gl=US' target='_blank' class="pure-button fuller-button white">PLAY STORE</a>
          <a href='https://t.me/CarlSuo' target='_blank' class="pure-button fuller-button blue">TELEGRAM</a>
        </div>
        <div class="flex-grid-center">
        <a class="pure-button fuller-button red">GMAIL:mamygnydn@gmail.com</a>
        </div>
      </header>
    </div>
  )
}

export default Home
