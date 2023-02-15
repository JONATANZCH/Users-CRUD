import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/ModalForm.css";

const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
};

const ModalForm = ({
    isShowModal,
    handleClickShowModal,
    createUser,
    updatingUser,
    updateUser,
    setupdatingUser
}) => {
    const { register, handleSubmit, reset } = useForm();

    const submit = (data) => {
        if(updatingUser) {
            updateUser(data, updatingUser.id)
        }else {
            createUser(data);
        }
        reset(defaultValues);
    };

    const handleClickClose = () => { 
        handleClickShowModal()
        reset(defaultValues)
        setupdatingUser()
    }

    useEffect(() => {
        if (updatingUser) {
        reset(updatingUser);
        }
    }, [updatingUser]);

    return (
        <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
        <form onSubmit={handleSubmit(submit)} className="modalForm__form">
            <h3 className="modalForm__title">{updatingUser ? "Edit User" : "New user"}</h3>
            <i
            onClick={handleClickClose}
            className="modalForm__x bx bx-x-circle"
            ></i>
            <div className="modalForm__div">
            <label className="modalForm__label" htmlFor="">
                First Name
            </label>
            <input
                className="modalForm__input"
                type="text"
                {...register("first_name")}
            />
            </div>
            <div className="modalForm__div">
            <label className="modalForm__label" htmlFor="">
                Last Name
            </label>
            <input
                className="modalForm__input"
                type="text"
                {...register("last_name")}
            />
            </div>
            <div className="modalForm__div">
            <label className="modalForm__label" htmlFor="">
                Email
            </label>
            <input
                className="modalForm__input"
                type="email"
                {...register("email")}
            />
            </div>
            <div className="modalForm__div">
            <label className="modalForm__label" htmlFor="">
                Password
            </label>
            <input
                className="modalForm__input"
                type="password"
                {...register("password")}
            />
            </div>
            <div className="modalForm__div">
            <label className="modalForm__label" htmlFor="">
                Birthday
            </label>
            <input
                className="modalForm__input"
                type="date"
                {...register("birthday")}
            />
            </div>
            <button className="modalForm__btn">{updatingUser ? "Save changes" : "Add new user"}</button>
        </form>
        </section>
    );
};

export default ModalForm;
