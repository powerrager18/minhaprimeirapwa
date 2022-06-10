import { useState, useEffect } from "react";

function Calculo() {

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        console.log('Criou o componente Calculo');
    }, []);

    useEffect(() => {
        console.log('Alterou o state valor1');
    }, [valor1]);


    return (
        <div style={{ padding: '20px' }}>
            <h1>Calculo de valores</h1>
            <div className="mb-3">
                <label htmlFor="txtValor1" className="form-label">Valor 1</label>
                <input type="number" className="form-control"
                    id="txtValor1" placeholder="Valor 1 - Obrigatório"
                    value={valor1}
                    onChange={e => setValor1(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="txtValor2" className="form-label">Valor 2</label>
                <input type="number" className="form-control"
                    id="txtValor2" placeholder="Valor 2 - Obrigatório"
                    value={valor2}
                    onChange={e => setValor2(e.target.value)} />
            </div>
    
            <button type="button" className="btn btn-outline-primary col-2"
                onClick={
                    () => setResultado(Number(valor1) + Number(valor2))
                }>+</button>
            <button type="button" className="btn btn-outline-success col-2"
                onClick={
                    () => setResultado(Number(valor1) - Number(valor2))
                }>-</button>
            <button type="button" className="btn btn-outline-warning col-2"
                onClick={
                    () => setResultado(Number(valor1) * Number(valor2))
                }>x</button>
            <button type="button" className="btn btn-outline-info col-2"
                onClick={
                    () => setResultado(Number(valor1) / Number(valor2))
                }>/</button>

            <h1>Valor 1: {valor1}</h1>
            <h1>Valor 2: {valor2}</h1>
            <h1>Resultado: {resultado}</h1>
        </div>
    );
}

export default Calculo;