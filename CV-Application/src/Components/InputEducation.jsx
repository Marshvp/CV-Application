export const EducationField = ({ eduIndex, edu, handleEduChange, handleGradeChange, addNewGrade, removeEntry }) => {

    return (

        <div className="InputEducation">
            <h4>{eduIndex + 1}</h4>

            <input 
                type="text"
                name="name"
                value={edu.name} 
                placeholder="School Name"
                onChange={(e) => handleEduChange(eduIndex, 'name', e.target.value)}
            />

            <input
                type="text"
                name="year"
                value={edu.year}
                placeholder="Start Year - End Year"
                onChange={(e) => handleEduChange(eduIndex, 'year', e.target.value)}
            />

            <h4>Grades</h4>

            {edu.grades.map((grade, gradeIndex) => (
                <div key={gradeIndex} className="grade-entry">
                    <input
                        type="text"
                        name="name"
                        value={grade.name}
                        placeholder="Grade Name"
                        onChange={(e) => handleGradeChange(eduIndex, gradeIndex, 'name', e.target.value)}
                    />

                    <input
                        type="text"
                        name="grade"
                        value={grade.grade}
                        placeholder="Grade"
                        onChange={(e) => handleGradeChange(eduIndex, gradeIndex, 'grade', e.target.value)}
                    />

                </div>
            ))}
            <button className="entryButtons" onClick={() => addNewGrade(eduIndex)}>Add Grade</button>
            
            <button className="entryButtons" onClick={removeEntry}>Remove Entry</button>
        </div>
         
    )
}