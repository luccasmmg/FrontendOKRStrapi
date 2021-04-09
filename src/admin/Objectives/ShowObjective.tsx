import { FC } from "react"
import { SimpleShowLayout, Tab, Show, TextField, DateField, ReferenceManyField, DeleteButton, EditButton, Datagrid } from 'react-admin'
import { Tags } from './Tag'

export const ShowObjective: FC = (props) => {
    return(<Show {...props} actions={false} >
        <ReferenceManyField label="Resultados Chaves" reference="resultado-chaves" target="objetivo" source="id">
            <Datagrid>
                <TextField source="nome" />
                <TextField source="descricao" />
                <TextField label="Objetivo" source="objetivo.Nome" />
                <TextField label="Responsável" source="responsavel.username" />
                <Tags source="Tags" />
                <DeleteButton label="Deletar" />
                <EditButton label="Editar" />
            </Datagrid>
        </ReferenceManyField>
    </Show>)
}