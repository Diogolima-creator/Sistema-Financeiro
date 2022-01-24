import * as C from './styles';

import { formatDate } from '../../helpers/dateFilter'
import { categoriesType } from '../../helpers/dateFilter'



export const TableItem = ( { item } ) => {
    
    return(

        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color = { categoriesType(item.category).color}>
            {categoriesType(item.category).title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={ categoriesType(item.category).expense ? 'red' : 'green'}>
                R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}