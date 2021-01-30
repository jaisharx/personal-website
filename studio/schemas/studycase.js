export default {
  title: 'Studycase',
  name: 'studycase',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project name',
      description: 'Name of the project title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'URL indentifier for the project',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'scheme',
      title: 'Color scheme',
      description:
        'General color scheme used when building the project case (HEX)',
      type: 'string',
    },
    {
      name: 'src',
      title: 'Preview image',
      description: 'An image to be displayed as the project preview',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      description: 'A list of keywords to described the project',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Short description of the project',
      type: 'text',
    },
    {
      name: 'align',
      title: 'Content position',
      description:
        'Position of the content to be displayed on the page ( left or right )',
      type: 'string',
    },
    {
      name: 'goals',
      title: 'Project goals',
      description: 'A list of project goals that had to be achieved',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'goal' } }],
    },
    {
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'src',
    },
  },
};
