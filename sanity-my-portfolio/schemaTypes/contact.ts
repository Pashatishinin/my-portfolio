import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField(
    {   name: 'title',
        type: 'string',
        title: 'Title'
    }),
    defineField(
    {   name: 'link',
        type: 'string',
        title: 'Link'
    }),
    defineField(
    {   name: 'icon',
        type: 'string',
        title: 'Icon (boxicons class)'
    })

  ],
})