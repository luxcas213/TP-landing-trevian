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
            {['Inicio', 'Nosotros', 'Servicios', 'Reseñas', 'Contacto'].map((item, index) => (
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
            Demo
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
            Paso a paso, hecho a medida
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
              Tevian es una empresa dedicada a la fabricación de plantillas ortopédicas personalizadas.
            </p>
            <p className="text-lg font-secondary" style={{ color: '#6DFFD5' }}>
              En trevian, creemos que cada paso cuenta y que la comodidad comienza desde abajo. Nuestras plantillas están diseñadas para proporcionar el máximo soporte y confort, adaptándose perfectamente a la forma única de tus pies.
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
            {[
              {
                id: 1,
                title: "Escaneo",
                description: "Utilizamos tecnología avanzada para escanear tu pie con precisión milimétrica, capturando cada detalle de tu anatomía única.",
                icon: "📷"
              },
              {
                id: 2,
                title: "Creación",
                description: "Generamos una plantilla completamente única para ti, diseñada específicamente según las características de tu pie y tus necesidades.",
                icon: "🛠️"
              },
              {
                id: 3,
                title: "Impresión",
                description: "Imprimimos tu plantilla en 3D utilizando materiales de la más alta calidad para garantizar durabilidad y comodidad máxima.",
                icon: "🖨️"
              }
            ].map((service, index) => (
              <motion.div 
                key={service.id}
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
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: '#6DFFD5', color: '#020016' }}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-primary mb-4" style={{ color: '#6DFFD5' }}>
                  {service.title}
                </h3>
                <p className="font-secondary" style={{ color: '#D2FFF2' }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Infinite Carousel Section */}
      <motion.section 
        id="reseñas"
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
            Reseñas de Clientes
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
              {[
                { name: "María García", review: "Es muy buena calidad, mis pies ya no me duelen después de caminar todo el día." },
                { name: "Carlos López", review: "Me cambió la pisada completamente. Ahora puedo correr sin molestias." },
                { name: "Ana Rodríguez", review: "Te cambia la vida. No sabía lo mal que estaba hasta que probé estas plantillas." },
                { name: "Luis Martín", review: "Excelente producto, mi dolor de espalda desapareció por completo." },
                { name: "Sofia Chen", review: "La mejor inversión que he hecho para mi salud. Súper recomendadas." },
                { name: "Miguel Torres", review: "Increíble diferencia desde el primer día. Mis rodillas ya no me molestan." },
                { name: "Laura Pérez", review: "Calidad excepcional y atención personalizada. Estoy muy satisfecha." },
                { name: "Roberto Silva", review: "Perfectas para mi trabajo de pie. Ya no termino exhausto." }
              ].map((testimonial, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-80 h-48 rounded-2xl p-6 flex flex-col justify-between relative group cursor-pointer border-2 text-wrap"
                  style={{ 
                    backgroundColor: 'rgba(109, 255, 213, 0.05)', 
                    borderColor: 'rgba(109, 255, 213, 0.3)' 
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3"
                      style={{ backgroundColor: '#6DFFD5', color: '#020016' }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-primary" style={{ color: '#6DFFD5' }}>
                      {testimonial.name}
                    </h3>
                  </div>
                  <p className="text-sm font-secondary italic flex-1" style={{ color: '#D2FFF2' }}>
                    "{testimonial.review}"
                  </p>
                  <div className="flex text-yellow-400 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: '#6DFFD5' }}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { name: "María García", review: "Es muy buena calidad, mis pies ya no me duelen después de caminar todo el día." },
                { name: "Carlos López", review: "Me cambió la pisada completamente. Ahora puedo correr sin molestias." },
                { name: "Ana Rodríguez", review: "Te cambia la vida. No sabía lo mal que estaba hasta que probé estas plantillas." },
                { name: "Luis Martín", review: "Excelente producto, mi dolor de espalda desapareció por completo." },
                { name: "Sofia Chen", review: "La mejor inversión que he hecho para mi salud. Súper recomendadas." },
                { name: "Miguel Torres", review: "Increíble diferencia desde el primer día. Mis rodillas ya no me molestan." },
                { name: "Laura Pérez", review: "Calidad excepcional y atención personalizada. Estoy muy satisfecha." },
                { name: "Roberto Silva", review: "Perfectas para mi trabajo de pie. Ya no termino exhausto." }
              ].map((testimonial, index) => (
                <div
                  key={`row1-duplicate-${index}`}
                  className="flex-shrink-0 w-80 h-48 rounded-2xl p-6 flex flex-col justify-between relative group cursor-pointer border-2 text-wrap"
                  style={{ 
                    backgroundColor: 'rgba(109, 255, 213, 0.05)', 
                    borderColor: 'rgba(109, 255, 213, 0.3)' 
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3"
                      style={{ backgroundColor: '#6DFFD5', color: '#020016' }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-primary" style={{ color: '#6DFFD5' }}>
                      {testimonial.name}
                    </h3>
                  </div>
                  <p className="text-sm font-secondary italic flex-1" style={{ color: '#D2FFF2' }}>
                    "{testimonial.review}"
                  </p>
                  <div className="flex text-yellow-400 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
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
              {[
                { name: "Elena Castro", review: "Mis fascitis plantar desapareció. Recomiendo 100% estas plantillas." },
                { name: "David Ruiz", review: "Trabajo 12 horas de pie y estas plantillas me salvaron la vida." },
                { name: "Patricia Vega", review: "Mi fisioterapeuta me las recomendó. Fueron un acierto total." },
                { name: "Alejandro Mora", review: "Perfectas para deportistas. Mejoré mi rendimiento notablemente." },
                { name: "Carmen Díaz", review: "Tengo diabetes y estas plantillas cuidan muy bien mis pies." },
                { name: "Fernando Gil", review: "Adiós al dolor de talones. Ahora camino sin problemas." },
                { name: "Beatriz León", review: "La comodidad es increíble. Es como caminar sobre nubes." },
                { name: "Andrés Herrera", review: "Mi postura mejoró muchísimo. Ya no tengo dolor de cadera." }
              ].map((testimonial, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-80 h-48 rounded-2xl p-6 flex flex-col justify-between relative group cursor-pointer border-2 text-wrap"
                  style={{ 
                    backgroundColor: 'rgba(109, 255, 213, 0.1)', 
                    borderColor: '#6DFFD5' 
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3"
                      style={{ backgroundColor: '#020016', color: '#6DFFD5' }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-primary" style={{ color: '#6DFFD5' }}>
                      {testimonial.name}
                    </h3>
                  </div>
                  <p className="text-sm font-secondary italic flex-1" style={{ color: '#D2FFF2' }}>
                    "{testimonial.review}"
                  </p>
                  <div className="flex text-yellow-400 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: '#6DFFD5' }}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { name: "Elena Castro", review: "Mis fascitis plantar desapareció. Recomiendo 100% estas plantillas." },
                { name: "David Ruiz", review: "Trabajo 12 horas de pie y estas plantillas me salvaron la vida." },
                { name: "Patricia Vega", review: "Mi fisioterapeuta me las recomendó. Fueron un acierto total." },
                { name: "Alejandro Mora", review: "Perfectas para deportistas. Mejoré mi rendimiento notablemente." },
                { name: "Carmen Díaz", review: "Tengo diabetes y estas plantillas cuidan muy bien mis pies." },
                { name: "Fernando Gil", review: "Adiós al dolor de talones. Ahora camino sin problemas." },
                { name: "Beatriz León", review: "La comodidad es increíble. Es como caminar sobre nubes." },
                { name: "Andrés Herrera", review: "Mi postura mejoró muchísimo. Ya no tengo dolor de cadera." }
              ].map((testimonial, index) => (
                <div
                  key={`row2-duplicate-${index}`}
                  className="flex-shrink-0 w-80 h-48 rounded-2xl p-6 flex flex-col justify-between relative group cursor-pointer border-2 text-wrap"
                  style={{ 
                    backgroundColor: 'rgba(109, 255, 213, 0.1)', 
                    borderColor: '#6DFFD5' 
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3"
                      style={{ backgroundColor: '#020016', color: '#6DFFD5' }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-primary" style={{ color: '#6DFFD5' }}>
                      {testimonial.name}
                    </h3>
                  </div>
                  <p className="text-sm font-secondary italic flex-1" style={{ color: '#D2FFF2' }}>
                    "{testimonial.review}"
                  </p>
                  <div className="flex text-yellow-400 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
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
            ¿Listo para dar el siguiente paso? Completa el formulario o contáctanos directamente para recibir asesoramiento personalizado sobre tus plantillas ortopédicas a medida.
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
              Solicitar Demo
            </button>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex justify-center space-x-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {['Email', 'Teléfono', 'LinkedIn'].map((contact) => (
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
                En TREVIAN, estamos comprometidos con tu bienestar. Nuestras plantillas ortopédicas personalizadas están diseñadas para ofrecerte el máximo confort y soporte en cada paso que das.
              </p>
              <div className="flex space-x-4">
                {['F', 'T', 'I', 'L'].map((social) => (
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
                {['Inicio', 'Nosotros', 'Servicios', 'Reseñas', 'Contacto'].map((link) => (
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
                  ORT Argentina Buenos Aires
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
