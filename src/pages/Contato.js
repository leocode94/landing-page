export default function Contato() {
    return (
        <main>
            <form className="form" name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <label className="form--label" htmlFor="name">Nome completo:</label><br />
                <input className="form--input" type="text" id="name" name="name" required /><br />
                <label className="form--label" htmlFor="phone">Telefone:</label><br />
                <input className="form--input" type="text" id="phone" name="phone" required /><br />
                <label className="form--label" htmlFor="city">Cidade:</label><br />
                <input className="form--input" type="text" id="city" name="city" required /><br />
                <h2>Radio?</h2>
                <label className="form--label" htmlFor="radio-sim">Sim</label><br />
                <input className="form--radio" type="radio" id="radio-sim" name="radio" value="Sim" /><br />
                <label className="form--label" htmlFor="radio-nao">Não</label><br />
                <input className="form--radio" type="radio" id="radio-nao" name="radio" value="Não" /><br />
                <label className="form--label" htmlFor="message">Escreva uma mensagem:</label><br />
                <textarea className="form--textarea" name="message" rows={8} cols={34} /><br />
                <input className="form--submit" type="submit" value="ENVIAR" />
            </form>
        </main>
    )
}