import s from './App.module.css'
import img1 from '/images/01.png'
import img2 from '/images/02.png'
import img3 from '/images/03.jpg'
import { useEffect } from 'react'

function navTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', 
        block: 'start' })
}

function enviar() {
  const nome = document.getElementById('nome').value
  const assunto = document.getElementById('assunto').value
  alert(`Mensagem enviada!\nNome: ${nome}\nMensagem: ${assunto}`)
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(`.${s.card}`).forEach((card) => {
      observer.observe(card)
    })

    const nav = document.querySelector('nav')
    const footer = document.querySelector('footer')
 
    const handleScroll = () => {
      if (window.scrollY > 0) {
        nav.classList.add('sc')
        footer.classList.add('ft')
      } else {
        nav.classList.remove('sc')
        footer.classList.remove('ft')
      }
      if (window.scrollY > 2) {
        const newRadius = (window.scrollY / 50) + 5 + 'px'
        nav.style.borderRadius = newRadius
        footer.style.borderRadius = newRadius
      }
    }
 
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* <nav>
        <span className={s.navitems} onClick={() => navTo('s1')}>
          <i className="fa-solid fa-house"></i>
          <a>Robux</a>
        </span>
        <span className={s.navitems} onClick={() => navTo('s2')}>
          <i className="fa-solid fa-money-bill"></i>
          <a>Verdadeiro</a>
        </span>
        <span className={s.navitems} onClick={() => navTo('s3')}>
          <i className="fa-solid fa-video"></i>
          <a>Builderman</a>
        </span>
        <span className={s.navitems} onClick={() => navTo('s4')}>
          <i className="fa-solid fa-address-book"></i>
          <a>Contato</a>
        </span>
      </nav> */}

      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <div className={s.navitems}>
                <i className="fa-solid fa-house"></i>
                <a onClick={() => navTo('s1')}>Robux</a>
              </div>
              <div className={s.navitems}>
                <i className="fa-solid fa-money-bill"></i>
                <a onClick={() => navTo('s2')}>Verdadeiro</a>
              </div>
              <div className={s.navitems}>
                <i className="fa-solid fa-video"></i>
                <a onClick={() => navTo('s3')}>Builderman</a>
              </div>
              <div className={s.navitems}>
                <i className="fa-solid fa-address-book"></i>
                <a onClick={() => navTo('s4')}>Contato</a>
              </div>
            </div>
          </div>
        </div>
    </nav>

      <main>
        <section id="s1">
          <h1>Roblox</h1>
          <h2>Ro- ro- ro- ronaldo</h2>
        </section>

        <section id="s2">
          <div className={s.card}>
            <img src={img1} width="300" height="auto" className={s.cardImg} />
            <div className={s.cardContent}>
              <h4>Robux Infinito (100% Confia)</h4>
              <p>Clique aqui e ganhe 999.999 Robux. O único efeito colateral é seu PC começar a minerar Bitcoin pra um grupo de hackers da Estônia.</p>
            </div>
          </div>

          <div className={s.card}>
            <img src={img2} width="300" height="auto" className={s.cardImg} />
            <div className={s.cardContent}>
              <h4>Builderman Agiota</h4>
              <p>Ele não quer saber se você é criança. Se o cartão do seu pai estornar o pagamento daquela skin de dinossauro, o Builderman vai bater na sua porta.</p>
            </div>
          </div>

          <div className={s.card}>
            <img src={img3} width="300" height="auto" className={s.cardImg} />
            <div className={s.cardContent}>
              <h4>Skin Lendária: O Inominável</h4>
              <p>Uma skin tão amaldiçoada que, se você usar no MeepCity, o servidor cai e o hino do Flamengo começa a tocar no volume máximo.</p>
            </div>
          </div>
        </section>

        <section id="s3">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/0Hvnq3StpP4"
            title="Imitando o pica-pau"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <canvas id="c" style={{ width: '100%', height: '420px', display: 'block' }}></canvas>
        </section>

        <section id="s4">
          <h3>CONTATO</h3>
          <div className={s.formulario}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Digite seu nome" />
            <label htmlFor="assunto">Mensagem:</label>
            <textarea id="assunto" placeholder="Digite sua mensagem"></textarea>
            <button onClick={enviar}>ENVIAR</button>
          </div>
        </section>
      </main>

      <footer>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Andredev-dias" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  )
}

export default App