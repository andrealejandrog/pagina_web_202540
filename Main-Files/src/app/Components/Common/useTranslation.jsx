'use client'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/app/context/LanguageContext'

export const useTranslation = (namespace) => {
  const { language } = useLanguage()
  const [translations, setTranslations] = useState({})

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(`/locales/${language}/${namespace}.json`)
        const json = await data.json()
        setTranslations(json)
      } catch (error) {
        console.error('Error loading translations:', error)
      }
    }
    
    load()
  }, [language, namespace])

  return translations
}