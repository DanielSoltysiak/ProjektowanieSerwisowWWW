import { createStore } from 'redux';

const defaultState = {
    foo: 'bar',
    bar: 'baz',
    quests: [
      {
        id: 1,
        questID: 1,
        questTitle: "Przykładowy tytuł1",
        questDesc: "Treść przykładowego zadania1",
        playerID: 1,
        imgSrc: "https://cdn.gamer-network.net/2018/metabomb/questpriestdecklistguidehearthstone2.jpg",
      },
      {
        id: 2,
        questID: 2,
        questTitle: "Przykładowy tytuł2",
        questDesc: "Treść przykładowego zadania2",
        playerID: 1,
        imgSrc: "https://cdn.gamer-network.net/2018/metabomb/questpriestdecklistguidehearthstone2.jpg",
      },
      {
        id: 3,
        questID: 3,
        questTitle: "Przykładowy tytuł3",
        questDesc: "Treść przykładowego zadania3",
        playerID: 1,
        imgSrc: "https://cdn.gamer-network.net/2018/metabomb/questpriestdecklistguidehearthstone2.jpg",
      }
    ]
}

const reducer =(state=defaultState, action) => {
    switch (action.type) {
      case 'SET':
        return {...state, ...action.payload}
      case 'APPLY': 
        return { ...state, ...action.payload(state) }
      case 'DELETE_QUEST':
        const index = state.quests.findIndex(quest => quest.id === action.payload)
        return { ...state, quests: [...state.quests.slice(0,index),...state.quests.slice(index+1)]}
      default:
        return state
    }
  }


export default createStore(reducer);