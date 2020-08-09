import React, { useEffect, useState } from 'react'
import './personagem.css'
import {PontoPergunta} from '../../../assets/images'

export const Personagem = ({cliqueUnico,cliqueDuplo,key,personagem}) => {
    const [icone,setIcone] = useState('')
    useEffect(()=>{
        if(!!personagem && !!personagem.icone){
            setIcone(personagem.icone)
        }else{
            setIcone(PontoPergunta)
        }
    },[personagem]) 

    const clicarUmaVez = ()=>{
        cliqueUnico(personagem.id)
    }
    const clicarDuasVez = () =>{
        cliqueDuplo(personagem.id)
    }
    let style = {
        backgroundImage: 'url(' + icone + ')'
    }
    return (
        <button className="item-personagem" onClick={clicarUmaVez} onDoubleClick={clicarDuasVez} style={style}/>
    )
}
