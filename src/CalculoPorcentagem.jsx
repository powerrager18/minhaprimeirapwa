import { useState} from "react";

function CalculoPorcentagem() {

    const [valor, setValor] = useState(0);
    const [porcentagem, setPorcentagem] = useState(0);
    const [resultado, setResultado] = useState(0);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Calculo de porcentagem</h1>
            <div className="mb-3">
                <label htmlFor="txtValor" className="form-label">Valor 1</label>
                <input type="number" className="form-control"
                    id="txtValor" placeholder="Valor"
                    value={valor}
                    onChange={e => setValor(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtPorcentagem" className="form-label">Porcentagem</label>
                <input type="number" className="form-control"
                    id="txtPorcentagem" placeholder="%"
                    value={porcentagem}
                    onChange={e => setPorcentagem(e.target.value)} />
            </div>
    
            <button type="button" className="btn btn-outline-primary col-2"
                onClick={
                    () => setResultado(Number(valor) * Number(Number(porcentagem)/100))
                }>calcular</button>

            <h1>valor: {valor}</h1>
            <h1>porcentagem: {porcentagem}%</h1>
            <h1>Resultado: {resultado}</h1>
        </div>
    );
}

export default CalculoPorcentagem;