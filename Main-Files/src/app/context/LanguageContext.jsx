'use client'
import { createContext, useContext, useState, useEffect } from 'react'

// Crea el contexto con un valor por defecto más seguro
export const LanguageContext = createContext({
  language: 'es',
  toggleLanguage: () => {}
})

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang') || 'es'
      setLanguage(savedLang)
      document.documentElement.lang = savedLang
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es'
    setLanguage(newLang)
    localStorage.setItem('lang', newLang)
    document.documentElement.lang = newLang
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook con verificación de contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}