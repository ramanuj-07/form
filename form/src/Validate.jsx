const Validate=(formData,setErrors) => {

    let formErrors = {};

    if (!formData.firstName) formErrors.firstName = 'First Name is required';
    if (!formData.lastName) formErrors.lastName = 'Last Name is required';
    if (!formData.username) formErrors.username = 'Username is required';
    if (!formData.email) formErrors.email = 'Email is required';

    if (!formData.password)
        formErrors.password = 'Password is required';
    else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
        formErrors.password = 'Password must contain at least 8 characters, including letters and numbers';
    }

    if (!formData.phoneNo) formErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) formErrors.country = 'Country is required';
    if (!formData.city) formErrors.city = 'City is required';
    if (!formData.panNo)
        formErrors.panNo = 'PAN Number is required';
    else if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(formData.panNo)) {
        formErrors.panNo = 'Incorrect PAN Number';
    }
    if (!formData.aadharNo) formErrors.aadharNo = 'Aadhar Number is required';
    else if (!/^\d{12}$/.test(formData.aadharNo)) {
        formErrors.aadharNo = 'Incorrect Aadhar Number';
    }

    setErrors(formErrors);

    // return Object.keys(formErrors).length === 0; 
    return formErrors;
}

export default Validate;