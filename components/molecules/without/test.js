import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Without from './'

describe('Without', () => {
  it('renders and expect nothing', () => {
    render(<Without />)
    expect(true).toBe(true)
  })
})