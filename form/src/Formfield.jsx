import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Validate from "./Validate";
import Data from "./Data";

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
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [countryCode, setCountryCode] = useState('');

    useEffect(() => {
        if (formData.country) {
            const selectedCountry = countries.find(country => country.name === formData.country);
            if (selectedCountry) {
                setCountryCode(selectedCountry.phoneCode);
                setCities(selectedCountry.cities);
                setFormData({ ...formData, city: '' }); // Reset city when country changes
            }
        }
    }, [formData.country, countries]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = Validate(formData, setErrors);  // Call the Validate function
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            navigate('/success', { state: { formData } });
        }
    };

    const toggleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <InputWrapper>
                    <Input> <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                        {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}</Input>
                    <Input> <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                        {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}</Input>
                </InputWrapper>

                <Input> <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
                    {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}</Input>

                <InputWrapper>
                    <Input> <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </Input>
                    <Input> <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                        <TogglePasswordBtn onClick={toggleShowPassword}>{showPassword ? "Hide" : "show"}</TogglePasswordBtn>
                        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                    </Input>
                </InputWrapper>

                <InputWrapper>
                    <div className="countryCode">
                        <Input>
                            <select name="country" value={formData.country} onChange={handleChange}>
                                <option value="">Select Country</option>
                                {countries.map(country => (
                                    <option value={country.name} key={country.code}>{country.name}</option>
                                ))}
                            </select>
                            {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
                        </Input>
                        <Input>
                            <select name="city" value={formData.city} onChange={handleChange}>
                                <option value="">Select City</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                            {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                        </Input>
                    </div>
                    <Input>
                        <div>
                        <span>{countryCode}</span>
                            <input type="text" placeholder="PhoneNo." name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
                        </div>
                        {errors.phoneNo && <ErrorMessage>{errors.phoneNo}</ErrorMessage>}
                    </Input>

                </InputWrapper>

                <Input> <input type="text" placeholder="PAN No." name="panNo" value={formData.panNo} onChange={handleChange} />
                    {errors.panNo && <ErrorMessage>{errors.panNo}</ErrorMessage>}
                </Input>
                <Input> <input type="text" placeholder="Aadhar No." name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
                    {errors.aadharNo && <ErrorMessage>{errors.aadharNo}</ErrorMessage>}</Input>

            </div>
            <div className="btn">
                <Button>SUBMIT</Button>
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
const TogglePasswordBtn = styled.button`
  margin-left: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #ccc;
  border-radius: 4px;
  cursor: pointer;
`;