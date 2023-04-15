

const Title = ({ size, align, text }) => {
    return (
        <h3
            style={{ fontFamily: 'Roboto', fontSize: { size }, fontWeight: 500, color: '#212529', textAlign: { align } }}
        >
            {text}
        </h3>
    )
}

export default Title;