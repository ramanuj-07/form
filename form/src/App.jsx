import styled from 'styled-components'
function App() {

  return (
    <MainSignUpPage>
      <div className='signUp'>
        SignUp form
      </div>
      <div>
        <Container>
          <div>
            <Input> <input type="text" placeholder='First Name' /></Input>
            <Input> <input type="text" placeholder='Last Name' /></Input>
            <Input> <input type="text" placeholder='Username' /></Input>
            <Input> <input type="email" placeholder='Email' /></Input>
            <Input> <input type="password" placeholder='Enter Password' /></Input>
          </div>
        </Container>
      </div>

    </MainSignUpPage>

  )
}

export default App;

const Input = styled.form`

  background-color:grey;
  padding:25px;
  display: flex;
  justify-content: center;
  input {
    width: calc(100% - 50px); /* Adjust width considering padding  calc(100% - 50px);*/
    padding: 15px 20px; /* Padding for input field */
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Ensures padding and border are included in width */
  }

`
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
width:500px;
height: 600px;
background-color: #e8e5e5;
margin-top: 20px;

`
