'use client'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import esData from '../locales/es.json' // Importación estática
import enData from '../locales/en.json' // Importación estática

const translations = {
  es: esData,
  en: enData
}

export const useTranslations = () => {
  const context = useContext(LanguageContext)
  
  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider')
  }

  const { language } = context

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
      if (!value) return key // Fallback silencioso
    }
    
    return value
  }

  return { t }
}