import fs from 'fs'
const basedir = process.cwd()
let config = { imports: '' }
try {
  if (fs.existsSync(`${basedir}/.bento/config.js`)) {
    config = require(`${basedir}/.bento/config.js`)
  }
} catch (err) {
  console.error(err)
}
console.log(config)
const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const atomIndexTemplate = (name, atoms) => {
  let imports = ''
  const regex = /,}/g
  atoms.length > 0 &&
    atoms.map(atom => {
      imports += ` ${capitalizeFirstLetter(atom)},`
    })
  const import_statement = `import {${imports}} from '${config.imports}/atoms'`
  let imports_clean = import_statement.replace(regex, ' }')
  let molecules = ''
  atoms.length > 0 &&
    atoms.map(atom => {
      molecules += `<${capitalizeFirstLetter(atom)} />\n    `
    })
  const capitalized_name = capitalizeFirstLetter(name)
  return `import React from 'react'
import { ${capitalized_name}Styled } from './styles'
${atoms.length > 0 ? `${imports_clean}` : ''}
const ${capitalized_name} = () => {
  return (
    <${capitalized_name}Styled>
    ${atoms.length > 0 ? molecules : ''}
    <p>${capitalized_name}</p>
    </${capitalized_name}Styled>
    )
  }
export default ${capitalized_name}
`
}

export const atomStylesTemplate = (name, type) => {
  return `import styled from 'styled-components'
import { ${type} } from 'styled-bento'
  
export const ${capitalizeFirstLetter(name)}Styled = styled(${type})\`
  /* styles go here */
\`
  `
}

export const atomTestTemplate = name => {
  const capitalized_name = capitalizeFirstLetter(name)

  return `import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ${capitalized_name} from './'

describe('${capitalized_name}', () => {
  it('renders and expect nothing', () => {
    render(<${capitalized_name} />)
    expect(true).toBe(true)
  })
})`
}

export const atomStoriesTemplate = name => {
  const capitalized_name = capitalizeFirstLetter(name)
  return `import React from 'react'
import ${capitalized_name} from './'

export default {
  title: 'Molecules/${capitalized_name}',
  component: ${capitalized_name}
}

const Template = args => <${capitalized_name} {...args} />

export const ${capitalized_name}Story = Template.bind({})
${capitalized_name}Story.args = {}`
}
