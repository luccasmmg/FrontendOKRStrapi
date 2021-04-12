import React, { cloneElement, FC } from 'react';
import {
    List,
    Datagrid,
    TextField,
    useListContext,
    TopToolbar,
    sanitizeListRestProps,
    CreateButton,
    ExportButton,
} from 'react-admin';

const UserActions: any = (props: any) => {
  const {
      className,
      exporter,
      filters,
      maxResults,
      ...rest
  } = props;
  const {
      currentSort,
      resource,
      displayedFilters,
      filterValues,
      basePath,
      showFilter,
      total,
  } = useListContext();
  return (
      <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
          {filters && cloneElement(filters, {
              resource,
              showFilter,
              displayedFilters,
              filterValues,
              context: 'button',
          })}
          { props.permissions === "Superuser" &&
            <CreateButton basePath={basePath} />
          }
          <ExportButton
              disabled={total === 0}
              resource={resource}
              sort={currentSort}
              filterValues={filterValues}
              maxResults={maxResults}
          />
      </TopToolbar>
  );
};


export const UserList: FC = (props: any) => (
  <List {...props} actions={<UserActions permissions={props.permissions} {...props} />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField label="Nome de Usuário" source="username" />
      <TextField source="email" />
    </Datagrid>
  </List>
);
