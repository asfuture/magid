import './App.css';
import HelloWorld from './componentes/HelloWorld';

function App() {

  const name ='Alex Ferreira'
  const newName = name.toUpperCase()

  function sum(a,b) {
    return a + b
  }

  const url = "https://placehold.co/150"
  return (
    <div class="App">
      <header className="App-header">
        <h1> OLÁ! MUNDO </h1>
        <p>Nome: {newName} </p>
       <p>Soma: {sum(1,2)}</p> 
       <img src={url} alt="Minha Imagem"/>
       <HelloWorld />
      </header>
    </div>
  );
}

export default App;
