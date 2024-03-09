import React from 'react';
import './SearchForm.css';

function SearchForm({ submitHandlerProduct, submitHandlerBrand, submitHandlerPrice, isLoading }) {
  const [data, setData] = React.useState('');

  const handleChangeName = (e) => {
    const { name, value } = e.target;
    setData( {...data, [name]: value} );
  };

  const handleChangeBrand = (e) => {
    const { name, value } = e.target;
    setData( {...data, [name]: value} );
  };

  const handleChangePrice = (e) => {
    const { name, value } = e.target;
    setData( {...data, [name]: value} );
  };

  const handleSubmitBrand = (event) => {
    event.preventDefault();
    submitHandlerBrand(data)
  }; 
  const handleSubmitProduct = (event) => {
    event.preventDefault();
    submitHandlerProduct(data)
  };  
  const handleSubmitPrice = (event) => {
    event.preventDefault();
    submitHandlerPrice(data)
  }; 
  // console.log(data)

  const resetFilter = () => {
    setData('');
  };

  return (
    <section className="search-form">
      <div className="search-form__container" >
        <form className="search-form__form" onSubmit={handleSubmitProduct} noValidate>

          <input 
            name="product" 
            type="search" 
            placeholder="Введите наименование" 
            className="search-form__input"
            value={data["product"] || ""}
            onChange={handleChangeName}
            id="input"
 
          />
          <div className="search-form__filter-checkbox-container">         
            <button type="submit" className="search-form__submit-button" >Поиск</button>
            <div className="search-form__line"></div>
            <button type="button" className="search-form__clear-button" aria-label='Очистить форму' onClick={resetFilter}></button>            
          </div>
        </form>
        
        <form className="search-form__form" onSubmit={handleSubmitBrand} noValidate>

          <input 
            name="brand" 
            type="search" 
            placeholder="Введите бренд" 
            className="search-form__input"
            value={data["brand"] || ""}
            onChange={handleChangeBrand}
            id="input"
          />
          <div className="search-form__filter-checkbox-container">   
            <button type="submit" className="search-form__submit-button" >Поиск</button>
            <div className="search-form__line"></div>
            <button type="button" className="search-form__clear-button" aria-label='Очистить форму' onClick={resetFilter}></button>            
          </div>
        </form>
        <form className="search-form__form" onSubmit={handleSubmitPrice} noValidate>
 
          <input 
            name="price" 
            type="number" 
            placeholder="Введите стоимость" 
            className="search-form__input"
            value={data["price"] || ""}
            onChange={handleChangePrice}
            id="input"
          />
          <div className="search-form__filter-checkbox-container">         
            <button type="submit" className="search-form__submit-button" >Поиск</button>
            <div className="search-form__line"></div>
            <button type="button" className="search-form__clear-button" aria-label='Очистить форму' onClick={resetFilter}></button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;