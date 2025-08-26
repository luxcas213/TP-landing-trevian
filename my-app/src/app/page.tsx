"use client";
import { motion } from "framer-motion";
import useLenis from "@/hooks/useLenis";
import Image from "next/image";
import dynamic from "next/dynamic";

// Importar el componente 3D dinámicamente para evitar problemas de SSR
const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2" style={{ borderColor: '#6DFFD5' }}></div>
    </div>
  )
});

export default function Page() {
  useLenis();

  return (
    <main className="w-full">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-md border-b"
        style={{ 
          backgroundColor: 'rgba(2, 0, 22, 0.9)',
          borderBottomColor: 'rgba(109, 255, 213, 0.2)'
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/Logo Trevian.png"
              alt="TREVIAN Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span 
              className="text-2xl font-primary"
              style={{ color: '#6DFFD5' }}
            >
              TREVIAN
            </span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Nosotros', 'Servicios', 'Trabajo', 'Contacto'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-secondary transition-colors duration-300 hover:opacity-80"
                style={{ color: '#D2FFF2' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          <motion.button 
            className="px-6 py-2 rounded-full text-sm font-secondary font-medium transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#6DFFD5', color: '#020016' }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Contáctanos
          </motion.button>
        </div>
      </motion.header>
      {/* Hero Section */}
      <motion.section 
        id="inicio"
        className="h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{ 
          background: 'linear-gradient(180deg, #020016 0%, #020016 80%, rgba(2, 0, 22, 0.95) 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center z-10 px-6">
          <motion.h1 
            className="text-7xl md:text-9xl font-primary mb-6"
            style={{ color: '#6DFFD5' }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            TREVIAN
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-secondary"
            style={{ color: '#D2FFF2' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </motion.p>
          <motion.button 
            className="px-8 py-4 text-lg font-secondary font-medium rounded-full transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#6DFFD5', color: '#020016' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Comenzar
          </motion.button>
        </div>
        
        {/* Background Animation */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, #62E6C0 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #6DFFD5 0%, transparent 50%)',
              'radial-gradient(circle at 40% 50%, #62E6C0 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="nosotros"
        className="min-h-screen flex items-center justify-center py-20 relative"
        style={{ 
          background: 'linear-gradient(180deg, rgba(2, 0, 22, 0.95) 0%, #020016 20%, #020016 80%, rgba(2, 0, 22, 0.95) 100%)'
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-primary mb-6" style={{ color: '#6DFFD5' }}>
              Acerca de Nosotros
            </h2>
            <p className="text-lg mb-6 font-secondary" style={{ color: '#D2FFF2' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-lg font-secondary" style={{ color: '#6DFFD5' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </motion.div>
          <motion.div 
            className="h-96 rounded-2xl border-2 overflow-hidden"
            style={{ backgroundColor: 'rgba(109, 255, 213, 0.1)', borderColor: '#6DFFD5' }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Scene3D />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="servicios"
        className="min-h-screen flex items-center justify-center py-20 relative"
        style={{ 
          background: 'linear-gradient(180deg, rgba(2, 0, 22, 0.95) 0%, #020016 20%, #020016 80%, rgba(2, 0, 22, 0.95) 100%)'
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-5xl md:text-6xl font-primary text-center mb-16"
            style={{ color: '#6DFFD5' }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nuestros Servicios
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div 
                key={item}
                className="p-8 rounded-2xl text-center border-2 transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(109, 255, 213, 0.05)', 
                  borderColor: 'rgba(109, 255, 213, 0.3)' 
                }}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(109, 255, 213, 0.1)',
                  borderColor: '#6DFFD5'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: '#6DFFD5', color: '#020016' }}
                >
                  {item}
                </div>
                <h3 className="text-2xl font-primary mb-4" style={{ color: '#6DFFD5' }}>
                  Servicio {item}
                </h3>
                <p className="font-secondary" style={{ color: '#D2FFF2' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Infinite Carousel Section */}
      <motion.section 
        id="trabajo"
        className="min-h-screen flex flex-col justify-center py-20 overflow-hidden relative"
        style={{ 
          background: 'linear-gradient(180deg, rgba(2, 0, 22, 0.95) 0%, #020016 20%, #020016 80%, rgba(2, 0, 22, 0.95) 100%)'
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-primary text-center"
            style={{ color: '#6DFFD5' }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nuestro Trabajo
          </motion.h2>
        </div>
        
        {/* Infinite Carousel Container */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="flex whitespace-nowrap mb-8">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <div
                  key={`row1-${item}`}
                  className="flex-shrink-0 w-80 h-48 rounded-2xl p-6 flex flex-col justify-center relative group cursor-pointer border-2"
                  style={{ 
                    backgroundColor: 'rgba(109, 255, 213, 0.05)', 
                    borderColor: 'rgba(109, 255, 213, 0.3)' 
                  }}
                >
                  <h3 className="text-2xl font-primary mb-3" style={{ color: '#6DFFD5' }}>
                    Proyecto {item}
                  </h3>
                  <p className="text-sm font-secondary" style={{ color: '#D2FFF2' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                  </p>
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: '#6DFFD5', color: '#020016' }}
                  >
                    {item}
                  </div>
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: '#6DFFD5' }}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <div
                  key={`row1-duplicate-${item}`}
                  className="flex-shrink-0 w-80 h-48 rounded-2xl p-6 flex flex-col justify-center relative group cursor-pointer border-2"
                  style={{ 
                    backgroundColor: 'rgba(109, 255, 213, 0.05)', 
                    borderColor: 'rgba(109, 255, 213, 0.3)' 
                  }}
                >
                  <h3 className="text-2xl font-primary mb-3" style={{ color: '#6DFFD5' }}>
                    Proyecto {item}
                  </h3>
                  <p className="text-sm font-secondary" style={{ color: '#D2FFF2' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                  </p>
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: '#6DFFD5', color: '#020016' }}
                  >
                    {item}
                  </div>
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: '#6DFFD5' }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex whitespace-nowrap">
            <motion.div
              className="flex gap-6"
              animate={{ x: [-1200, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[9, 10, 11, 12, 13, 14, 15, 16].map((item, index) => (
                <div
                  key={`row2-${item}`}
                  className="flex-shrink-0 w-80 h-48 rounded-2xl p-6 flex flex-col justify-center relative group cursor-pointer border-2"
                  style={{ 
                    backgroundColor: 'rgba(109, 255, 213, 0.1)', 
                    borderColor: '#6DFFD5' 
                  }}
                >
                  <h3 className="text-2xl font-primary mb-3" style={{ color: '#6DFFD5' }}>
                    Servicio {item - 8}
                  </h3>
                  <p className="text-sm font-secondary" style={{ color: '#D2FFF2' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                  </p>
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: '#020016', color: '#6DFFD5' }}
                  >
                    {item - 8}
                  </div>
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: '#6DFFD5' }}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[9, 10, 11, 12, 13, 14, 15, 16].map((item, index) => (
                <div
                  key={`row2-duplicate-${item}`}
                  className="flex-shrink-0 w-80 h-48 rounded-2xl p-6 flex flex-col justify-center relative group cursor-pointer border-2"
                  style={{ 
                    backgroundColor: 'rgba(109, 255, 213, 0.1)', 
                    borderColor: '#6DFFD5' 
                  }}
                >
                  <h3 className="text-2xl font-primary mb-3" style={{ color: '#6DFFD5' }}>
                    Servicio {item - 8}
                  </h3>
                  <p className="text-sm font-secondary" style={{ color: '#D2FFF2' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                  </p>
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: '#020016', color: '#6DFFD5' }}
                  >
                    {item - 8}
                  </div>
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: '#6DFFD5' }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contacto"
        className="min-h-screen flex items-center justify-center py-20 relative"
        style={{ 
          background: 'linear-gradient(180deg, rgba(2, 0, 22, 0.95) 0%, #020016 50%, #020016 100%)'
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-primary mb-8"
            style={{ color: '#6DFFD5' }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contáctanos
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-12 max-w-2xl mx-auto font-secondary"
            style={{ color: '#D2FFF2' }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button 
              className="px-8 py-4 text-lg font-secondary font-medium rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#6DFFD5', color: '#020016' }}
            >
              Enviar Mensaje
            </button>
            <button 
              className="px-8 py-4 text-lg font-secondary font-medium rounded-full border-2 transition-all duration-300 hover:scale-105"
              style={{ 
                borderColor: '#6DFFD5', 
                color: '#6DFFD5',
                backgroundColor: 'transparent'
              }}
            >
              Ver Portfolio
            </button>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex justify-center space-x-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {['Email', 'Teléfono', 'LinkedIn'].map((contact, index) => (
              <div key={contact} className="text-center">
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center"
                  style={{ backgroundColor: '#6DFFD5' }}
                >
                  <span className="text-lg font-bold" style={{ color: '#020016' }}>
                    {contact[0]}
                  </span>
                </div>
                <span className="text-sm" style={{ color: '#D2FFF2' }}>
                  {contact}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-16 px-6 border-t"
        style={{ 
          backgroundColor: '#020016',
          borderTopColor: 'rgba(109, 255, 213, 0.2)'
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <motion.h3 
                className="text-3xl font-primary mb-4"
                style={{ color: '#6DFFD5' }}
              >
                TREVIAN
              </motion.h3>
              <p className="text-lg mb-6 max-w-md font-secondary" style={{ color: '#D2FFF2' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-4">
                {['F', 'T', 'I', 'L'].map((social, index) => (
                  <motion.div
                    key={social}
                    className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                    style={{ backgroundColor: 'rgba(109, 255, 213, 0.1)', color: '#6DFFD5' }}
                    whileHover={{ 
                      backgroundColor: '#6DFFD5', 
                      color: '#020016',
                      scale: 1.1
                    }}
                  >
                    <span className="font-bold">{social}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-primary mb-4" style={{ color: '#6DFFD5' }}>
                Enlaces Rápidos
              </h4>
              <ul className="space-y-2">
                {['Inicio', 'Nosotros', 'Servicios', 'Trabajo', 'Contacto'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="font-secondary transition-colors duration-300 hover:opacity-80"
                      style={{ color: '#D2FFF2' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-primary mb-4" style={{ color: '#6DFFD5' }}>
                Contacto
              </h4>
              <div className="space-y-3">
                <p className="font-secondary" style={{ color: '#D2FFF2' }}>
                  info@trevian.com
                </p>
                <p className="font-secondary" style={{ color: '#D2FFF2' }}>
                  +1 (555) 123-4567
                </p>
                <p className="font-secondary" style={{ color: '#D2FFF2' }}>
                  123 Business St, City, State 12345
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="pt-8 border-t flex flex-col md:flex-row justify-between items-center"
            style={{ borderTopColor: 'rgba(109, 255, 213, 0.2)' }}
          >
            <p className="font-secondary" style={{ color: '#D2FFF2' }}>
              © 2025 TREVIAN. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacidad', 'Términos', 'Cookies'].map((item) => (
                <a 
                  key={item}
                  href="#"
                  className="text-sm font-secondary transition-colors duration-300 hover:opacity-80"
                  style={{ color: '#D2FFF2' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}
