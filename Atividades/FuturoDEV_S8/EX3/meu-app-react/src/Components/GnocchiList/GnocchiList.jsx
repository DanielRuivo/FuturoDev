import './GnocchiList.css';

const gnocchiItems = [
  {
    id: 1,
    name: 'Gnocchi de Batata',
    price: 25.90,
    image: 'https://via.placeholder.com/300x200?text=Gnocchi+Batata',
    description: 'Tradicional gnocchi feito com batata'
  },
  {
    id: 2,
    name: 'Gnocchi de Espinafre',
    price: 28.50,
    image: 'https://via.placeholder.com/300x200?text=Gnocchi+Espinafre',
    description: 'Gnocchi verde feito com espinafre fresco'
  },
  {
    id: 3,
    name: 'Gnocchi de Cenoura',
    price: 27.00,
    image: 'https://via.placeholder.com/300x200?text=Gnocchi+Cenoura',
    description: 'Gnocchi alaranjado feito com cenouras'
  },
  {
    id: 4,
    name: 'Gnocchi de Beterraba',
    price: 29.90,
    image: 'https://via.placeholder.com/300x200?text=Gnocchi+Beterraba',
    description: 'Gnocchi rosa feito com beterraba'
  }
];

export const GnocchiList = () => {
  return (
    <div className="gnocchi-container">
      <h2>Tipos de Gnocchi</h2>
      <div className="gnocchi-grid">
        {gnocchiItems.map((item) => (
          <div key={item.id} className="gnocchi-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">R$ {item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};