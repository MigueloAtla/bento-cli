import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Antoino from './'

describe('Antoino', () => {
  it('renders and expect nothing', () => {
    render(<Antoino />)
    expect(true).toBe(true)
  })
})