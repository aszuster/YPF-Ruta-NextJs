import { useState } from 'react'

export default function ItemAccordion({ CompButton, CompBody }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={open ? 'question-opened' : 'question-collapsed'}
      >
        <CompButton stateShow={open} />
      </button>
      <div className={`accordion-answer ${!open ? 'collapsed' : ''}`}>
        <CompBody />
      </div>
    </>
  )
}
