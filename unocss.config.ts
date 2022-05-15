import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// https://github.com/unocss/unocss
export default defineConfig({
  shortcuts: [
    [
      'btn',
      'bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-center disabled:saturate-0 disabled:hover:bg-emerald-500 transition duration-200 ease-in-out',
    ],
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
