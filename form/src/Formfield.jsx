import styled from "styled-components";
import Acknowledge from './Acknowledge';

function Formfield() {

    return (
        <Form>
            <div className="nameField">
                <InputWrapper>
                    <Input> <input type="text" placeholder="First Name" /></Input>
                    <Input> <input type="text" placeholder="Last Name" /></Input>
                </InputWrapper>
                <Input> <input type="text" placeholder="Username" /></Input>

                <InputWrapper>
                    <Input> <input type="email" placeholder="Email Address" /></Input>
                    <Input> <input type="password" placeholder="Password" /></Input>
                </InputWrapper>

                <InputWrapper>
                    <div className="countryCode">
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
                    </div>
                    <Input><input type="text" placeholder="PhoneNo." /></Input>
                </InputWrapper>
                <Input> <input type="text" placeholder="PAN No." /></Input>
                <Input> <input type="text" placeholder="Aadhar No." /></Input>

                <div className="btn">
                    <Button onClick={Acknowledge} type="submit">SUBMIT</Button>
                </div>

            </div>
        </Form>
    )

}
export default Formfield;

const Form = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
/* flex:1; */
.btn{
    display:flex;
    justify-content:center;
    margin-top: 50px;
}
`
const Button = styled.button`

        display:flex;
        align-items:center;
        justify-content:center;
        background-color:black;
        color:white;
        border-radius: 5px;
        padding:10px 0;
        width:150px;
        cursor: pointer;
        border:none;
        &:hover{
            background-color: #4c4c4c;
        }
    
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px; 
  flex:1;
  .countryCode{
    display:flex; 
  }
`;

const Input = styled.form`
  padding:20px 30px;
  display: flex;
  flex:1;

  input {
    /* width: calc(50%); Adjust width considering padding  calc(100% - 50px); */
    padding: 10px 30px; /* Padding for input field */
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width:100%;
 
  }

`