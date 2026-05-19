import s from './App.module.css'
import img1 from '/images/01.png'
import img2 from '/images/02.png'
import img3 from '/images/03.jpg'
import bg from '/images/bg.webp'
import mobilebg from '/images/mobilebg.jpg'
import roblox from '/images/roblox.jpg'
import contact from '/icons/Contact.webp'
import facebook from '/icons/Facebook.png'
import home from '/icons/Home.png'
import instagram from '/icons/Instagram.png'
import onlyfans from '/icons/onlyFans.png'
import Robux from '/icons/Robux.png'
import Robux2 from '/icons/Robux2.png'
import contat from '/icons/Video.webp'

function App() {
  return (
    <>
      <nav>
        <span className={s.navitems} onclick="navTo('s1')">
            <i class="fa-solid fa-house"></i>
            <a>Robux</a>
        </span>
        <span className={s.navItems} onclick="navTo('s2')">
            <i class="fa-solid fa-money-bill"></i>
            <a>Verdadeiro</a>
        </span>
        <span className={s.navItems} onclick="navTo('s3')">
            <i class="fa-solid fa-video"></i>   
            <a>Builderman</a>
        </span>
        <span className={s.navItems} onclick="navTo('s4')">
            <i class="fa-solid fa-address-book"></i>
            <a>Contato</a>
        </span>
      </nav>

      <main>
          <section id="s1">
              <h1>Roblox</h1>
              <h2>Ro- ro- ro- ronaldo</h2>
          </section>
          <section id="s2">
              <div className={s.card}>
                  <img src={img1} width="300px" height="auto" className={s.cardimg} style="border-radius: 15px;"/>
                  <div className={s.cardcontent}>
                      <h4>Robux Infinito (100% Confia)</h4>
                      <p>Clique aqui e ganhe 999.999 Robux. O único efeito colateral é seu PC começar a minerar Bitcoin pra um grupo de hackers da Estônia.</p>
                  </div>
              </div>

              <div className={s.card}>
                  <img src={img2} width="300px" height="auto" className={s.cardimg} style="border-radius: 15px;"/>
                  <div className={s.cardcontent}>
                      <h4>Builderman Agiota</h4>
                      <p>Ele não quer saber se você é criança. Se o cartão do seu pai estornar o pagamento daquela skin de dinossauro, o Builderman vai bater na sua porta.</p>
                  </div>
              </div>

              <div className={s.card}>
                  <img src={img3} width="300px" height="auto" className={s.cardimg} style="border-radius: 15px;"/>
                  <div className={s.cardcontent}>
                      <h4>Skin Lendária: O Inominável</h4>
                      <p>Uma skin tão amaldiçoada que, se você usar no MeepCity, o servidor cai e o hino do Flamengo começa a tocar no volume máximo.</p>
                      <br/>
                  </div>
              </div>
          </section>

          <section id="s3">
              <iframe width="800" height="450" src="https://www.youtube.com/embed/0Hvnq3StpP4" title="Imitando o pica-pau" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              
              <canvas id="c" style="width:100%;height:420px;display:block;"></canvas>
            </section>
            <section id="s4">
                <h3>CONTATO</h3>
                <div className={s.formulario}>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome"/>
                    <label for="assunto">Mensagem:</label>
                    <textarea id="assunto" placeholder="Digite sua mensagem"></textarea>
                    <button onclick="enviar()">ENVIAR</button>  
                </div>
            </section>
        </main>

             <footer>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Andredev-dias" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>



    </>
  )
}

export default App
