import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tools',
  title: 'Tools',
  type: 'document',
  fields: [
    defineField(
    {   name: 'name',
        type: 'string',
        title: 'Name'
    }),
    defineField(
    {   name: 'svgPath',
        type: 'string',
        title: 'SVG Path'
    }),
    

  ],
  
})