import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dededede from './'

describe('Dededede', () => {
  it('renders and expect nothing', () => {
    render(<Dededede />)
    expect(true).toBe(true)
  })
})