// export default function Display(props) {
//     console.log(`props`, props);
//     console.log(`props.experience`, props.experience);
//     return (
//         <div>
//             <h1>{props.personal.name}</h1>
//             <h2>{props.personal.email}</h2>
//             <h3>{props.personal.phone}</h3>

//             <h1>Education</h1>
//             {props.education.map((edu, index) => (
//                 <div key={index}>
//                     <h2>{edu.name}</h2>
//                     <h3>{edu.year}</h3>
//                     {edu.grades.map((grade, index) => (
//                         <div key={index}>
//                             <h4>{grade.name}</h4>
//                             <h5>{grade.grade}</h5>
//                         </div>
//                     ))}
//                 </div>
//             ))}

//             <h1>Experience</h1>
//             {experience.map((exp, index) => (
//                 <div key={index}>
//                     <h2>{exp.name}</h2>
//                     <h3>{exp.year}</h3>
//                     <p>{exp.about}</p>
//                 </div>
                
//             ))}
//         </div>

//     )
// }


 const Display = ({ personal, education, experience }) => {
    
    console.log(`props`, personal, education, experience);

    return (
        <div className="main-Content">
            <div className="personal">
                <h1>{personal.name}</h1>
                <h2>Email: {personal.email}</h2>
                <h3>Telephone: {personal.phone}</h3>
            </div>
            <hr />
            <div className="education">
                <h1>Education</h1>
                {education.map((edu, index) => (
                    <div key={index}>
                        <h2>School: {edu.name}</h2>
                        <h4>Years: {edu.year}</h4>
                        {edu.grades.map((grade, index) => (
                            <div className="grades" key={index}>
                                <h4>{grade.name}:</h4>
                                <h4>{grade.grade}</h4>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
                <hr />
            <div className="experience">
                <h1>Experience</h1>
                {experience.map((exp, index) => (
                    <div key={index}>
                        <h2>{exp.name}</h2>
                        <h3>{exp.year}</h3>
                        <p>{exp.about}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Display