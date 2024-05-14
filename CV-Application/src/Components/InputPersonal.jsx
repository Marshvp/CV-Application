export function InputPersonal({ label, name, value, placeholder, handlePersonal }) {

    return (
        <div className="InputPersonal">
            
            <h3>{label}</h3>
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handlePersonal}
                />

        </div>

    )
}