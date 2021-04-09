import { FC } from "react"
import { SimpleShowLayout, Tab, Show, TextField, DateField, ReferenceManyField, DeleteButton, EditButton, Datagrid, SelectField } from 'react-admin'
import { Tags } from './Tag'

export const ShowKeyResult: FC = (props) => (
    <Show {...props} actions={false} >
        <ReferenceManyField label="Tarefas" reference="tarefas" target="resultado_chave">
            <Datagrid>
                <TextField source="id" />
                <DateField source="PrazoEntrega" />
                <SelectField source="status" choices={[
                    { id: "doing", name: "Fazendo"},
                    { id: "done", name: "Feito"},
                    { id: "paused", name: "Pausado"},
                    { id: "canceled", name: "Cancelado"},
                    { id: "not_started", name: "Não começado"},
                ]} />
                <TextField source="Descricao" />
                <TextField label="Responsável" source="responsavel.username" />
                <DeleteButton label="Deletar" />
                <EditButton label="Editar" />
            </Datagrid>
        </ReferenceManyField>
    </Show>
)