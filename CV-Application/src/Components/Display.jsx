export default function Display(props) {
    console.log(`props`, props);
    return (
        <div>
            <h1>{props.personal.name}</h1>
            <h2>{props.personal.email}</h2>
            <h3>{props.personal.phone}</h3>
        </div>
    )
}