import en from '../locales/en.json'
import de from '../locales/de.json'

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages:{
    en,
    de
  }
})

export default i18n;

