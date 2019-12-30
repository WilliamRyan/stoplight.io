export default {
  name: 'features',
  label: 'Features',
  widget: 'list',
  required: false,
  fields: [
    {
      name: 'name',
      label: 'name',
      widget: 'string',
      required: false,
    },
    {
      name: 'icon',
      label: 'icon',
      widget: 'string',
      required: false,
    },
    {
      name: 'iconStyle',
      label: 'iconStyle',
      widget: 'object',
      required: false,
      fields: [
        {
          label: 'Primary Color',
          name: '--fa-primary-color',
          widget: 'string',
          required: false,
        },
        {
          label: 'Secondary Color',
          name: '--fa-secondary-color',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      name: 'summary',
      label: 'description',
      widget: 'string',
      required: false,
    },
    {
      name: 'href',
      label: 'href',
      widget: 'string',
      required: false,
    },
  ],
};
