import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    <div>
      <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
