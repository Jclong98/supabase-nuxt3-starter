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
      /^btn-(.*)$/,
      ([, c]) =>
        `bg-${c}-500 hover:bg-${c}-700 text-${c}-50 py-2 px-4 rounded-lg font-bold disabled:saturate-0 disabled:hover:bg-${c}-500 transition duration-200 ease-in-out`,
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
