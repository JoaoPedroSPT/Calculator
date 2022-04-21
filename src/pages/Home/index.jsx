import './style.css'
import Card from '../../components/Card';

function Home() {
  return (
    <div className="container">
      <h1>Informe o primeiro numero: </h1>
      <input type="number" placeholder="numero 1" />

      <h1>Informe o segundo numero: </h1>
      <input type="number" placeholder="numero 2" />

      <>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </>

      <>
        <h3>Resultado</h3>
      </>

    </div>
  )
}

export default Home
