import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gorogoro from './'

describe('Gorogoro', () => {
  it('renders and expect nothing', () => {
    render(<Gorogoro />)
    expect(true).toBe(true)
  })
})