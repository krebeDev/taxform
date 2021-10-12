import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TaxForm from './../components/TaxForm'

describe('TaxForm', () => {
  const handleSubmit = jest.fn()

  beforeEach(() => {
    handleSubmit.mockClear()
    render(<TaxForm handleSubmit={handleSubmit} />)
  })

  it('calls submit handler when input fields pass validation', async () => {
    userEvent.type(getNameField(), 'four')

    userEvent.click(
      screen.getByRole('radio', { name: /apply to specific items/i })
    )

    await waitFor(() => {
      userEvent.click(screen.getByRole('checkbox', { name: /bracelets/i }))
    })

    await clickSubmitButton()

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1)
      expect(handleSubmit).toHaveBeenCalledWith({
        applicable_items: ['14867', '14865', '14870'],
        applied_to: 'some',
        name: 'four',
        rate: 4,
        search: '',
        others: false,
        bracelets: true,
      })
    })
  })

  it('shows error messages when inputs do not pass validation', async () => {
    await clickSubmitButton()
    expect(await screen.findAllByRole('alert')).toHaveLength(3)
  })

  describe('reset button denoted with "X"', () => {
    it('clears the form on click', async () => {
      userEvent.type(getNameField(), 'twelve')
      await clickSubmitButton()
      await clickResetButton()

      await waitFor(() => {
        expect(getNameField().value).toBe('')
        expect(screen.getByLabelText(/rate in number/i).value).toBe('0')
        expect(screen.queryAllByRole('alert')).toStrictEqual([])
      })
    })
  })
})

function getNameField() {
  return screen.getByRole('textbox', {
    name: /rate in words/i,
  })
}

async function clickSubmitButton() {
  await waitFor(() => {
    userEvent.click(
      screen.getByRole('button', {
        name: /apply tax to/i,
      })
    )
  })
}

async function clickResetButton() {
  await waitFor(() => {
    userEvent.click(
      screen.getByRole('button', {
        name: /reset/i,
      })
    )
  })
}
