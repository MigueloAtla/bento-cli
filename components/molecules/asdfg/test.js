import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Asdfg from './'

describe('Asdfg', () => {
  it('renders and expect nothing', () => {
    render(<Asdfg />)
    expect(true).toBe(true)
  })
})