import React, { useState, useEffect } from 'react'
import { Personagem } from '../../components'
import { ListaPersonagem } from '../../../util/listaPersonagem'
import './selecionarTime.css'
export const SelecionarTime = () => {
    const [personagensSelecionados, setPersonagensSelecionado] = useState([])
    const [listaPersonagem, setListaPersonagem] = useState([])

    useEffect(() => {
        setListaPersonagem(ListaPersonagem)
    }, [])

    const cliquePersonagem = () => {
        //exibe informações do personagem
    }
    const removerPersonagemDoTime = (personagemID) => {
        const personagensTemp = personagensSelecionados.filter(personagem => personagem.id !== personagemID)
        setPersonagensSelecionado(personagensTemp)
    }
    const adicionarPersonagemNoTime = (personagemID) => {
        for (let i = 0; i < 3; i++) {
            if (!personagensSelecionados[i]) {
                const personagensTemp = [...personagensSelecionados]
                personagensTemp[i] = listaPersonagem.find(personagem => personagem.id === personagemID)
                setPersonagensSelecionado(personagensTemp)
                return
            }
        }
    }
    return (
        <div className="tela-personagem">
            <div className="container">
                <div className="parte-superior-personagem">

                    <div className="time-selecionado">
                        <h3>clique duas vezes para remover</h3>
                        <Personagem cliqueUnico={cliquePersonagem} cliqueDuplo={removerPersonagemDoTime} key={0} personagem={personagensSelecionados[0]} />
                        <Personagem cliqueUnico={cliquePersonagem} cliqueDuplo={removerPersonagemDoTime} key={1} personagem={personagensSelecionados[1]} />
                        <Personagem cliqueUnico={cliquePersonagem} cliqueDuplo={removerPersonagemDoTime} key={2} personagem={personagensSelecionados[2]} />
                    </div>
                    <div className="informacoes-personagem">

                    </div>
                </div>
                <div>
                    <h3>clique duas vezes para selecionar</h3>
                    <div className="personagem-selecionaveis">
                        {listaPersonagem.map((personagem, index) => <Personagem cliqueUnico={cliquePersonagem}
                            cliqueDuplo={adicionarPersonagemNoTime} key={index} personagem={personagem} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
