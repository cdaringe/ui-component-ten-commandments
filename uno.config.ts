import {
  defineConfig,
  presetIcons,
  presetWind3,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
      dark: 'media',
    }),
    presetIcons({
      extraProperties: {
        // 'display': 'inline-block',
        // 'vertical-align': 'middle',
      },
    }),
  ],
})
