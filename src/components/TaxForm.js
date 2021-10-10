import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import CheckboxGroup from './CheckboxGroup'
import { ITEMS } from './../constants'
import closeIcon from './images/closeIcon.svg'
import validateInputs from './../utilities/validation'
import wordsToNumbers from './../utilities/wordsToNumbers'

const allItemsIds = ITEMS.map(({ id }) => `${id}`)
const bracelets = ITEMS.filter((item) => item.category?.name === 'Bracelets')
const itemsWithoutCategory = ITEMS.filter(({ category }) => !category)

const TaxForm = () => {
  const taxDetails = {
    applicable_items: [],
    applied_to: '',
    name: '',
    rate: 0,
    bracelets: false,
    unCategorized: false,
    search: '',
  }

  const handleSubmit = async (values) => {
    const { applicable_items, applied_to, name, rate } = values

    const payload = {
      applicable_items: applicable_items.map((item) => +item),
      applied_to,
      name: name.trim(),
      rate: rate / 100,
    }

    console.log(payload)
    console.log(values)

    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2))
    }, 2000)

    // await server call with payload as request body
    // then, optionally reset the form
    // resetForm()
  }

  const handleRateOnBlur = (e, handleBlur, setFieldValue, values, errors) => {
    handleBlur(e)
    const { number } = wordsToNumbers(values.name)
    const num = errors.name ? 0 : number
    setFieldValue('rate', num)
  }

  return (
    <div className='formBox'>
      <h1 className='formTitle'>Add Tax</h1>
      <Formik
        validate={(values) => validateInputs(values, allItemsIds)}
        initialValues={taxDetails}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values)
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
            <div className='sectionGroup'>
              <div className='group-inner'>
                <div className={`ratesGroup `}>
                  <div className={`rateInputs`}>
                    <Field
                      type='text'
                      name='name'
                      className='rate--name'
                      autoComplete='off'
                      aria-label='rate in words'
                      onBlur={(e) =>
                        handleRateOnBlur(
                          e,
                          handleBlur,
                          setFieldValue,
                          values,
                          errors
                        )
                      }
                    />
                    <div className='numberBox'>
                      <Field
                        type='text'
                        name='rate'
                        disabled
                        className='rate--number'
                      />
                      <small className='percentage-symbol'>%</small>
                    </div>
                  </div>
                  <ErrorMessage
                    name='name'
                    className='error'
                    component='small'
                    role='alert'
                  />
                </div>
                <div className={`radioGroup `}>
                  <div
                    className={`radioGroup-inner ${
                      errors.applied_to && 'group-error'
                    }`}
                  >
                    <label>
                      <Field
                        type='radio'
                        name='applied_to'
                        value='all'
                        onClick={() => {
                          setFieldValue('applicable_items', allItemsIds)
                          setFieldValue('bracelets', true)
                          setFieldValue('unCategorized', true)
                        }}
                      />
                      Apply to all items in collection
                    </label>
                    <label>
                      <Field type='radio' name='applied_to' value='some' />
                      Apply to specific items
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

            <div className='sectionGroup'>
              <div className='group-inner'>
                <div className='searchBox'>
                  <Field type='text' name='search' placeholder='Search Items' />
                </div>
                <div className='checkboxGroups'>
                  <ul
                    className={`applicable-items-list ${
                      errors.applicable_items && 'group-error'
                    }`}
                  >
                    <CheckboxGroup
                      items={bracelets}
                      category='bracelets'
                      setFieldValue={setFieldValue}
                      values={values}
                    />
                    <CheckboxGroup
                      items={itemsWithoutCategory}
                      category='unCategorized'
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

            <div className='buttonGroup'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='btn--submit'
              >
                Apply tax to {values.applicable_items.length} item(s)
              </button>
              <button
                type='button'
                className='btn--reset'
                onClick={resetForm}
                title='Reset'
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
// add accessibility support
