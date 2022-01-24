import { category } from "../data/categories";


export const getCurrentMonth = () =>{
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const FilterListByMonth = (list, date) => {
    let newList = [];
    let[year, month] = date.split('-');

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() +1) === parseInt(month)
        ){
            newList.push(list[i]);
        }
    }

    return newList;
};

export const formatDate = ( Date ) => {
    let year = Date.getFullYear();
    let month = Date.getMonth() +1;
    let day = Date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = ( n ) => {
    if(n<10){
        return `0${n}`;
    }else {
        return `${n}`;
    }
}

export const categoriesType = ( categoryType ) => {
    for(var i=0;i<3;i++){
        if(category[i].type === categoryType){
            return category[i];
        }
    } 
}

export const categoriesTitle = ( title ) => {
    for(var i=0;i<3;i++){
        if(category[i].title === title){
            return category[i];
        }
    } 
}

export const formatCurrentMonth = (currentMonth) => {
    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
                'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month)-1]} de ${year}`;

}