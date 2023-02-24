import Avatar1 from "../src/img/logo/avatar-normal.svg";
import MyPhoto from "../src/img/myPhoto.jpg";
import ESP from "../src/img/icons/ESP-mode.svg";
import ENG from "../src/img/icons/ENG-mode.svg";
import Dark from "../src/img/icons/dark-mode.svg";
import Light from "../src/img/icons/light-mode.svg";
import Mouse from "../src/img/decoration/mouse.svg";
import Laptop from "../src/img/decoration/laptop.svg";
import JS from "../src/img/icons/javascript.svg";
import CSS from "../src/img/icons/css3.svg";
import HTML from "../src/img/icons/html5.svg";
import ReactLogo from "../src/img/icons/react.svg";
import Redux from "../src/img/icons/redux-icon.svg";
import Git from "../src/img/icons/git.svg";
import GitHub from "../src/img/icons/github.svg";
import Tailwind from "../src/img/icons/tailwindcss.svg";
import Cypress from "../src/img/icons/cypress.svg";
import Vite from "../src/img/icons/vite.svg";
import Coffee from "../src/img/decoration/coffee.svg";
import API from "../src/img/decoration/api.svg";
import Keyboard from "../src/img/decoration/keyboard.svg";
import Coding from "../src/img/decoration/coding.svg";
import Location from "../src/img/icons/location-icon.svg";
import Email from "../src/img/icons/email-icon.svg";
import LinkedIn from "../src/img/icons/linkedin-icon.svg";
import Instagram from "../src/img/icons/instagram-icon.svg";
import Facebook from "../src/img/icons/facebook-icon.svg";

import ProviderLang from "../src/Provider.js";

import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("eng");

  const [cvLang, setCvLang] = useState(language);

  const [dark, setDark] = useState(false);

  const [menuResponsive, setMenuResponsive] = useState(false);

  const changeLang = () => {
    if (language == "eng") {
      setLanguage("esp");
      setCvLang("esp");
    } else {
      setLanguage("eng");
      setCvLang("eng");
    }
  };

  const openPDF = () => {
    window.open(`../public/documents/curriculum-${cvLang}.pdf`, "_blank");
  };

  const getText = (indication1, indication2) => {
    const text = ProviderLang[language][indication1][indication2];
    return text;
  };

  return (
    <div className={dark ? "web-dark" : "web"}>
      <nav className="header">
        <div>
          <a href="#home">
            <img src={Avatar1} alt="logo-avatar" className="header__logo" />
          </a>
        </div>
        <ul className={menuResponsive ? "header__nav-active" :"header__nav"}>
          <li className="header__nav__li">
            <a href="#home" className="header__nav__li__a">
              {getText("header", "home")}
            </a>
          </li>

          <li className="header__nav__li">
            <a href="#portfolio" className="header__nav__li__a">
              {getText("header", "portfolio")}
            </a>
          </li>

          <li className="header__nav__li">
            <a href="#skills" className="header__nav__li__a">
              {getText("header", "skills")}
            </a>
          </li>

          <li className="header__nav__li">
            <a href="#about" className="header__nav__li__a">
              {getText("header", "aboutMe")}
            </a>
          </li>

          <li className="header__nav__li">
            <a href="#contact" className="header__nav__li__a">
              {getText("header", "contact")}
            </a>
          </li>
        </ul>
        <div className="header__img">
          <img
            src={language == "eng" ? ENG : ESP}
            alt="ESP/ENG"
            className={dark ? "header__img-eng-dark" : "header__img-eng"}
            onClick={() => changeLang()}
          />
          <img
            src={dark ? Dark : Light}
            alt="light/dark mode"
            className={dark ? "header__img-theme-dark" : "header__img-theme"}
            onClick={() => setDark(!dark)}
          />
          <button
            className="header__menu"
            onClick={() => setMenuResponsive(!menuResponsive)}
          >
            <div
              className={
                menuResponsive
                  ? "header__menu__div header__menu__div-1"
                  : "header__menu__div"
              }
            ></div>
            <div
              className={
                menuResponsive
                  ? "header__menu__div header__menu__div-2"
                  : "header__menu__div"
              }
            ></div>
            <div
              className={
                menuResponsive
                  ? "header__menu__div header__menu__div-3"
                  : "header__menu__div"
              }
            ></div>
          </button>
        </div>
      </nav>
      <div className="scroll">
        <div className="home">
          <p id="home" className="help">
            .
          </p>
          <div className="home__content" id="home">
            <div className="home__content__text">
              <div className="home__content__text__presentation">
                <h1 className="home__content__text__presentation__title">
                  {getText("home", "hi")}
                </h1>
                <div className="home__content__text__presentation__container">
                  <div>
                    <h2 className="home__content__text__presentation__im">
                      {getText("home", "im")}
                    </h2>
                    <h2 className="home__content__text__presentation__name">
                      {getText("home", "myName")}
                    </h2>
                  </div>

                  <p className="home__content__text__presentation__undername">
                    {getText("home", "front")}
                  </p>
                </div>
              </div>
              <p className="home__content__text__description">
                {getText("home", "description")}
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
        <p id="portfolio" className="help">
          .
        </p>
        <div className="portfolio" id="portfolio">
          <div className="portfolio__title">
            <h2 className="portfolio__title__text">
              {getText("portfolio", "title")}
            </h2>
            <img
              src={Laptop}
              alt="laptop"
              className="portfolio__title__laptop"
            />
          </div>
          <div className="portfolio__container">
            <div className="portfolio__container__projects">
              {ProviderLang[language].portfolio.projects.map((project) => (
                <div
                  className="portfolio__container__projects__project"
                  key={project.title}
                >
                  <p className="portfolio__container__projects__project-title">
                    {project.title}
                  </p>
                  <img
                    src={project.img}
                    alt="tareas"
                    className="portfolio__container__projects__project-img"
                  />
                  <div className="portfolio__container__projects__project__hover">
                    <p className="portfolio__container__projects__project__hover-text">
                      {project.description}
                    </p>
                    <div>
                    <a
                      href={project.demo}
                      target="_blank"
                      className="portfolio__container__projects__project__hover-button"
                    >
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="portfolio__container__projects__project__hover-button"
                    >
                      GitHub
                    </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="portfolio__container__cv">
              <label className="portfolio__container__cv__label">CV</label>
              <a
                className="portfolio__container__cv__button"
                href="#porfolio"
                onClick={() => openPDF()}
              ></a>
              <div>
                <label className="portfolio__container__cv__label">ENG</label>
                <input
                  type="radio"
                  value="eng"
                  className="portfolio__container__cv__ENG"
                  checked={cvLang == "eng" ? true : false}
                  onChange={(e) => setCvLang(e.target.value)}
                />
                <label className="portfolio__container__cv__label">ESP</label>
                <input
                  type="radio"
                  value="esp"
                  className="portfolio__container__cv__ESP"
                  checked={cvLang == "esp" ? true : false}
                  onChange={(e) => setCvLang(e.target.value)}
                />
              </div>
            </div>
          </div>
          <img src={Mouse} alt="mouse" className="portfolio__mouse" />
        </div>
        <p id="skills" className="help">
          .
        </p>
        <div className="skills" id="skills">
          <div className="skills__title">
            <h2 className="skills__title-text">{getText("skills", "title")}</h2>
          </div>
          <div className="skills__container">
            <div className="skills__container__know">
              <div className="skills__container__know-1">
                <div className="skills__container__know__tec">
                  <img
                    src={JS}
                    alt="javascript"
                    className="skills__container__know__tec__logo"
                  />
                  <label className="skills__container__know__tec__label">
                    Javascript
                  </label>
                </div>
                <div className="skills__container__know__tec">
                  <img
                    src={HTML}
                    alt="html5"
                    className="skills__container__know__tec__logo"
                  />
                  <label className="skills__container__know__tec__label">
                    HTML
                  </label>
                </div>
                <div className="skills__container__know__tec">
                  <img
                    src={CSS}
                    alt="css3"
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
                      alt="react"
                      className="skills__container__know__tec__logo"
                    />
                    <img
                      src={Redux}
                      alt="redux"
                      className="skills__container__know__tec__logo"
                    />
                    <label className="skills__container__know__tec__label">
                      React (Redux)
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
                    alt="git"
                    className="skills__container__know__tec__logo"
                  />
                  <label className="skills__container__know__tec__label">
                    Git
                  </label>
                </div>
                <div className="skills__container__know__tec">
                  <img
                    src={GitHub}
                    alt="github"
                    className="skills__container__know__tec__logo"
                  />
                  <label className="skills__container__know__tec__label">
                    GitHub
                  </label>
                </div>
                <div className="skills__container__know__tec">
                  <img
                    src={Tailwind}
                    alt="tailwindscss"
                    className="skills__container__know__tec__logo"
                  />
                  <label className="skills__container__know__tec__label">
                    TailwindCSS
                  </label>
                </div>
                <div className="skills__container__know__tec">
                  <img
                    src={Cypress}
                    alt="cypress"
                    className="skills__container__know__tec__logo"
                  />
                  <label className="skills__container__know__tec__label">
                    Cypress
                  </label>
                </div>
                <div className="skills__container__know__tec">
                  <img
                    src={Vite}
                    alt="vite"
                    className="skills__container__know__tec__logo"
                  />
                  <label className="skills__container__know__tec__label">
                    Vite
                  </label>
                </div>
              </div>
            </div>
            <p
              src="divider"
              alt="divider"
              className="skills__container__divider"
            >
              ----------------
            </p>
            <div className="skills__container__less">
              <h3 className="skills__container__less__title">
                {getText("skills", "less")}
              </h3>
              <p className="skills__container__less__sass">. Sass</p>
              <p className="skills__container__less__styled">
                . Styled Components
              </p>
              <p className="skills__container__less__material">. Material UI</p>
              <p className="skills__container__less__jest">. Jest</p>
              <p className="skills__container__less__typescript">
                . TypeScript
              </p>
            </div>
          </div>
        </div>
        <p id="about" className="help">
          .
        </p>
        <div className="about" id="aboutme">
          <div className="about__decoration">
            <img src={Coffee} alt="coffee" className="about__decoration__img" />
            <img src={Coding} alt="coding" className="about__decoration__img" />
          </div>
          <div className="about__text">
            <h2 className="about__text-title">{getText("aboutMe", "title")}</h2>
            <p className="about__text-description">
              {getText("aboutMe", "im")} <br></br>
              {getText("aboutMe", "description")}
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
        <p id="contact" className="help">
          .
        </p>
        <div className="contact" id="contact">
          <div className="contact__container">
            <div className="contact__container__info">
              <h2 className="contact__container__info-title">
                {getText("contact", "info")}
              </h2>
              <div className="contact__container__info-container">
                <img
                  src={Location}
                  alt="map"
                  className={
                    dark
                      ? "contact__container__info-img-dark"
                      : "contact__container__info-img"
                  }
                />
                <p className="contact__container__info-text">
                  {getText("contact", "city")}
                </p>
              </div>
              <div className="contact__container__info-container">
                <img
                  src={Email}
                  alt="email"
                  className={
                    dark
                      ? "contact__container__info-img-dark"
                      : "contact__container__info-img"
                  }
                />
                <p className="contact__container__info-text">
                  {getText("contact", "email")}
                </p>
              </div>
              <div className="contact__container__info-container">
                <img
                  src={LinkedIn}
                  alt=""
                  className={
                    dark
                      ? "contact__container__info-img-dark"
                      : "contact__container__info-img"
                  }
                />
                <a
                  href={getText("contact", "LinkedIn")}
                  target="_blank"
                  className="contact__container__info-text-linkedin"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <form
              className="contact__container__form"
              action="https://formsubmit.co/tomashaydu@gmail.com"
              method="POST"
            >
              <div className="contact__container__form__section">
                <input
                  type="email"
                  className="contact__container__form__section-input"
                  placeholder={getText("contact", "email")}
                  name="email"
                />
              </div>
              <div className="contact__container__form__section">
                <input
                  type="text"
                  className="contact__container__form__section-input"
                  placeholder={getText("contact", "subject")}
                  name="subject"
                />
              </div>
              <div className="contact__container__form__section">
                <textarea
                  className="contact__container__form__section-textarea"
                  placeholder={getText("contact", "compose")}
                  name="compose"
                ></textarea>
              </div>
              <div className="contact__container__form__section">
                <input
                  type="submit"
                  className="contact__container__form__section-submit"
                  value={getText("contact", "send")}
                />
              </div>

              <input
                type="hidden"
                name="_next"
                value="http://127.0.0.1:5173/"
              />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
          <footer className="footer">
            <div className="footer__presentation">
              <p className="footer__presentation-text">
                {getText("footer", "text")}{" "}
              </p>
            </div>
            <div className="footer__social">
              <a
                href="https://www.instagram.com/tomashaydu/"
                target="_blank"
                className="footer__social-insta"
              >
                <img
                  src={Instagram}
                  alt="instagram"
                  className="footer__social-img"
                />
              </a>
              <a
                href="https://www.instagram.com/tomashaydu/"
                target="_blank"
                className="footer__social-fb"
              >
                <img
                  src={Facebook}
                  alt="facebook"
                  className="footer__social-img"
                />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
