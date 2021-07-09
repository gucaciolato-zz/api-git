import React, { useState } from "react"
import axios from 'axios'
import * as S from './style'
import { useHistory } from 'react-router-dom' 

export default function App(props) {
  const history = useHistory()
  const [usuario, setUsuario] = useState('')
  const [ erro, setErro] = useState(false)
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
      const repositories = response.data
      const repositoriesName = []
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      setErro(false)
      history.push('./repositories')
      })
      .catch(err => {
      setErro(true)
      })
  }
  
  return (
    <S.HomeContainer>
      <S.Title>Listar repositórios do GitHub</S.Title>
      <S.Content>
        <S.Input className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro, tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  )
}