import styled from "styled-components";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Formfield() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let formErrors = {};

        if (!formData.firstName) formErrors.firstName = 'First Name is required';
        if (!formData.lastName) formErrors.lastName = 'Last Name is required';
        if (!formData.username) formErrors.username = 'Username is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (!formData.phoneNo) formErrors.phoneNo = 'Phone Number is required';
        if (!formData.country) formErrors.country = 'Country is required';
        if (!formData.city) formErrors.city = 'City is required';
        if (!formData.panNo) formErrors.panNo = 'PAN Number is required';
        if (!formData.aadharNo) formErrors.aadharNo = 'Aadhar Number is required';

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            navigate.push('/success', formData);
        }
    };


    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <InputWrapper>
                    <Input> <input type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                        {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}</Input>
                    <Input> <input type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} /></Input>
                </InputWrapper>
                <Input> <input type="text" placeholder="Username" value={formData.username} onChange={handleChange} /></Input>

                <InputWrapper>
                    <Input> <input type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} /></Input>
                    <Input> <input type="password" placeholder="Password" value={formData.password} onChange={handleChange} /></Input>
                </InputWrapper>

                <InputWrapper>
                    <div className="countryCode">
                        <Input>
                            <select name="country" value={formData.country} onChange={handleChange}>
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                            </select>
                        </Input>
                        <Input>
                            <select name="city" value={formData.city} onChange={handleChange}>
                                <option value="">Select City</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="New York">New York</option>
                                <option value="London">London</option>
                            </select>
                        </Input>
                    </div>
                    <Input><input type="text" placeholder="PhoneNo." value={formData.phoneNo} onChange={handleChange} /></Input>
                </InputWrapper>
                <Input> <input type="text" placeholder="PAN No." value={formData.panNo} onChange={handleChange} /></Input>
                <Input> <input type="text" placeholder="Aadhar No." value={formData.aadharNo} onChange={handleChange} /></Input>

            </div>
            <div className="btn">
                <Button type="submit" disabled={!validate()}>SUBMIT</Button>
            </div>
        </Form>
    )

}
export default Formfield;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

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