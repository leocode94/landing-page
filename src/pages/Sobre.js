import image from "../assets/images/about.png"

export default function Sobre() {
    return (
        <div>
            <h1>Sobre a empresa</h1>
            <div className="about--page">
                <img className="about--image" src={image} alt="" />
                <div className="about--info">Somos uma empresa altamente qualificada em soluções digitais para empresas dos mais variados segmentos. Nossa empresa é reconhecida pela excelência na realização de serviços de criação de sites institucionais, landing pages e CRMs. Contamos com uma equipe capacitada para oferecer o melhor serviço ao nosso cliente. Nosso objetivo é garantir a disponibilidade e a confiabilidade e segurança dos sistemas de nossos clientes, evitando prejuízos financeiros e reduzindo os custos de manutenção.</div>
            </div>

        </div>
    )
}