export default function NavHeader() {

    const number = "(71) 99251-8773"

    return (
        <div className="nav--header">
            <p className="nav--header--item">{number}</p>
            <p className="nav--header--item">atendimento@vostokcode.com.br</p>
            <button className="nav--header--item nav--header--button">@vostokcode</button>
        </div>
    )
}