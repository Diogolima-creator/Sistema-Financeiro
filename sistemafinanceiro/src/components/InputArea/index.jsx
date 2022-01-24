import { useState } from 'react/cjs/react.development'
import { category } from '../../data/categories';
import * as C from './styles'
import { categoriesTitle } from '../../helpers/dateFilter';

export const InputArea = ( { onAdd }) => {

    const[dateField, setDateField] = useState('');
    const[categoryField, setCategoryField] = useState('');
    const[titleField, setTitleField] = useState('');
    const[valueField, setValueField] = useState(0);
    
    let categoryKeys = Object.keys(category);

    const handleAddEvent = () =>{
        let erros = [];

        if(isNaN(new Date(dateField).getTime())) {
            erros.push('Data inválida!');
        }

        if(!categoryKeys.includes(categoryField)){
            erros.push('Categoria Inválida');
        }
        if(titleField === ''){
            erros.push('Titulo vazio!')
        } 
        if(valueField <= 0){
            erros.push('Valor Inválido!');
        }

        if(erros.length > 0){
            alert(erros.join("\n"))
        }else{
            onAdd({
                date: new Date(dateField),
                category: category[categoryField].type,
                title: titleField,
                value: valueField
            }
            );
            clearFields();
        }
        
        }

        const clearFields = () => {
            setDateField('');
            setCategoryField('');
            setTitleField('');
            setValueField(0);
        }

    return(
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)}></C.Input>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select value={categoryField} onChange= {e => setCategoryField(e.target.value)}>
                    <>
                        <option></option>
                        {categoryKeys.map((key,index) => (
                            <option key={index} value={key}>{category[key].title}</option>
                        ))}
                    </>
                </C.Select>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)}></C.Input>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))}></C.Input>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputTitle>➕</C.InputTitle>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
            </C.InputLabel>
        </C.Container>
    );
}