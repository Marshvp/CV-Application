export default function Display(props) {
    console.log(`props`, props);
    return (
        <div>
            <h1>{props.personal.name}</h1>
            <h2>{props.personal.email}</h2>
            <h3>{props.personal.phone}</h3>

            <h1>Education</h1>
            {props.education.map((edu, index) => (
                <div key={index}>
                    <h2>{edu.name}</h2>
                    <h3>{edu.year}</h3>
                    {edu.grades.map((grade, index) => (
                        <div key={index}>
                            <h4>{grade.name}</h4>
                            <h5>{grade.grade}</h5>
                        </div>
                    ))}
                </div>
            ) 
                 
            )}
        </div>

    )
}