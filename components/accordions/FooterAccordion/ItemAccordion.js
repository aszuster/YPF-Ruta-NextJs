import { useState } from 'react'

export default function ItemAccordion({ CompTitle, CompButton, CompBody }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="buttonContainer">
        <CompTitle />
        <button
          onClick={() => setOpen(!open)}
          className={open ? 'opened' : 'closed'}
        >
          <CompButton stateShow={open} />
        </button>
      </div>
      <div className={`accordion-item ${!open ? 'collapsed' : ''}`}>
        <CompBody />
      </div>
    </>
  )
}
