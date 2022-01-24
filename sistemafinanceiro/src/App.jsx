import { useState, useEffect} from 'react';
import * as C from './App.styles'
import { items } from './data/items';
import { categoriesTitle, categoriesType, getCurrentMonth } from './helpers/dateFilter';
import { FilterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';


const App = () => {
    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    useEffect(()=> {
      setFilteredList( FilterListByMonth(list, currentMonth) );
    }, [list, currentMonth]);

    useEffect(()=>{
      let incomeCount = 0;
      let expenseCount = 0;

      for(let i in filteredList){
        if(categoriesType(filteredList[i].category).expense){
          expenseCount += filteredList[i].value;
        }else{
          incomeCount += filteredList[i].value;
        }
      }

      setIncome(incomeCount);
      setExpense(expenseCount);

    },[filteredList]);
    const handleMonthChange = (newMonth) => {
        setCurrentMonth(newMonth);
    }

    const handleAddItem = (Item) => {
        let newList = [...list];
        console.log(newList);
        newList.push(Item);
        setList(newList);
    }

    return(
      <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income = {income}
          expense = {expense}
          />
          <InputArea onAdd = {handleAddItem}/>
          <TableArea list={filteredList}/>
        </C.Body>
      </C.Container>
    );
}

export default App;