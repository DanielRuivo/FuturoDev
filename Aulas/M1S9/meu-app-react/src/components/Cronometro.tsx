import { useState, useEffect, useRef } from 'react';
// import './Cronometro.css';

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [estaRodando, setEstaRodando] = useState(false);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.title = `Tempo: ${formatarTempo(segundos)}`;

    if (estaRodando) {
      intervaloRef.current = setInterval(() => {
        setSegundos(prevSegundos => prevSegundos + 1);
      }, 1000);
    } else {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
    }

    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
    };
  }, [estaRodando, segundos]);

  const formatarTempo = (totalSegundos: number): string => {
    const minutos = Math.floor(totalSegundos / 60);
    const segundosRestantes = totalSegundos % 60;

    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundosRestantes).padStart(2, '0');

    return `${minutosFormatados}:${segundosFormatados}`;
  };

  const iniciar = () => {
    setEstaRodando(true);
  };

  const pausar = () => {
    setEstaRodando(false);
  };

  const zerar = () => {
    setEstaRodando(false);
    setSegundos(0);
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
    }
  };

  return (
    <div className="cronometro-container">
      <h2>Cronômetro</h2>
      <p className="tempo">{formatarTempo(segundos)}</p>
      <div className="controles">
        {!estaRodando ? (
          <button onClick={iniciar}>Iniciar</button>
        ) : (
          <button onClick={pausar}>Pausar</button>
        )}
        <button onClick={zerar}>Zerar</button>
      </div>
    </div>
  );
}

export default Cronometro;