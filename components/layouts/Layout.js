import Header from 'components/headers/Header'
import Footer from 'components/footers/Footer'

export default function Layout(props) {
  return (
    <main className="main-layout">
      <Header />
      {props.children}
      <Footer />
    </main>
  )
}
