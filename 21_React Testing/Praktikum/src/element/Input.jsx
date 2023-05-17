

const Input = ({ id, className, text, type, placeholder, onChange, max, datatestid}) => {
    return (
        <>
            <div className="my-3">
                <label htmlFor={id}>{text}</label><br />
                <input className={className} id={id} type={type} placeholder={placeholder} onChange={onChange} maxLength={max} data-testid={datatestid}/>
            </div>
        </>
    )
}

export default Input;