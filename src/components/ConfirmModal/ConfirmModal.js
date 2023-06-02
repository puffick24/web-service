import style from './ConfirmModal.module.css'

const ConfirmModal = ({confirmModalActive, setConfirmModalActive, item, deleteItem}) => {
    const setModalStyle = `${style.confirm_modal_wrapper} ${confirmModalActive ? style.confirm_modal_active : ''}`

    const acceptHandle = () => {
        setConfirmModalActive(false)
        deleteItem(item.id)
    }

    const cancelHandle = () => {
        setConfirmModalActive(false)
    }
    
    return ( 
        
        <div className={setModalStyle} onClick = {() => {setConfirmModalActive(!confirmModalActive)}}>
            <div onClick = {e => e.stopPropagation()} className={style.confirm_modal_active_container}>
                <h3>Вы уверены?</h3>
                <div className={style.confirm_modal_buttons}>
                    <button className={style.accept} onClick = {acceptHandle}>Да</button>
                    <button className={style.cancel} onClick = {cancelHandle}>Нет</button>
                </div>
            </div>
        </div>
     );
}
 
export default ConfirmModal;