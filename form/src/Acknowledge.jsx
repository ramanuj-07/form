import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Acknowledge() {
    const location = useLocation();
  const { formData } = location.state || {};

  return (
      <Container>
          <Title>Form Submitted Successfully!</Title>
      {formData && (
        <FormData>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone No:</strong> {formData.phoneNo}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>PAN No:</strong> {formData.panNo}</p>
          <p><strong>Aadhar No:</strong> {formData.aadharNo}</p>
        </FormData>
      )}
      </Container>
      
  )
}

export default Acknowledge;

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const FormData = styled.div`
    p {
        margin-bottom: 10px;
    }

    strong {
        margin-right: 5px;
    }
`;
