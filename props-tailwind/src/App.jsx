
import './App.css'
import Card from './components/card'

function App() {

//we can also pass any array or any structure as props

let arr=[9,10,5];
  return (
    <>
    <h1 className='bg-red-600 text-black p-4 rounded-full mb-4'>This is heading </h1>
    <Card name="Angela" btn_txt="Click-me" aray={arr}/> 
    <Card name="Loura" btn_txt="Hit-me" aray={arr}/> 
    <Card name="Emile"  aray={arr}/> 
    <Card name="Anna" btn_txt="Push-me" aray={arr}/> 
    </>
  )
}

export default App
