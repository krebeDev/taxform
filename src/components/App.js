import React from 'react'
import TaxForm from './TaxForm'

const App = () => {
  const handleSubmit = (values) => {
    const { applicable_items, applied_to, name, rate } = values

    const payload = {
      applicable_items: applicable_items.map((item) => +item),
      applied_to,
      name: name.trim(),
      rate: rate / 100,
    }
    console.log(payload)
    // await server call with payload as request body
  }

  return <TaxForm handleSubmit={handleSubmit} />
}

export default App
