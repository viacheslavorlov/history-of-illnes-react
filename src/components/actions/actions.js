export const daylyNotes = (object) => ({type: 'DAYLYNOTES', payload: object});
export const prijemnijStatus = (object) => ({type: 'PRIJEMNIJ_STATUS', payload: object});
export const operation = (object) => ({type: 'OPERATION', payload: object});
export const mainData = (object) => ({type: 'MAIN_DATA', payload: object});
export const showModal = () => ({type: 'SHOW_MODAL'});
export const hideModal = () => ({type: 'HIDE_MODAL'});