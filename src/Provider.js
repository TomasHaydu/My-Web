import Tareas from "../src/img/projects/tareas-photo.png";
import Poke from "../src/img/projects/poke-photo.png";
import Patient from "../src/img/projects/patient-photo.png";

const ProviderLang = {
    eng: {
      header: {
        home: "home",
        portfolio: "portfolio",
        skills: "skills",
        aboutMe: "about me",
        contact: "contact me",
      },
      home: {
        hi: "Hi!",
        im: "I'm",
        myName: "Tomás Haydukiewicz",
        front: "FRONTEND DEVELOPER",
        description:
          "Self-taught programmer with abilities to learn quickly. Easily adapted to new work environments, willing to delve into new technologies and achieve team goals. Creative, dedicated and persevering.",
      },
      portfolio: {
        title : "Portfolio",
        projects : [
           {
            title:"lista-de-tareas",
            description:"Add your tasks. Edit, delete, and check them as completed. Everything for your organization.",
            img: Tareas ,
            github:"https://github.com/TomasHaydu/Lista-de-Tareas-React-.git",
            demo:"https://tranquil-mousse-c94962.netlify.app/"
          },
           {
            title:"Poke-Finder",
            description:"A simple pokemon search engine, to enjoy many of its features and powers.",
            img: Poke ,
            github:"https://github.com/TomasHaydu/Pokemons-Finder",
            demo:"https://silver-frangollo-ee0b0b.netlify.app/"
          },
           {
            title:"Patients-Psico",
            description:"A platform to keep track of your patients, their information and manage the sessions they have had.",
            img: Patient ,
            github:"https://github.com/TomasHaydu/Patients-Psico.git",
            demo:""
          }
        ]
      },
      skills: {
        title:"Skills",
        less:"Less... :"
      },
      aboutMe: {
        title:"About Me",
        im:"I'm Tomás Haydukiewicz, I'm 25 years old, I was born in Bahía Blanca, Buenos Aires, Argentina and actually I live in Ciudad Autonoma de Buenos Aires, Buenos Aires, Argentina.",
        description:"I started studying programming because I had curiosity about this world, i always liked knowing how technology works. At first i couldn't find teachers who could motivate me and keep me inside this, until i found an online course that took all my attention and motivation. Currently i believe i found my job vocation, cause i really enjoy programming and i am so motivated to continue learning about IT world."
      },
      contact: {
        info:"Contact Info",
        city:"Buenos Aires, Argentina",
        email:"tomashaydu@gmail.com",
        LinkedIn:"https://www.linkedin.com/in/tomás-haydukiewicz-b11561267/",
        subject: "Subject",
        compose: "Compose email",
        send: "Submit",
        yourEmail: "Your e-mail"
      },
      footer: {
        text:"Design and construction by Tomás Haydukiewicz | 2023",
      }
    },



    esp: {
      header: {
        home: "inicio",
        portfolio: "portfolio",
        skills: "habilidades",
        aboutMe: "sobre mi",
        contact: "contactame",
      },
      home: {
        hi: "Hola!",
        im: "Soy",
        myName: "Tomás Haydukiewicz",
        front: "FRONTEND DEVELOPER",
        description:
          "Programador autodidacta con habilidad para aprender rápidamente, fácil adaptación a nuevos ambientes laborales, dispuesto a profundizar en nuevas tecnologías y lograr objetivos en equipo. Creativo, dedicado y perseverante."
      },
      portfolio: {
        title : "Portfolio",
        projects : [
           {
            title:"lista-de-tareas",
            description:"Agregar tus tareas, editarlas, eliminarlas y marcarlas como realizadas. Todo para organizarte.",
            img: Tareas ,
            github:"https://github.com/TomasHaydu/Lista-de-Tareas-React-.git",
            demo:"https://tranquil-mousse-c94962.netlify.app/"
          },
           {
            title:"Poke-Finder",
            description:"Un buscador simple de pokemones, para poder disfrutar de muchas de sus características y valores.",
            img: Poke ,
            github:"https://github.com/TomasHaydu/Pokemons-Finder",
            demo:"https://silver-frangollo-ee0b0b.netlify.app/"
          },
           {
            title:"Pacientes-Psico",
            description:"Un lugar donde llevar un registro de tus pacientes, su información y administrar las sesiones que han tenido.",
            img: Patient ,
            github:"https://github.com/TomasHaydu/Patients-Psico.git",
            demo:""
          }
        ]
      },
      skills: {
        title:"Habilidades",
        less:"En menor medida... "
      },
      aboutMe: {
        title:"Sobre Mi",
        im:"Soy Tomás Haydukiewicz, tengo 25 años , nací en Bahía Blanca y actualmente vivo en Buenos Aires.",
        description:"Comencé a estudiar programación por curiosidad de saber qué era de lo que tanto se habla, siempre me gustó saber el detrás de escena del mundo de la tecnología. Mi curiosidad me llevó a incursionar en distintos métodos educativos hasta encontrar el curso que me dio la motivación para comenzar a aprender. Actualmente siento que he encontrado mi vocacion laboral, ya que disfruto mucho programar y estoy muy motivado en seguir aprendiendo sobre el mundo del IT."
      },
      contact: {
        info:"Info de Contacto",
        city:"Buenos Aires, Argentina",
        email:"tomashaydu@gmail.com",
        LinkedIn:"https://www.linkedin.com/in/tomás-haydukiewicz-b11561267/",
        subject: "Asunto",
        compose: "Escriba su mensaje...",
        send: "Enviar",
        yourEmail: "Tu e-mail"
      },
      footer: {
        text:"Diseñado y construido por Tomás Haydukiewicz | 2023",
      }
    }
  };

  export default ProviderLang