import React from 'react'
import "./styles/UserCard.css"
import swal from "sweetalert"

const UserCard = ({user, deleteUser, setupdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => { 
    setupdatingUser(user)
    handleClickShowModal()
  }

  const showAlert = () => { 
    swal({
      title: "ELIMINAR",
      text: "¿Deseas eliminar éste usuario?",
      icon: "warning",
      buttons: ["No", "Si"]
    }).then(respuesta => {
      if(respuesta){
        swal({
          text: "El usuario se ha eliminado con éxito",
          icon: "success",
          timer: "2000"
        })
        deleteUser(user.id)
      }
    })
  }
  
  // deleteUser(user.id)

  return (
    <article className='userCard'>
      <div className="userCard__info">
        <h3 className='userCard__name'>{user.first_name} {user.last_name}</h3>
        <hr />
        <ul className='userCard__list'>
          <li><span>Email:</span> {user.email}</li>
          <li><span>Birthday:</span> <i className='bx bx-gift'></i>{user.birthday}</li>
        </ul>
        <hr />
        <footer className='userCard__footer'>
          <button 
            className='userCard__btn' 
            onClick={showAlert}><i className='userCard__btn-trash bx bx-trash'></i></button>
          <button className='userCard__btn' onClick={handleClickEdit}><i className='userCard__btn-pencil bx bx-pencil'></i></button>
        </footer>
      </div>
    </article>
  )
}

export default UserCard
