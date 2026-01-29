import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// Components
const Header = () => (
  <motion.header 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-white shadow-sm"
  >
    <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-blue-600">Your Name</h1>
      <div className="flex space-x-4">
        {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(item => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-gray-700 hover:text-blue-600 transition"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  </motion.header>
)

const Hero = () => (
  <motion.section 
    id="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen flex items-center justify-center text-center"
  >
    <div>
      <motion.img 
        src="https://picsum.photos/200/200?grayscale" 
        alt="Profile" 
        className="mx-auto rounded-full w-48 h-48 mb-6 object-cover"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Hi, I'm [Your Name]</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        A passionate software developer creating elegant solutions and beautiful interfaces.
      </p>
      <div className="flex justify-center space-x-4 mt-6">
        {[
          { icon: FaGithub, href: '#' },
          { icon: FaLinkedin, href: '#' },
          { icon: FaEnvelope, href: '#' }
        ].map(({ icon: Icon, href }) => (
          <a 
            key={href} 
            href={href} 
            className="text-gray-700 hover:text-blue-600 text-2xl transition"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </motion.section>
)

const Projects = () => (
  <section id="projects" className="bg-white">
    <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map(project => (
        <motion.div 
          key={project}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">Project {project}</h3>
          <p className="text-gray-600 mb-4">Brief description of the project.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:underline">View</a>
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)

const Skills = () => (
  <section id="skills" className="bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {['React', 'JavaScript', 'Python', 'Node.js', 'Docker'].map(skill => (
        <motion.span 
          key={skill}
          whileHover={{ scale: 1.1 }}
          className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </section>
)

const Experience = () => (
  <section id="experience" className="bg-white">
    <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
    <div className="max-w-3xl mx-auto">
      {[1, 2].map(job => (
        <motion.div 
          key={job}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 p-6 bg-gray-100 rounded-lg"
        >
          <h3 className="text-xl font-semibold">Job Title at Company</h3>
          <p className="text-gray-600 mb-4">Duration | Location</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Key responsibility or achievement</li>
            <li>Another key responsibility</li>
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
    <motion.form 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea 
          placeholder="Message" 
          rows="4" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </motion.form>
  </section>
)

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

export default App