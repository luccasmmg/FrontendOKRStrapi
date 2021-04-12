import { useGetList, useRecordContext } from "ra-core";

type TagsProps = {
  source: string,
}

export const Tags = ({ source }: TagsProps) => {
  const record = useRecordContext();
  const { data, loaded } = useGetList("tags");
  if (!loaded) return <span>Loading</span>
  const tagNames = loaded && record[source] ? Object.values(data).filter(tag => record[source].includes(tag.id)).map(tag => tag.Nome).join(",") : "Sem tags"
  return (
    <p>{tagNames}</p>
  )
}
