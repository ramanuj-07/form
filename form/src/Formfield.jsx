import styled from "styled-components";

function Formfield() {

    return (
        <Form>
            <InputWrapper>
                <Input><input type="text" placeholder='First Name' /></Input>
                <Input><input type="text" placeholder='Last Name' /></Input>
            </InputWrapper>

            <Input> <input type="text" placeholder='Username' /></Input>
            <InputWrapper>
                <Input>  <input type="email" placeholder='Email' /> </Input>
                <Input> <input type="password" placeholder='Enter Password' /> </Input>
            </InputWrapper>
            <InputWrapper>
                 <Input>
                <select name="country" id="">
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                </select>
            </Input>
            <Input>
                <select name="city">
                    <option value="">Select City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                </select>
            </Input>
            </InputWrapper>
           
            <Input>
                <input type="text" placeholder="Enter PAN no." />
            </Input>
            <Input>
                <input type="text" placeholder="Enter Aadhar no." />
            </Input>
            <Button> Submit</Button>
        </Form>
    )

}
export default Formfield;

const Form = styled.form`
display:flex;
align-items:center;
flex-direction:column;
`
const Button = styled.button`
display:flex;
align-items:center;
        background-color:black;
        color:white;
        border-radius: 5px;
        padding:10px 10px;
        width:150px;
        cursor: pointer;
        border:none;
        &:hover{
            background-color: #4c4c4c;
        }
    
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px; 

`;

const Input = styled.form`
  padding:25px;
  display: flex;
  justify-content:center;

  input {
    /* width: calc(50%); Adjust width considering padding  calc(100% - 50px); */
    padding: 10px 30px; /* Padding for input field */
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* Ensures padding and border are included in width */
    gap:20px;
 
  }

`