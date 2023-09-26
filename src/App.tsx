import { useEffect, useState } from "react"
import { Images } from './components/FetchUsers'
import { ImagesCard } from './components/ImagesCard'
import { Input } from "./components/Input"
import './App.css'

function App() {
  const [images, setImages] = useState<string[]>(JSON.parse(localStorage.getItem("images")) || []);
  const [input, setInput] = useState("")

  useEffect(() => {
    if (images.length === 0) {
      Images()
        .then(images => {
          setImages(images)
        })
    }
  }, [images])

  const inputCall = (input: string) =>{
    localStorage.clear() 
    Images(input)
    setInput("")
  }

  return (
    <>
      <h1>Gallery</h1>
      <div className="card">
        <Input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"Search for me ???"} />
        <button onClick={()=> inputCall(input)}>Submit the input</button>
        <ImagesCard images={images} />
      </div>
    </>
  )
}

export default App
