import wordsToNumbers from './wordsToNumbers'

const validateInputs = (values, allItems) => {
  const {
    name,
    applicable_items: applicableItems,
    applied_to: appliedTo,
  } = values

  const errors = {}
  const numberOfApplicableItems = applicableItems.length

  if (!name) {
    errors.name = 'Please enter a rate'
  }

  const { error: invalidRate } = name && wordsToNumbers(name)
  if (invalidRate) {
    errors.name = invalidRate
  }

  if (!appliedTo) {
    errors.applied_to = 'Please choose an option'
  }
  if (appliedTo === 'all' && numberOfApplicableItems !== allItems.length) {
    errors.applied_to =
      'You selected "Apply to all items in collection" but unchecked some items. Either check all items in each category or choose "Apply to specific items" to continue'
  }

  if (numberOfApplicableItems < 1) {
    errors.applicable_items = 'Please select at least one item in any category'
  }

  return errors
}

export default validateInputs
