import React from 'react';
import '../form.scss'

export const Item = ({items, onChange, onChecked}) => {
    return (
        <div className="form-contact__wrap__size">
            {
                items.map ((item, index) => {
                    return (
                        <div className="form-contact__group" key={index}>
                            <input 
                                type={item.type}
                                className="form-contact__group__input"
                                name={item.name}
                                value={item.value}
                                id={item.id} 
                                checked={onChecked(item.value)}
                                onChange={onChange}
                                />
                            <label
                                htmlFor={item.id}
                                >{item.value}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}