import React, { FC } from 'react';
import { KeyResultList } from '../KeyResults'
import {
  List,
  Datagrid,
  TextField,
  DateField,
} from 'react-admin';

interface Props {
  id?: any;
  record?: any;
  resource?: any;
}

const ListOfKeyResults: FC<Props> = ({id, record, resource}) => {
    console.log(record)
    return(
      <ul>
        {record.resultados_chave.map(resultado_chave => (
            <li>
              <h3>{resultado_chave.nome}</h3>
              <p>{resultado_chave.descricao}</p>
            </li>
        ))}
      </ul>
    )
}

export const ObjectivesList: FC = (props) => (
  <List {...props}>
    <Datagrid expand={<ListOfKeyResults />}>
      <TextField source="id" />
      <TextField source="Nome" />
      <TextField source="Descricao" />
      <DateField source="DataInicio" />
      <DateField source="DataFim" />
      <TextField source="responsavel.username" />
    </Datagrid>
  </List>
);
