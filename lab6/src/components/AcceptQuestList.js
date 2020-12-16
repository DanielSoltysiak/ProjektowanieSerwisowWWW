import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import SubmitRequest from './AcceptQuest'
import { useSnackbar } from 'notistack'

const AcceptQuestList = props => {
    const quests = useSelector(state => state.quests)
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const handleSubmit = quest => ({reason, percent}) => 
        new Promise((res,rej) => setTimeout((Math.floor(Math.random()*2))?res:rej),1000)
            .then(() => dispatch({type:'DELETE_QUEST',payload:quest.id}))
            .catch(err => enqueueSnackbar('Usuwanie nie powiodło się',{variant: 'error'}))
    const list = quests.map((quest) => <SubmitRequest {...quest} key={quest.id} onSubmit={handleSubmit(quest)}/>)
    return (<div>{list}</div>)
}

export default AcceptQuestList