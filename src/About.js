import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';

function transol(lang){
    i18next.changeLanguage(lang)
  }

  function About() {
    const {t, i18n} = useTranslation()
    return (
        <div>
        <p>{t('about.1')}</p>
        <p>{t('about.2')}</p>
        </div>
    );
  }
  
  export default About;