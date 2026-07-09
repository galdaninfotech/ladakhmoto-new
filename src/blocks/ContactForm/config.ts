import type { Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contactForm',
  interfaceName: 'ContactFormBlock',
  fields: [
    {
        name: 'enabled',
        type: 'checkbox',
        label: 'Enabled',
        defaultValue: true,
      },
      {
        name: 'title',
        type: 'text',
      },
      {
        name: 'description',
        type: 'text',
      },
  ],
}