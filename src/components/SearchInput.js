import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filteredTodo } from '../redux/todos/todosSlice';


const SearchInput = () => {

  const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      dispatch(filteredTodo(''));
  }, [dispatch]);

  const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      dispatch(filteredTodo(value));
  };

  return (
    <section className='searchInput'>
        <input type="text" placeholder='Search...' value={searchTerm} onChange={handleInputChange}/>
    </section>
  )
}

export default SearchInput