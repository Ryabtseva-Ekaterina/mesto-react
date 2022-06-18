import React from 'react';

function PopupWithForm ({name, title, isOpen, children, onClose}) {

    return (
        <section className={`popup popup_type_${name}`+' '+ (isOpen?'popup_opened':'')}>
            <div className="popup__container">
                <button className="popup__close-button edit-popup__close-button" type="button" aria-label="Закрыть" onClick={onClose} ></button>
                <form className="popup__container-form edit-popup__form" name={name} noValidate>
                    <h3 className="popup__container-form-title">{title}</h3>
                    {children}
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;