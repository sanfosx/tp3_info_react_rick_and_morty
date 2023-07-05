
const GobackButton = () => {

    const goBack = () => {
        window.history.back();
    };
    return (
        <button onClick={goBack}>Volver Atrás</button>
    )
}

export default GobackButton
