const ExperienceField = ({ index, exp, handleExperienceChange, removeEntry }) => {
    return (
        <div className="InputExperience">
            <h4>{index + 1}</h4>

            <input
                type="text"
                name="name"
                value={exp.name}
                placeholder="Company Name"
                onChange={(e) => handleExperienceChange(index, 'name', e.target.value)}
            />

            <input
                type="text"
                name="year"
                value={exp.year}
                placeholder="Start Year - End Year"
                onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
            />

            <textarea
                name="about"
                value={exp.about}
                placeholder="About Company"
                onChange={(e) => handleExperienceChange(index, 'about', e.target.value)}
                maxLength={300}
            />

            <button className="entryButtons" onClick={removeEntry}>Remove</button>
        </div>
    )
}

export default ExperienceField