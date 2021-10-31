import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Kuku from './'

describe('Kuku', () => {
  it('renders and expect nothing', () => {
    render(<Kuku />)
    expect(true).toBe(true)
  })
})