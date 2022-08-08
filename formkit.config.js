import { text } from '@/inputs/text'
import { textarea } from '@/inputs/textarea'
import { email } from '@/inputs/email'
import { defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

function addAsteriskPlugin(node) {
  node.on('created', () => {
    const schemaFn = node.props.definition.schema
    node.props.definition.schema = (sectionsSchema = {}) => {
      const isRequired = node.props.parsedRules.some(
        rule => rule.name === 'required'
      )

      if (isRequired) {
        // this input has the required rule so we modify
        // the schema to add an astrics to the label.
        sectionsSchema.label = {
          children: ['$label', '*']
        }
      }
      return schemaFn(sectionsSchema)
    }
  })
}

const config = defaultConfig({
  config: {
    classes: generateClasses({
      form: {
        message: 'text-red-500 text-sm py-2 font-medium'
      },
      text: {
        inner: 'overflow-visible relative my-4',
        label:
          'formkit-invalid:peer-placeholder-shown:text-red-500 formkit-invalid:text-red-500 p-1 bg-white absolute font-medium left-3 order-2 -top-2.5 text-gray-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:left-3 text-sm peer-focus:text-sm pointer-events-none peer-focus:text-br-primary',
        input:
          'formkit-invalid:border-red-500 formkit-invalid:focus:ring-1 focus:overflow-visible formkit-invalid:focus:ring-red-500 formkit-invalid:visited:ring-0 formkit-invalid:focus-visible:border-red-500 formkit-invalid:focus:border-red-500 formkit-invalid:focus:outline-none overflow-visible border-gray-200 focus:ring-1 focus:ring-br-primary focus:border-br-primary focus:outline-none hover:border-br-primary w-full h-12 px-3 py-3 mt-1 transition-all duration-150 placeholder-transparent border rounded bg-white peer text-black focus:outline-none focus-visible:border-br-primary',
        message: 'text-red-500 text-sm py-2 font-medium'
      },
      email: {
        inner: 'w-full relative my-4 flex flex-col',
        label:
          'formkit-invalid:peer-placeholder-shown:text-red-500 formkit-invalid:text-red-500 formkit-invalid:peer-focus:text-red-500 p-1 bg-white absolute font-medium left-3 order-2 -top-2.5 text-gray-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:left-3 text-sm peer-focus:text-sm pointer-events-none peer-focus:text-br-primary',
        input:
          'formkit-invalid:text-red-500 formkit-invalid:border-red-500 formkit-invalid:focus:ring-1 formkit-invalid:focus:ring-red-500 formkit-invalid:visited:ring-0 formkit-invalid:focus-visible:border-red-500 formkit-invalid:focus:border-red-500 formkit-invalid:focus:outline-none border-gray-200 focus:ring-1 focus:ring-br-primary focus:border-br-primary focus:outline-none hover:border-br-primary w-full h-12 px-3 py-3 mt-1 transition-all duration-150 placeholder-transparent border rounded bg-white peer text-black focus:outline-none focus-visible:border-br-primary',
        message: 'text-red-500 text-sm py-2 font-medium'
      },
      textarea: {
        inner: 'relative my-4 flex flex-col',
        label:
          'formkit-invalid:peer-placeholder-shown:text-red-500 formkit-invalid:text-red-500 p-1 bg-white absolute font-medium left-3 order-2 -top-2.5 text-gray-500 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:left-3 text-sm peer-focus:text-sm pointer-events-none peer-focus:text-br-primary',
        input:
          'formkit-invalid:text-red-500 formkit-invalid:border-red-500 formkit-invalid:border-red-500 formkit-invalid:focus:ring-1 formkit-invalid:focus:ring-red-500 formkit-invalid:visited:ring-0 formkit-invalid:focus-visible:border-red-500 formkit-invalid:focus:border-red-500 formkit-invalid:focus:outline-none border-gray-200 h-40 focus:ring-1 focus:ring-br-primary focus:border-br-primary focus:outline-none hover:border-br-primary w-full h-12 px-3 py-3 mt-1 transition-all duration-150 placeholder-transparent border rounded bg-white peer text-black focus:outline-none focus-visible:border-br-primary',
        message: 'text-red-500 text-sm py-2 font-medium'
      },
      submit: {
        inner: 'my-4',
        input:
          'flex items-center justify-center w-full appearance-none flex flex-auto overflow-hidden disabled:cursor-not-allowed ring-offset-2 items-center cursor-pointer !outline-0 transition-all duration-200 ease-in-out group !pointer-events-auto'
      },
      button: {
        input:
          'flex items-center justify-center w-full appearance-none flex flex-auto overflow-hidden disabled:cursor-not-allowed ring-offset-2 items-center cursor-pointer !outline-0 transition-all duration-200 ease-in-out group !pointer-events-auto'
      }
    })
  },
  plugins: [addAsteriskPlugin],
  inputs: {
    text,
    textarea,
    email
  }
})

export default config
