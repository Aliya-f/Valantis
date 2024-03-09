import React, {useState, useEffect} from 'react';

import SearchForm from '../SearchForm/SearchForm';
import './Cards.css';
import { getIds, getItems, getFieldsBrand, getFieldsProduct, getFieldsPrice, getFilterProduct, getFilterPrice, getFilterBrand } from "../../utils/CardsApi";
import Preloader from "../Preloader/Preloader"
import Pagination from "../Pagination/Pagination"
import MoviesCard from '../Card/Card';

function Cards() {

  const [ids, setIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [field, setField] = useState('');
  const [filteredIds, setFilteredIds] = useState([]);
  const [notFound, setNotFound] = React.useState("");

  // постраничное отображение
  const [currentPage, setCurrentPage] = useState(1);
  const [counterItem, setCounterItem] = useState(50);
  const lastItemIndex = currentPage * counterItem
  const firstItemIndex = lastItemIndex - counterItem
  const currentItems = items.slice(firstItemIndex, lastItemIndex)
  
  const paginate = pageNumber => setCurrentPage(pageNumber)

  // запрос всех ID
  useEffect(() => {
    // setIsLoading(true);
    if (ids.length < 1)
      getIds()
        .then((res) => {
          // setIsLoading(false);
          if (res && ids.length < 1) {
            setIds([...new Set(res.result)]);
          } else if (!res) {
            setIds([...ids]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }, [ids]);
  // console.log(ids)

  // поиск по id и отрисовка карточек
  useEffect(() => {
    if (ids.length > 1 ) {
      setIsLoading(true);
      getItems(ids)
        .then((res) => {
          if (res) {
            // исключение повторных id
            const result = res.result
            const filteredArray = [];
            result.filter((item) => {
              if (!filteredArray.some((element) => element.id === item.id)) {
                filteredArray.push(item);
              }
            });
            setItems(filteredArray);
            setIsLoading(false);
          } else if (!res) {
            setFilteredIds([...filteredIds]);
            setNotFound("Ошибка 404. Ничего не найдено");
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setNotFound("Ошибка 404. Ничего не найдено");
          setIsLoading(false);
        });
    }
  }, [ids]);
  // console.log(items)

  const price =  function idsm(origin) {
    return origin.map(item => item.price);
  }
  const brand =  function idsm(origin) {
    return origin.map(item => item.brand);
  }
  const product =  function idsm(origin) {
    return origin.map(item => item.product);
  }

  // поиск fields
  useEffect(() => {
      setIsLoading(true);
      getFieldsBrand(brand)
      .then((res) => {
        if (res && res.result.length > 0) {
          setFilteredIds([...new Set(res.result)]);
        } else {
          setItems([]);
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, [field]);

  useEffect(() => {
    setIsLoading(true);
    getFieldsPrice(price)
    .then((res) => {
      if (res && res.result.length > 0) {
        setFilteredIds([...new Set(res.result)]);
      } else {
        setItems([]);
        setIsLoading(false);
      }
    })
    .catch((err) => console.log(err));
	}, [field]);

	useEffect(() => {
  	setIsLoading(true);
  	getFieldsProduct(product)
  	.then((res) => {
    	if (res && res.result.length > 0) {
      	setFilteredIds([...new Set(res.result)]);
    	} else {
      	setItems([]);
      	setIsLoading(false);
    	}
  	})
  	.catch((err) => console.log(err));
	}, [field]);

	// поиск по бренду
	const submitHandlerBrand = async (searchQuery) => {
  	try {
    	setIsLoading(true);
    	// массив 
    	const searchItem = await getFilterBrand(searchQuery.brand);
    	const searchIdsArray = searchItem.result;
      console.log(searchIdsArray)
			getItems(searchIdsArray)  
      .then((res) => {
        if (res) {
          // исключение повторных id
          const result = res.result
          const filteredArray = [];
          result.filter((item) => {
            if (!filteredArray.some((element) => element.id === item.id)) {
              filteredArray.push(item);
            }
          });
          setItems(filteredArray);
          setIsLoading(false);
        } else if (!res) {
          setFilteredIds([...filteredIds]);
          setNotFound("Ошибка 404. Ничего не найдено");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setNotFound("Ошибка 404. Ничего не найдено");
        setIsLoading(false);
      });
     }
    catch (e) {
      setItems([]);
      setNotFound("Ошибка 404. Ничего не найдено");
      console.log(e);
      setIsLoading(false);
    }
  };

	// поиск по стоимости
	const submitHandlerPrice = async (searchQuery) => {
  	try {
    	setIsLoading(true);
    	// массив 
    	const searchItem = await getFilterPrice(searchQuery.price);
    	const searchIdsArray = searchItem.result;
      console.log(searchIdsArray)
			getItems(searchIdsArray)  
      .then((res) => {
        if (res) {
          // исключение повторных id
          const result = res.result
          const filteredArray = [];
          result.filter((item) => {
            if (!filteredArray.some((element) => element.id === item.id)) {
              filteredArray.push(item);
            }
          });
          setItems(filteredArray);
          setIsLoading(false);
        } else if (!res) {
          setFilteredIds([...filteredIds]);
          setNotFound("Ошибка 404. Ничего не найдено");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setNotFound("Ошибка 404. Ничего не найдено");
        setIsLoading(false);
      });
     }
    catch (e) {
      setItems([]);
      setNotFound("Ошибка 404. Ничего не найдено");
      console.log(e);
      setIsLoading(false);
    }
  };

	// поиск по наименованию
	const submitHandlerProduct = async (searchQuery) => {
  	try {
    	setIsLoading(true);
    	// массив 
    	const searchItem = await getFilterProduct(searchQuery.product);
    	const searchIdsArray = searchItem.result;
      console.log(searchIdsArray)
			getItems(searchIdsArray)  
      .then((res) => {
        if (res) {
          // исключение повторных id
          const result = res.result
          const filteredArray = [];
          result.filter((item) => {
            if (!filteredArray.some((element) => element.id === item.id)) {
              filteredArray.push(item);
            }
          });
          setItems(filteredArray);
          setIsLoading(false);
        } else if (!res) {
          setFilteredIds([...filteredIds]);
          setNotFound("Ошибка 404. Ничего не найдено");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setNotFound("Ошибка 404. Ничего не найдено");
        setIsLoading(false);
      });
     }
    catch (e) {
      setItems([]);
      setNotFound("Ошибка 404. Ничего не найдено");
      console.log(e);
      setIsLoading(false);
    }
  };	

  return (
    <>
      <main>
        <SearchForm      
        submitHandlerBrand={submitHandlerBrand}  
				submitHandlerPrice={submitHandlerPrice}  
				submitHandlerProduct={submitHandlerProduct}  
        isLoading={isLoading}
        />
        {isLoading ? (
          <Preloader isLoading={isLoading}/>
          ) : (
            <section className="movies-cardlist">
              <ul className='movies-cardlist__container'>
                {currentItems.map((result) => (
                  <MoviesCard
                  key={result.id}
                  data={result}
                  {...result}
                  />
                ))} 
              </ul>
            </section>
          )
        }
        <Pagination counterItem={counterItem} totalItem={ids.length} paginate={paginate}
        />
      </main>
    </>
  );
}

export default Cards;