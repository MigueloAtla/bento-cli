import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Pepe from './'

describe('Pepe', () => {
  it('renders and expect nothing', () => {
    render(<Pepe />)
    expect(true).toBe(true)
  })
})