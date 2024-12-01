import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField(
    {   name: 'title',
        type: 'string',
        title: 'Title'
    }),
    defineField(
    {   name: 'about',
        type: 'text',
        title: 'About'
    }),

    defineField(
    {   name: 'brandLink',
        type: 'string',
        title: 'Brand Link'
    }),
    defineField(
    {   name: 'projectLink',
        type: 'string',
        title: 'Project Link'
    }),
    defineField(
    {   name: 'githubLink',
        type: 'string',
        title: 'Github Link'
    }),
    defineField(
    {   name: 'cover',
        type: 'image',
        title: 'Cover',
        options: {
        hotspot: true,
      },
    }),
    defineField(
      {
        name: 'tools',
  title: 'Tools',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: { type: 'tools' }, // Указывает, что ссылки ведут на документы типа 'tools'
    },
  ],
}
    ),
    

  ],
  
})