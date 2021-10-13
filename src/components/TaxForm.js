import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import CheckboxGroup from './CheckboxGroup'
import { ITEMS } from './../utilities/constants'
import validateInputs from './../utilities/validation'
import wordsToNumbers from './../utilities/wordsToNumbers'
import closeIcon from '../images/closeIcon.svg'

const allItemsIds = ITEMS.map(({ id }) => id.toString())
const bracelets = ITEMS.filter((item) => item.category?.name === 'Bracelets')
const otherItems = ITEMS.filter(({ category }) => !category)
const totalItems = ITEMS.length

const TaxForm = ({ handleSubmit }) => {
  const initialValues = {
    applicable_items: [],
    applied_to: '',
    name: '',
    rate: 0,
    bracelets: false,
    others: false,
    search: '',
  }

  const handleRateOnBlur = (
    event,
    handleBlur,
    setFieldValue,
    values,
    errors
  ) => {
    handleBlur(event)
    const number = errors.name ? 0 : wordsToNumbers(values.name).number
    setFieldValue('rate', number)
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  return (
    <div className='form-box'>
      <h1 className='form-title'>Add Tax</h1>
      <Formik
        validate={(values) => validateInputs(values, totalItems)}
        initialValues={initialValues}
        onSubmit={async (values) => {
          await sleep(500)
          handleSubmit(values)
        }}
      >
        {({
          values,
          isSubmitting,
          setFieldValue,
          resetForm,
          errors,
          handleBlur,
        }) => (
          <Form>
            <div className='form-group'>
              <div className='form-group__inner'>
                <div role='group' aria-label='rate' className='rate-group'>
                  <div className='rate-inputs'>
                    <Field
                      type='text'
                      name='name'
                      className='rate-input__name'
                      autoComplete='off'
                      aria-label='rate in words'
                      placeholder='Enter rate in words'
                      onBlur={(event) =>
                        handleRateOnBlur(
                          event,
                          handleBlur,
                          setFieldValue,
                          values,
                          errors
                        )
                      }
                    />
                    <div className='rate-number-box'>
                      <Field
                        type='text'
                        name='rate'
                        disabled
                        className='rate-input__number'
                        aria-label='rate in number'
                      />
                      <small className='percent-sign'>%</small>
                    </div>
                  </div>
                  <ErrorMessage
                    name='name'
                    className='error'
                    component='small'
                    role='alert'
                  />
                </div>
                <div
                  role='group'
                  aria-label='items to be applied to'
                  className={`radio-group`}
                >
                  <div className={`radio-group__inner`}>
                    <label>
                      <Field
                        type='radio'
                        name='applied_to'
                        value='all'
                        className='radio-button'
                        onClick={() => {
                          setFieldValue('applicable_items', allItemsIds)
                          setFieldValue('bracelets', true)
                          setFieldValue('others', true)
                        }}
                      />
                      <span>Apply to all items in collection</span>
                    </label>
                    <label>
                      <Field
                        type='radio'
                        name='applied_to'
                        value='some'
                        className='radio-button'
                      />
                      <span>Apply to specific items</span>
                    </label>
                  </div>

                  <ErrorMessage
                    name='applied_to'
                    className='error'
                    component='small'
                    role='alert'
                  />
                </div>
              </div>
            </div>

            <div className='form-group'>
              <div className='form-group__inner'>
                <div role='searchbox' className='search-box'>
                  <Field
                    type='text'
                    name='search'
                    placeholder='Search Items'
                    aria-label='search'
                  />
                </div>
                <div
                  role='group'
                  aria-label='applicable items'
                  className='applicable-items-group'
                >
                  <ul>
                    <CheckboxGroup
                      items={bracelets}
                      category='bracelets'
                      setFieldValue={setFieldValue}
                      values={values}
                    />
                    <CheckboxGroup
                      items={otherItems}
                      category='others'
                      setFieldValue={setFieldValue}
                      values={values}
                    />
                  </ul>
                  <ErrorMessage
                    name='applicable_items'
                    className='error'
                    component='small'
                    role='alert'
                  />
                </div>
              </div>
            </div>

            <div className='button-group'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='btn btn--submit'
              >
                Apply tax to {values.applicable_items.length} item(s)
              </button>
              <button
                type='button'
                className='btn btn--reset'
                onClick={resetForm}
                title='Reset form'
              >
                <img src={closeIcon} alt='reset' width={24} height={24} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaxForm
