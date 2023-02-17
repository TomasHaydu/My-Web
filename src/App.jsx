import Avatar1 from "../src/logo/avatar-normal.svg";
import AvatarHover from "../src/logo/avatar-hover.svg";
import MyPhoto from "../src/img/my-photo.jpg";
import ESP from "../src/icons/ESP-mode.svg";
import ENG from "../src/icons/ENG-mode.svg";
import Dark from "../src/icons/dark-mode.svg";
import Light from "../src/icons/light-mode.svg";
import Mouse from "../src/decoration/mouse.svg";
import Laptop from "../src/decoration/laptop.svg";
import Tareas from "../src/img/tareas-photo.png";
import Poke from "../src/img/poke-photo.png";
import Patient from "../src/img/patient-photo.png";
import JS from "../src/icons/javascript.svg";
import CSS from "../src/icons/css3.svg";
import HTML from "../src/icons/html5.svg";
import ReactLogo from "../src/icons/react.svg";
import Git from "../src/icons/git.svg";
import GitHub from "../src/icons/github.svg";
import Tailwind from "../src/icons/tailwindcss.svg";
import Cypress from "../src/icons/cypress.svg";
import Vite from "../src/icons/vite.svg";
import Coffee from "../src/decoration/coffee.svg";
import API from "../src/decoration/api.svg";
import Keyboard from "../src/decoration/keyboard.svg";
import Coding from "../src/decoration/coding.svg";

function App() {
  return (
    <div className="a">
      <div className="home">
        <nav className="home__header">
          <div>
            <img
              src={Avatar1}
              alt="logo-avatar"
              className="home__header__logo"
            />
          </div>
          <div className="home__header__nav">
            <ul className="home__header__nav__ul">
              <li className="home__header__nav__ul__li">Home</li>
            </ul>
            <ul className="home__header__nav__ul">
              <li className="home__header__nav__ul__li">Portfolio</li>
            </ul>
            <ul className="home__header__nav__ul">
              <li className="home__header__nav__ul__li">Skills</li>
            </ul>
            <ul className="home__header__nav__ul">
              <li className="home__header__nav__ul__li">About Me</li>
            </ul>
            <ul className="home__header__nav__ul">
              <li className="home__header__nav__ul__li">Contact</li>
            </ul>
          </div>
          <div className="home__header__img">
            <img src={ENG} alt="ESP/ENG" className="home__header__img-eng" />
            <img
              src={Dark}
              alt="light/dark mode"
              className="home__header__img-dark"
            />
          </div>
        </nav>

        <div className="home__content">
          <div className="home__content__text">
            <div className="home__content__text__presentation">
              <h1 className="home__content__text__presentation__title">
                Hola!
              </h1>
              <div className="home__content__text__presentation__container">
                <div>
                  <h2 className="home__content__text__presentation__im">Soy</h2>
                  <h2 className="home__content__text__presentation__name">
                    Tomás Haydukiewicz
                  </h2>
                </div>

                <p className="home__content__text__presentation__undername">
                  FRONTEND DEVELOPER
                </p>
              </div>
            </div>
            <p className="home__content__text__description">
              Programador autodidacta con habilidad para aprender rápidamente,
              fácil adaptación a nuevos ambientes laborales, dispuesto a
              profundizar en nuevas tecnologías y lograr objetivos en equipo.
              Creativo, dedicado y perseverante
            </p>
          </div>
          <div className="home__content__img">
            <div className="home__content__img__border-1">
              <div className="home__content__img__border-2">
                <div className="home__content__img__border-3">
                  <img
                    src={MyPhoto}
                    alt="profile-photo"
                    className="home__content__img__border__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio">
        <div className="portfolio__title">
          <h2 className="portfolio__title__text">Portfolio</h2>
          <img src={Laptop} alt="laptop" className="portfolio__title__laptop" />
        </div>
        <div className="portfolio__container">
          <div className="portfolio__container__projects">
            <div className="portfolio__container__projects__project">
              <p className="portfolio__container__projects__project-title">lista-de-tareas</p>
              <img
                src={Tareas}
                alt="tareas"
                className="portfolio__container__projects__project-img"
              />
              <div className="portfolio__container__projects__project__hover">
                <p className="portfolio__container__projects__project__hover-text">
                  Agregar tus tareas, editarlas, eliminarlas y marcarlas como
                  realizadas. Todo para organizarte.
                </p>
                <a className="portfolio__container__projects__project__hover-button">
                  Demo
                </a>
                <a className="portfolio__container__projects__project__hover-button">
                  GitHub
                </a>
              </div>
            </div>
            <div className="portfolio__container__projects__project">
            <p className="portfolio__container__projects__project-title">Poke-Finder</p>
              <img
                src={Poke}
                alt="poke"
                className="portfolio__container__projects__project-img"
              />
              <div className="portfolio__container__projects__project__hover">
                <p className="portfolio__container__projects__project__hover-text">
                  Un buscador simple de pokemones, para poder disfrutar de
                  muchas de sus características y valores.
                </p>
                <a className="portfolio__container__projects__project__hover-button">
                  Demo
                </a>
                <a className="portfolio__container__projects__project__hover-button">
                  GitHub
                </a>
              </div>
            </div>
            <div className="portfolio__container__projects__project">
            <p className="portfolio__container__projects__project-title">Pacientes-Psico</p>
              <img
                src={Patient}
                alt="patient"
                className="portfolio__container__projects__project-img"
              />
              <div className="portfolio__container__projects__project__hover">
                <p className="portfolio__container__projects__project__hover-text">
                  Un buscador simple de pokemones, para poder disfrutar de
                  muchas de sus características y valores.
                </p>
                <a className="portfolio__container__projects__project__hover-button">
                  Demo
                </a>
                <a className="portfolio__container__projects__project__hover-button">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio__container__cv">
            <label className="portfolio__container__cv__label">CV</label>
            <button className="portfolio__container__cv__button"></button>
            <div>
              <label>ENG</label>
              <input
                type="radio"
                value="ENG"
                className="portfolio__container__cv__ENG"
              />
              <label>ESP</label>
              <input
                type="radio"
                value="ESP"
                className="portfolio__container__cv__ESP"
              />
            </div>
          </div>
        </div>
        <img src={Mouse} alt="mouse" className="portfolio__mouse" />
      </div>

      <div className="skills">
        <div className="skills__title">
          <h2 className="skills__title-text">Habilidades</h2>
        </div>
        <div className="skills__container">
          <div className="skills__container__know">
            <div className="skills__container__know-1">
              <div className="skills__container__know__tec">
                <img
                  src={JS}
                  alt=""
                  className="skills__container__know__tec__logo"
                />
                <label className="skills__container__know__tec__label">
                  Javascript
                </label>
              </div>
              <div className="skills__container__know__tec">
                <img
                  src={HTML}
                  alt=""
                  className="skills__container__know__tec__logo"
                />
                <label className="skills__container__know__tec__label">
                  HTML
                </label>
              </div>
              <div className="skills__container__know__tec">
                <img
                  src={CSS}
                  alt=""
                  className="skills__container__know__tec__logo"
                />
                <label className="skills__container__know__tec__label">
                  CSS
                </label>
              </div>
              <div className="skills__container__know__tec">
                <div className="skills__container__know__react">
                  <img
                    src={ReactLogo}
                    alt=""
                    className="skills__container__know__tec__logo"
                  />
                  <label className="skills__container__know__tec__label">
                    React
                  </label>
                  <div className="skills__container__know__react__container">
                    <p className="skills__container__know__react__container-redux">
                      . Redux
                    </p>
                    <p className="skills__container__know__react__container-context">
                      . Context
                    </p>
                    <p className="skills__container__know__react__container-router">
                      . React-Router-Dom
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__container__know-2">
              <div className="skills__container__know__tec">
                <img
                  src={Git}
                  alt=""
                  className="skills__container__know__tec__logo"
                />
                <label className="skills__container__know__tec__label">
                  Git
                </label>
              </div>
              <div className="skills__container__know__tec">
                <img
                  src={GitHub}
                  alt=""
                  className="skills__container__know__tec__logo"
                />
                <label className="skills__container__know__tec__label">
                  GitHub
                </label>
              </div>
              <div className="skills__container__know__tec">
                <img
                  src={Tailwind}
                  alt=""
                  className="skills__container__know__tec__logo"
                />
                <label className="skills__container__know__tec__label">
                  TailwindCSS
                </label>
              </div>
              <div className="skills__container__know__tec">
                <img
                  src={Cypress}
                  alt=""
                  className="skills__container__know__tec__logo"
                />
                <label className="skills__container__know__tec__label">
                  Cypress
                </label>
              </div>
              <div className="skills__container__know__tec">
                <img
                  src={Vite}
                  alt=""
                  className="skills__container__know__tec__logo"
                />
                <label className="skills__container__know__tec__label">
                  Vite
                </label>
              </div>
            </div>
          </div>
          <p src="" alt="divider" className="skills__container__divider">
            ----------------
          </p>
          <div className="skills__container__less">
            <h3 className="skills__container__less__title">En menor medida:</h3>
            <p className="skills__container__less__sass">. Sass</p>
            <p className="skills__container__less__styled">
              . Styled Components
            </p>
            <p className="skills__container__less__material">. Material UI</p>
            <p className="skills__container__less__jest">. Jest</p>
            <p className="skills__container__less__typescript">. TypeScript</p>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about__decoration">
          <img src={Coffee} alt="coffee" className="about__decoration__img" />
          <img src={Coding} alt="coding" className="about__decoration__img" />
        </div>
        <div className="about__text">
          <h2 className="about__text-title">Sobre mi</h2>
          <p className="about__text-description">
            Soy Tomás Haydukiewicz, tengo 25 años , nací en Bahía Blanca y
            actualmente vivo en Buenos Aires. <br></br>
            Comencé a estudiar programación por curiosidad de saber qué era de
            lo que tanto se habla, siempre me gustó saber el detrás de escena
            del mundo de la tecnología. Al principio no encontraba profesores
            que lograsen atraparme en el mundo de la programación, hasta que di
            con un curso en internet que se llevó toda mi atención y motivación.
            Actualmente disfruto mucho programar y estoy muy motivado para poder
            seguir aprendiendo sobre el mundo del IT.
          </p>
        </div>
        <div className="about__decoration">
          <img src={API} alt="api" className="about__decoration__img" />
          <img
            src={Keyboard}
            alt="keyboard"
            className="about__decoration__img"
          />
        </div>
      </div>

      <div>{/* {Todo el formulario de contacto y demas} */}</div>

      <div className="contact">
        <div>
          <h2></h2>
        </div>
        <div>
          <div>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
          </div>
          <div>
            <p>Contactame</p>
            <form className="contact__form">
              <div class="contact__form__section">
                <input
                  type="text"
                  class="contact__form__section__input"
                  placeholder="E-mail"
                />
              </div>
              <div class="contact__form__section">
                <input
                  type="email"
                  class="contact__form__section__input"
                  placeholder="Asunto"
                />
              </div>
              <div class="contact__form__section">
                <textarea
                  class="contact__form__section__input"
                  placeholder="Escriba su mensaje..."
                ></textarea>
              </div>
              <div class="contact__form__section">
                <input
                  type="submit"
                  class="contact__form__section__input"
                  id="enviar"
                />
              </div>
            </form>
          </div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
