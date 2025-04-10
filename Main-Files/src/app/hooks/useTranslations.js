'use client'
import { useContext, useMemo } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export const useTranslations = () => {
  // Verificación adicional del contexto
  const context = useContext(LanguageContext)
  
  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider')
  }

  const { language } = context

  const t = useMemo(() => {
    try {
      const translations = require(`../locales/${language}.json`)
      
      return (key, params = {}) => {
        try {
          const keys = key.split('.')
          let value = translations
          
          for (const k of keys) {
            value = value?.[k]
            if (value === undefined) break
          }

          return value || key
        } catch {
          return key
        }
      }
    } catch (error) {
      console.error(`Failed to load ${language} translations:`, error)
      return (key) => key // Fallback que devuelve la clave como texto
    }
  }, [language])

  return { t }
}