import React, { useRef } from 'react'
import { Field } from 'formik'

const CheckboxGroup = ({ items, category, setFieldValue, values }) => {
  const categoryRef = useRef(null)

  const handleSelect = () => {
    const checkboxes = document.querySelectorAll(
      `input[data-category=${category}]`
    )
    let checkedCount = 0
    let allChecked = false

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) checkedCount++

      if (checkedCount === items.length) {
        allChecked = true
      }

      if (checkedCount > 0 && checkedCount < items.length) {
        categoryRef.current.indeterminate = true
      }

      if (allChecked || checkedCount === 0) {
        categoryRef.current.indeterminate = false
      }
    }

    setFieldValue(category, allChecked)
  }

  const handleToggleAll = () => {
    const isChecked = categoryRef.current.checked
    const itemsIds = items.map(({ id }) => `${id}`)

    const mergedIds = [...new Set([...values.applicable_items, ...itemsIds])]
    const remainingItems = values.applicable_items.filter(
      (item) => itemsIds.indexOf(item) === -1
    )

    const updatedItems = isChecked ? mergedIds : remainingItems
    setFieldValue('applicable_items', updatedItems)
  }

  const renderCheckBoxes = items.map(({ id, name }) => (
    <li key={id} className='categoryItem'>
      <label>
        <Field
          type='checkbox'
          name='applicable_items'
          value={`${id}`}
          data-category={category}
          onClick={handleSelect}
        />
        {name}
      </label>
    </li>
  ))

  return (
    <li className='checkboxCategory'>
      <label className='categoryTitle'>
        <Field
          type='checkbox'
          name={category}
          innerRef={categoryRef}
          onClick={handleToggleAll}
        />
        {category === 'unCategorized' ? '' : category}
      </label>
      <ul className='checkboxList'>{renderCheckBoxes}</ul>
    </li>
  )
}

export default CheckboxGroup