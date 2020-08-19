import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';

function transol(lang){
    i18next.changeLanguage(lang)
  }

  function HomePage() {
    const {t, i18n} = useTranslation()
    return (
        <div>
            a
        <p>{t('home.1')}</p>
        <p>{t('home.2')}</p>
        </div>
    );
  }
  
  export default HomePage;