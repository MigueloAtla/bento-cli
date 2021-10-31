import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Uwu from './'

describe('Uwu', () => {
  it('renders and expect nothing', () => {
    render(<Uwu />)
    expect(true).toBe(true)
  })
})