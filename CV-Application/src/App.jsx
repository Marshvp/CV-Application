import './App.css'
import { personalData, educationData, experienceData } from './Components/Data'
import { useState } from 'react'
import Display from './Components/Display'
import { InputPersonal } from './Components/InputPersonal'
import { EducationField } from './Components/InputEducation'
import ExperienceField from './Components/InputExperience'
function App() {
  const [personal, setPersonal] = useState(personalData)
  const [education, setEducation] = useState(educationData)
  const [experience, setExperience] = useState( experienceData)
  

  const handlePersonal = (e) => {
    const newPersonal = { ...personal, [e.target.name]: e.target.value }
    setPersonal(newPersonal)
  }


  const handleEduChange = (index, field, value) => {
    console.log(`handleEduChange`, index, field, value)
    const newEducation = education.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu))
    setEducation(newEducation)
  }

  const handleGradeChange = (eduIndex, gradeIndex, field, value) => {
    const newEducation = education.map((edu, i) => {
      if (i === eduIndex) {
        const newGrades = edu.grades.map((grade, j) => (j === gradeIndex ? { ...grade, [field]: value } : grade))
        return { ...edu, grades: newGrades }
      }
      return edu
    })
    setEducation(newEducation)
  }

  const addNewentry = (setData, newEntry) => {
    setData((prevData) => [...prevData, newEntry])
  }

  const removeEntry = (setData, index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index))
  }

  const addNewGrade = (eduIndex) => {
    const newEducation = education.map((edu, i) => {
      if (i === eduIndex) {
        return { ...edu, grades: [...edu.grades, { name: '', grade: '' }] }
      }
      return edu
    })
    setEducation(newEducation)
  }

  const handleExperienceChange = (index, field, value) => {
    const newExperience = experience.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp))
    setExperience(newExperience)
  }


  console.log(personal)
  console.log("education", education)
  return (
    <div className='container'>
    

      <div className='SideBar'>
        <div className="sideBar-Content">
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

          <h2>Education</h2>
          {education.map((edu, index) => (
            <EducationField
              key={index}
              eduIndex={index}
              edu={edu}
              handleEduChange={handleEduChange}
              handleGradeChange={handleGradeChange}
              addNewGrade={addNewGrade}
              removeEntry={() => removeEntry(setEducation, index)}
            />
          ))}
          <button onClick={() => addNewentry(setEducation, { name: '', year: '', grades: [] })}>Add Education</button>


          <h2>Experience</h2>

          {experience.map((exp, index) => (
            <ExperienceField
              key={index}
              index={index}
              exp={exp}
              handleExperienceChange={handleExperienceChange}
              removeEntry={() => removeEntry(setExperience, index)}
            />

          ))}
          <button onClick={() => addNewentry(setExperience, { name: '', year: '', about: '' })}>Add Experience</button>


        </div>
      </div>
      <div className='main'>

        <Display personal={personal} education={education} experience={experience}/>
      </div>
    </div>
  )
}

export default App
