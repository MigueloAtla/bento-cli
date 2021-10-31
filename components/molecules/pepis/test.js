import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Pepis from './'

describe('Pepis', () => {
  it('renders and expect nothing', () => {
    render(<Pepis />)
    expect(true).toBe(true)
  })
})