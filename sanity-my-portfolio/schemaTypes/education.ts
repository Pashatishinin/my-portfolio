import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField(
    {   name: 'profession',
        type: 'string',
        title: 'Profession'
    }),
    defineField(
    {   name: 'institution',
        type: 'string',
        title: 'Institution'
    }),
    

  ],
  
})