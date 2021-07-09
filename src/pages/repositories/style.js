import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #fff;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #020727;
    color: #fff;
    padding: .5rem;
    border-radius: .25rem .25rem .25rem .25rem;
`
export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #020727;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
    font-family: sans-serif;
    border-radius: .25rem .25rem .25rem .25rem;
`