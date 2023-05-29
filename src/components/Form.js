export default function Form() {
    return (
        <form className="form" name="contact" method="post">
            <label className="form--label" htmlFor="name">Nome completo:</label><br />
            <input className="form--input" type="text" id="name" name="name" required /><br />
            <label className="form--label" htmlFor="phone">Telefone:</label><br />
            <input className="form--input" type="text" id="phone" name="phone" /><br />
            <label className="form--label" htmlFor="spending">Consumo:</label><br />
            <input className="form--input" type="text" id="spending" name="spending"/><br />
            <input className="form--submit" type="submit" value="ENVIAR" />
        </form>
    );
}