import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gorochu from './'

describe('Gorochu', () => {
  it('renders and expect nothing', () => {
    render(<Gorochu />)
    expect(true).toBe(true)
  })
})