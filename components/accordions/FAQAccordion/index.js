import ItemAccordion from './ItemAccordion'

export default function FAQAccordion({ list }) {
  return (
    <>
      {list.map((item, index) => (
        <div key={index} className="question">
          <ItemAccordion CompButton={item.button} CompBody={item.content} />
        </div>
      ))}
    </>
  )
}
