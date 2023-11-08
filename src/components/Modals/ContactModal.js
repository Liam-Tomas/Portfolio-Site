import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import Button from '../Button';

const ContactContent = styled.div`
  padding: 2.5rem;
  z-index: 1000;
  text-align: left;
  background-color: ${props => props.theme.background};
`;

const ContactHeader = styled.h2`
  font-size: 2rem;
  font-weight:500
  color: ${props => props.theme.text};

`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width:450px;
  color: ${props => props.theme.text};
`;

const Input = styled.input`
  padding: 10px;
  // border: .5px solid ${props => props.theme.textGrey};
  border-radius: 4px;
  font-family: 'Roboto Mono', monospace;
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.text};
  &::placeholder {
    color: ${props => props.theme.textGrey};
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  // border: .5px solid ${props => props.theme.textGrey};
  min-height: 100px;
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.text};
  font-family: 'Roboto Mono', monospace;
  &::placeholder {
    color: ${props => props.theme.textGrey};
  }
`;

const ContactInfo = styled.div`
  font-family: 'Roboto Mono', monospace;  
  color: ${props => props.theme.textGrey};

`

const SubmitButton = styled.button`

`;

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ContactContent>
        <Form>
          <ContactHeader>Contact Me</ContactHeader>
          <ContactInfo>ltarmstrong94@gmail.com; (650) 384-5746</ContactInfo>
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Input type="subject" placeholder="Subject" required />
          <Textarea placeholder="Message"></Textarea>
          <Button type="submit" variant="contained">SEND</Button>
        </Form>
      </ContactContent>
    </Modal>
  );
};

export default ContactModal;
