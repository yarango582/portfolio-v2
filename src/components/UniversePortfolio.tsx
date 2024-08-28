import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, Moon, Sun, Github, Linkedin, Mail, MessageCircle, Gamepad, Smartphone, Clapperboard } from 'lucide-react'
import { IntlProvider, FormattedMessage, useIntl } from 'react-intl'
import avatar from '../assets/avatar.jpg';

const useLocalStorage = (key: any, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

const messages: { [key: string]: { [key: string]: string } } = {
  es: {
    'title': 'Desarrollador Full-Stack, especializado en backend',
    'about': 'Sobre Mí',
    'aboutText': '¡Saludos! Soy Yeison, Así como el universo está en constante expansión, también lo está mi conocimiento de las tecnologías de vanguardia y las mejores prácticas en desarrollo web.',
    'projects': 'Mis Proyectos Cósmicos',
    'contact': 'Contáctame',
    'contactText': '¿Listo para embarcarte en un viaje cósmico de codificación? ¡Conectemos!',
    'project1': 'Juego tipo tetris',
    'project1Desc': 'Ubica los bloques correctamente para sumar puntos',
    'project2': 'Chat basico',
    'project2Desc': 'Puedes chatear con tus amigos',
    'project3': 'Buscador de peliculas',
    'project3Desc': 'Permite consultar las peliculas más populares y su reparto, Nota: esta es una aplicacion para ver desde movil o tablet preferiblemente',
    'project4': 'Rastreador de Constelaciones',
    'project4Desc': 'Aplicación móvil para entusiastas de la observación de estrellas',
  },
  en: {
    'title': 'Full-Stack Developer, Backend Specialist',
    'about': 'About Me',
    'aboutText': 'Greetings, earthling! I\'m Yeison Arango, Just as the universe is in constant expansion, so is my knowledge of cutting-edge technologies and best practices in web development.',
    'projects': 'My Cosmic Projects',
    'contact': 'Contact Me',
    'contactText': 'Ready to embark on a cosmic coding journey? Let\'s connect!',
    'project1': 'Tetris Game',
    'project1Desc': 'Place the blocks correctly to score points',
    'project2': 'Basic Chat',
    'project2Desc': 'You can chat with your friends',
    'project3': 'Movie Finder',
    'project3Desc': 'Allows you to consult the most popular movies and their cast, Note: this is an application to watch from mobile or tablet preferably',
    'project4': 'Constellation Tracker',
    'project4Desc': 'Mobile app for stargazing enthusiasts',
  },
}

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', true)
  const [lang, setLang] = useLocalStorage('lang', 'en')

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <IntlProvider messages={messages[lang]} locale={lang} defaultLocale="en">
      <PortfolioContent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} lang={lang} setLang={setLang} />
    </IntlProvider>
  )
}

function PortfolioContent({ isDarkMode, setIsDarkMode, lang, setLang }
  : { isDarkMode: boolean, setIsDarkMode: Function, lang: string, setLang: Function }
) {
  const intl = useIntl()

  const projects = [
    { title: intl.formatMessage({ id: 'project1' }), desc: intl.formatMessage({ id: 'project1Desc' }), icon: <Gamepad className="w-6 h-6" />, tech: ['React', 'Canvas', 'Javascript'], link: 'https://tetris-web.zeabur.app/' },
    { title: intl.formatMessage({ id: 'project2' }), desc: intl.formatMessage({ id: 'project2Desc' }), icon: <MessageCircle className="w-6 h-6" />, tech: ['HTML', 'Javascript', 'Node.js', 'Socket.io'], link: 'https://basic-chat.zeabur.app/' },
    { title: intl.formatMessage({ id: 'project3' }), desc: intl.formatMessage({ id: 'project3Desc' }), icon: <Clapperboard className="w-6 h-6" />, tech: ['Dart', 'Flutter'], link: 'https://find-the-movie.zeabur.app/#home' },
    { title: intl.formatMessage({ id: 'project4' }), desc: intl.formatMessage({ id: 'project4Desc' }), icon: <Smartphone className="w-6 h-6" />, tech: ['React Native', 'GraphQL'], link: '#' },
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} text-gray-100 overflow-hidden relative transition-colors duration-500`}>
      {isDarkMode && [...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Realistic planets */}
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #ffa500, #ff4500)',
          boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.5), 0 0 20px rgba(255,165,0,0.5)',
          top: isDarkMode ? '75%' : '25%',
          left: '10%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #4169e1, #000080)',
          boxShadow: 'inset -8px -8px 16px rgba(0,0,0,0.5), 0 0 30px rgba(65,105,225,0.5)',
          bottom: '10%',
          right: '10%',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
      />

      {/* Sun */}
      <motion.div
        className="absolute w-24 h-24 rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #ffff00, #ffa500)',
          boxShadow: '0 0 50px rgba(255,255,0,0.8)',
          top: isDarkMode ? '100%' : '0%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{
          top: isDarkMode ? ['100%', '100%'] : ['0%', '0%'],
        }}
        transition={{ duration: 1 }}
      />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={avatar}
              alt="Yeison Arango"
              className="w-24 h-24 rounded-full mr-4 border-2 border-purple-500"
            />
            <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Yeison Arango</h1>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className={`p-2 rounded-full mr-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </header>
        <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-purple-300' : 'text-purple-700'} text-center mb-12`}>
          <FormattedMessage id="title" />
        </p>

        <main>
          <section className="mb-16">
            <h2 className={`text-3xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Star className="mr-2" /> <FormattedMessage id="about" />
            </h2>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <FormattedMessage id="aboutText" />
            </p>
          </section>

          <section className="mb-16">
            <h2 className={`text-3xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Moon className="mr-2" /> <FormattedMessage id="projects" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.a
                  href={project.link}
                  key={index}
                  className={`${isDarkMode ? 'bg-indigo-900' : 'bg-indigo-100'} p-6 rounded-lg cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target='_blank'
                  rel="noreferrer"
                >
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <h3 className={`text-xl font-semibold ml-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  </div>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-indigo-800 text-indigo-200' : 'bg-indigo-200 text-indigo-800'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          <section>
            <h2 className={`text-3xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Mail className="mr-2" /> <FormattedMessage id="contact" />
            </h2>
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <FormattedMessage id="contactText" />
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/yarango582" target='_blank' rel="noreferrer" className={`${isDarkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-purple-700'} transition-colors`}>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yarango/" target='_blank' rel="noreferrer" className={`${isDarkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-purple-700'} transition-colors`}>
                <Linkedin size={24} />
              </a>
              <a href="mailto:yeisonarango03@gmail.com" target='_blank' rel="noreferrer" className={`${isDarkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-purple-700'} transition-colors`}>
                <Mail size={24} />
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}