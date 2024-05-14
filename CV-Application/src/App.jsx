import './App.css'
import { personalData } from './Components/Data'
import { useState } from 'react'
import Display from './Components/Display'
import { InputPersonal } from './Components/InputPersonal'
function App() {
  const [personal, setPersonal] = useState(personalData)

  

  const handlePersonal = (e) => {
    const newPersonal = { ...personal, [e.target.name]: e.target.value }
    setPersonal(newPersonal)
  }
  console.log(personal)
  return (
    <div>
    
    <h1>Hello World</h1>

      <div className='SideBar'>
        <h2>Personal Details</h2>

        <InputPersonal
          label='Name'
          name='name'
          value={personal.name}
          placeholder='Name'
          handlePersonal={handlePersonal}
        />

        <InputPersonal
          label='Email'
          name='email'
          value={personal.email}
          placeholder='Email'
          handlePersonal={handlePersonal}
        />

        <InputPersonal
          label='Phone'
          name='phone'
          value={personal.phone}
          placeholder='Phone'
          handlePersonal={handlePersonal}
        />
      </div>

    <Display personal={personal} />
    </div>
  )
}

export default App
