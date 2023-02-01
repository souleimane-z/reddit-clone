
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { extendTheme } from '@chakra-ui/react'

// // 2. Extend the theme to include custom colors, fonts, etc
// const 
// }
// const fonts = {
//     front
// }
// export const theme = extendTheme({ colors, fonts })


export const theme = extendTheme({
    colors: {
        brand: {
          100: '#ff5700',
        },
    },
    fonts: {
        body: "Open Sans, sans-serif",
    },
    styles: {
        global: () => ({
            body: {
                bg: "gray.200",
            },
        }),
    },
    components: {
        // Buttons
    },
})