import styled from 'styled-components'
import Formfield from './Formfield';
import { useState } from 'react';

function App() {



  return (
    <MainSignUpPage>
      <div className='signUp'>
        SignUp form
      </div>
      <div>
        <Container>
        <Formfield></Formfield>
        </Container>
      </div>

    </MainSignUpPage>

  )
}

export default App;

const MainSignUpPage = styled.div`
display:flex;
flex-direction: column;
align-items:center;
padding:20px;
.signUp{
  font-size:20px;
}
`
const Container = styled.div`
width: calc(50vw + 500px);
background-color: #e8e5e5;
margin-top: 20px;

`
