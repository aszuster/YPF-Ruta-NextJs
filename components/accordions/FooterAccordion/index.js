import ItemAccordion from './ItemAccordion'

export default function FooterAccordion({ list }) {
  return (
    <>
      {list.map((item, index) => (
        <div key={index} className="footer__dropdown-container">
          <div className="row footer__dropdown">
            <ItemAccordion
              CompTitle={item.title}
              CompButton={item.button}
              CompBody={item.content}
            />
          </div>
        </div>
      ))}
    </>
  )
}
