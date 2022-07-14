import Header from "./componentes/Header"
import NotificationButton from "./componentes/notification-button"
import SalesCard from "./componentes/SalesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="rafametas-container">
            <SalesCard/>
          </div>  
        </section>
      </main>
    </>
  )
}

export default App
