import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Torunkusu from './'

describe('Torunkusu', () => {
  it('renders and expect nothing', () => {
    render(<Torunkusu />)
    expect(true).toBe(true)
  })
})