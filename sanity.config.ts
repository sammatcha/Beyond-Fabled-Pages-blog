import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Fabled Pages',

  projectId: "cw1h8gpf",
  dataset: "production",
  basePath: '/studio', // Same basePath as defined in astro.config.mjs

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})


