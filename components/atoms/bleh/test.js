import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Bleh from './'

describe('Bleh', () => {
  it('renders and expect nothing', () => {
    render(<Bleh />)
    expect(true).toBe(true)
  })
})