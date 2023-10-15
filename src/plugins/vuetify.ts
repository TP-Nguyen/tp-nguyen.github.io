import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/lib/iconsets/mdi";
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { md } from 'vuetify/iconsets/md'
// import { custom } from '../assets/customIcon'
const vuetify = createVuetify({
     components,
     directives,
     theme: {
          defaultTheme: 'dark',
          themes: {
               light: {
                    dark: false,
                    colors: {
                         primary: '#1e90ff',
                         secondary:'#E1E7F5',
                         textPrimary:'#000',
                         textSecondary:'#535353',
                         genre:'D1D1D6',
                         detail:'#F2F2F2',
                         cube:'#FFFFFF',
                         background:'#FAF9F6',
                    }
               },
               dark: {
                    dark: true,
                    colors: {
                         primary: '#1e90ff',
                         secondary: '#44506E',
                         textPrimary:'#FAF9F6',
                         textSecondary:'#D5D5D5',
                         genre:'424242',
                         detail:'#131313',
                         cube:'#2222222',
                         background:'#1c1c1c',
                    }
               }
          }
     },
     icons: {
          defaultSet: 'fa',
          aliases,
          sets: {
               // custom,
            fa,
            mdi,
            md,
          }
        },
})

export default vuetify;