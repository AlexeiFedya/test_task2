import React, {useState, useEffect, useCallback} from 'react';
import queryString from 'query-string';

import {Item} from './item/item';
import {itemsObj} from './object-items/objects-items'

import './form.scss';


export const Form = () => {
    const [parametr, setParametr] = useState({})
    const [sale, setSale] = useState({sales: "1"})


    const {size , color, manufacturer} = parametr
    const { radio, checkbox, sales} = itemsObj


    let url = "http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd"

    const getData = useCallback(
        () => {
            const location = new URL(url)
            const parsed = queryString.parse(location.search);
            setParametr(parsed)
        },
        [url],
    );

    useEffect (()=> {
        getData()
    }, [getData])

    useEffect (()=> {
        const isEmpty = (obj) => {
            for (let key in obj) {
                return true
            }
            return false;
        }
        if (isEmpty(parametr)) {
            const newurl = queryString.stringify(parametr);
            console.log("New Url: ", `http://любой_домен/filter?${newurl}`)
        }
    }, [parametr])



    const handlerRadioInput = (e) => {
        const itemValue = e.target.value;
            setParametr((prevState)=> {
                return {
                    ...prevState,
                    size: itemValue
                };
                })
    }

    const handlerSale = (e) => {
        const itemValue = e.target.value;
        if (itemValue === sale.sales) {
            setSale({sales: ""})
        } else (
            setSale({sales: "1"})
        )
    }

    const handlerCheckboxInput = (e) =>{
        const itemValue = e.target.value;
        const itemPosition = color.indexOf(itemValue, 0)
        
        if (itemPosition !== -1) {
            setParametr((prevState)=> {
            
            const newArray = [
                ...color.slice(0, itemPosition), 
                ...color.slice(itemPosition + 1)];
        
            return {
                ...prevState,
                color: newArray
            };
        
            })
        } else {
            setParametr((prevState)=> {
            
                const newArray = [
                    ...color, 
                    itemValue];
            
                return {
                    ...prevState,
                    color: newArray
                };
            
                })
        }
    }



    const handlerSelectInput = (e) => {
        const itemValue = e.target.value;
        const itemPosition = manufacturer.indexOf(itemValue, 0)
        
        if (itemPosition !== -1) {
            setParametr((prevState)=> {
            
            const newArray = [
                ...manufacturer.slice(0, itemPosition), 
                ...manufacturer.slice(itemPosition + 1)];
        
            return {
                ...prevState,
                manufacturer: newArray
            };
        
            })
        } else {
            setParametr((prevState)=> {
                const newArray = [
                    ...manufacturer, 
                    itemValue];
                return {
                    ...prevState,
                    manufacturer: newArray
                };
                })
        }
        
    }

    const radioChackedorNo = (name) => {
        if (name === size){
            return true
        }
        return false
    }
    const saleChackedorNo = (name) => {
        if (name === sale.sales){
            return true
        }
        return false
    }

    const checkboxChackNo = (name) => {
        if (typeof(color) === "object") {
            if (color.includes(name)) {
                return true
            }
        }
        return false
    }


    return (
        <form className="form-contact">
            <div className="form-contact__wrap">
                <Item items={radio} onChange={handlerRadioInput} onChecked={radioChackedorNo}/>
                <Item items={checkbox} onChange={handlerCheckboxInput} onChecked={checkboxChackNo}/>
                <div className="form-contact__wrap__size">
                    <select name="manufacturer" value={manufacturer} multiple className="form-contact__select" onChange={handlerSelectInput}>
                        <option value="aaa" >aaa</option>
                        <option value="b&c" >b&c</option>
                        <option value="ddd" >ddd</option>
                        <option value="eee" >eee</option>
                    </select>
                </div>
                <Item items={sales} onChange={handlerSale} onChecked={saleChackedorNo}/>
            </div>
                <button 
                    type="submit" 
                    className="form-contact__group__button"
                    disabled
                >Submit</button>
        </form>
    )
}