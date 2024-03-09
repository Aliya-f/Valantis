import './Card.css'

const Card = ({ data}) => {

// console.log(key)

  return (
    <li className="card">
      <div className="card__container">
        <p className="card-field">ID:  {data.id}</p>
   		  <p className="card-field">Наименование:  {data.product}</p>
		    <p className="card-field">Бренд:  {data.brand || 'отсутствует'}</p>
		    <p className="card-field">Цена:  {data.price} руб.</p>
      </div>

    </li>
  );
}

export default Card;