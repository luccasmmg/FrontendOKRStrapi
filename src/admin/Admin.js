import React, { FC, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fetchPOST } from '../utils/api';

const useStyles = makeStyles((theme) => ({
    link: {
      color: '#61dafb',
    },
  }));

export const Admin = () => {
    const [objetives, setObjectives] = useState([])
    const classes = useStyles();

    useEffect(async () => {
        const newObjectives = await fetch("/objetivos")
        const data = await newObjectives.json()
        setObjectives(objetives.concat(data))
    }, [])

    const data = {
        Nome: "teste",
        Descricao: "string",
        DataFim: "2021-04-03",
        DataInicio: "2021-04-03",
        Responsavel: "string",
        Categoria: "pessoal",
    }
    
    const addObjective = async () => {
        const newObjectives = await fetchPOST("objetivos", data)
        setObjectives(objetives.concat(newObjectives))
    }
    return(
        <>
        {objetives.map(objective => (<p>{objective.Nome}</p>))}
        <button onClick={() => addObjective()}>Clique aqui</button>
        <a className={classes.link} href="/logout">
          Logout
        </a>
        </>
    )
}