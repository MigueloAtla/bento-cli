import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blehhh from './'

describe('Blehhh', () => {
  it('renders and expect nothing', () => {
    render(<Blehhh />)
    expect(true).toBe(true)
  })
})