import {
    List,
    Datagrid,
    TextField,
    DateField,
    DeleteButton,
    useGetList
} from 'react-admin';

const Tags = ({ record }) => {
  const { data, loaded } = useGetList("tags");
  if (!loaded) return <span>Loading</span>
  const tagNames = loaded && record.Tags ? Object.values(data).filter(tag => record.Tags.includes(tag.id)).map(tag => tag.Nome).join(",") : "Sem tags"
  return (
    <p>{tagNames}</p>
  )
}

export const ObjectivesList = (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="Nome" />
        <TextField source="Descricao" />
        <DateField source="DataInicio" />
        <DateField source="DataFim" />
        <TextField label="Responsável por objetivo" source="responsavel.username" />
        <Tags source="Tags" />
        <DeleteButton label="Deletar" />
      </Datagrid>
    </List>
);
