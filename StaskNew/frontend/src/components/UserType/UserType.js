import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import classes from './UserType.css'
const UserType = props => {
    
        const animatedComponents = makeAnimated();
        return(
            <div className={classes.UserType}>
                <Input
                    type='email'
                    label='Участник проекта'
                />
                <div className={classes.SelectGroup}>
                    <label style={{margin: '0',paddingBottom: '2px',width: '220px'}}>Тип пользователя</label>
                    <Select
                        closeMenuOnSelect={false}
                        defaultValue={props.selectValue}
                    />
                </div>
            </div>
        )
    }


export default UserType;