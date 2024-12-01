import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField(
    {   name: 'title',
        type: 'string',
        title: 'Title'
    }),
    defineField(
    {   name: 'skills',
        type: 'array',
        title: 'Skills',
        of: [
        {
          type: 'object',  
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            }
          ],
    }]
}),
    

  ],
  
})