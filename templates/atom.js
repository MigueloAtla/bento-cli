const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const atomIndexTemplate = name => {
  const capitalized_name = capitalizeFirstLetter(name)
  return `import React from 'react'
import { ${capitalized_name}Styled } from './styles'

const ${capitalized_name} = () => {
  return (
    <${capitalized_name}Styled>
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
  title: 'Atoms/${capitalized_name}',
  component: ${capitalized_name}
}

const Template = args => <${capitalized_name} {...args} />

export const ${capitalized_name}Story = Template.bind({})
${capitalized_name}Story.args = {}`
}
