import { useState, useEffect } from "react";

function Calculo() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [classificacao, setClassificacao] = useState(0);

    useEffect(() => {
        console.log('criou o componente calculo');
    }, []);

    return (
        <div  style={{ padding: '20px' }}>
            <h1>Calculo de IMC</h1>
            <div className="mb-3">
                <label htmlFor="peso" className="form-label">Peso</label>
                <input type="number" className="form-control"
                    id="peso" placeholder="KG"
                    value={peso}
                    onChange={e => setPeso(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="altura" className="form-label">altura</label>
                <input type="number" className="form-control"
                    id="altura" placeholder="metros"
                    value={altura}
                    onChange={e => setAltura(e.target.value)} />
            </div>
            <button type="button" className="btn btn-outline-primary col-2" onClick={
                () => setResultado(Number(peso) / Number(Number(altura) * Number(altura)))
            }> Calcular IMC </button>
            <button type="button" className="btn btn-outline-success col-2" onClick={
                () => {
                    if (resultado < 18.5){
                        setClassificacao("magreza");
                    }else{
                        if (resultado >= 18.5 & resultado <= 24.9){
                            setClassificacao("normal");
                        }else{
                            if (resultado >= 25.0 & resultado <= 29.9){
                                setClassificacao("sobrepeso");
                            }else{
                                if (resultado >= 30.0 & resultado <= 39.9){
                                    setClassificacao("obesidade");
                                }else{
                                    setClassificacao("obesidade grave");
                                }
                            }
                        }
                    }
                }
            }> Classificação </button>
            <br/>
            <h1>peso kg: {peso}</h1>
            <h1>altura metros: {altura}</h1>
            <h1>IMC: {resultado}</h1>
            <h1>classificação: {classificacao}</h1>
        </div>
    );
};

export default Calculo;