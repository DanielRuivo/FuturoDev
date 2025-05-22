import './SauceList.css';

const sauceItems = [
  {
    id: 1,
    name: 'Alla Puttanesca',
    description: 'Molho picante com azeitonas, alcaparras e anchovas'
  },
  {
    id: 2,
    name: 'Al Pesto di Basilico',
    description: 'Tradicional molho verde de manjericão, pinoli e queijo'
  },
  {
    id: 3,
    name: 'Cacio e Pepe',
    description: 'Molho cremoso de queijo pecorino e pimenta preta'
  },
  {
    id: 4,
    name: 'Alla Matriciana',
    description: 'Molho com guanciale, tomate e pecorino'
  }
];

export const SauceList = () => {
  return (
    <div className="sauce-container">
      <h2>Molhos Disponíveis</h2>
      <ul className="sauce-list">
        {sauceItems.map((item) => (
          <li key={item.id} className="sauce-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};