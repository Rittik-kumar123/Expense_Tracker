import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import Form from '../Form/Form';
import { useGlobalContext } from '../../context/globalContext';

const Income = () => {
  const {addIncomes,getIncomes,incomes} = useGlobalContext()
  useEffect(()=>{
    getIncomes()
  },[])
  return (
    <StyledIncome>
      <InnerLayout>
        <h1>Incomes</h1>
          <div className='income-content'>
            <div className='form-container'>
              <Form></Form>
            </div>
            <div className='incomes'></div>
          </div>
      </InnerLayout>
    </StyledIncome>
  )
}

const StyledIncome=styled.div``;

export default Income