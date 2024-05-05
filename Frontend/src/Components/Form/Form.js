import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../../context/globalContext'
// import Option from './Option';
import Button from '../Button/Button'
import { plus } from '../../utils/Icons';

const Form = () => {
  const {addIncome} = useGlobalContext()
    const [inputState,setInputState] = useState({
        title:'',
        amount:'',
        date:'',
        category:'',
        description:'',
    })
    const handleInput = name => e => {
        setInputState({...inputState,[name]: e.target.value})
    }
    const handleSubmit = e => {
      e.preventDefault()
      addIncome(inputState)
    }
  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className='input-control'>
        <input 
            type='text'
            value={inputState.title}
            name='title'
            placeholder='Your Salary'
            onChange={handleInput('title')}
        ></input>
      </div>
      <div className='input-control'>
        <input 
            type='text'
            value={inputState.amount}
            name='amount'
            placeholder='Enter Amount'
            onChange={handleInput('amount')}
        ></input>
        <div className='input-control'>
            <DatePicker id='date'
                placeholderText='Enter Date'
                selected={inputState.date}
                dateFormat='dd/MM/yyyy'
                onChange={(date) => {
                    setInputState({...inputState,date:date})
                }}
            ></DatePicker>
        </div>
      </div>
      <div className='selects input-control'>
        <select required value={inputState.category} name='category' id='category' onChange={handleInput('category')}>
          <option value="" disabled >Select options</option>
          <option value="pocketmoney">Pocket Money</option>
          <option value="stocks">Stocks</option>
          <option value="freelancing">Freelance</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className='input-control'>
        <textarea name='description' value={inputState.description} 
                                      placeholder='Add a refrence' 
                                      id='description' 
                                      cols='30' rows='4' 
                                      onChange={handleInput('description')}>
          </textarea>
      </div>
      <div className='submit-btn'>
        <Button
          name={'Add Income'}
          icon={plus}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent'}
          color={'#fff'}
        ></Button>
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;
input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .2rem 0.5rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }
}
.input-control{
    input{
        width: 50%;
    }
}

.selects{
    display: flex;
    justify-content: flex-start;
    select{
        color: rgba(34, 34, 96, 0.4);
        &:focus, &:active{
            color: rgba(34, 34, 96, 1);
        }
    }
}

.submit-btn{
    button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
        }
    }
}`;

export default Form
