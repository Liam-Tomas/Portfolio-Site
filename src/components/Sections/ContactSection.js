import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';  
import ContactModal from '../Modals/ContactModal'

const ContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 87.5vh;   // Take up the full viewport height
    background-color: none;
    text-align: center;   // Center the text within the elements
    z-index: 1000;
`;  

const ContactHeading = styled.h1`
    font-size: 2.8rem;
    color: ${props => props.theme.text};
    margin-bottom: 20px;
    font-weight:600;
`;

const ContactDescription = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.textGrey};
    max-width: 600px;   // Optional: to prevent the paragraph from being too wide on large screens
    margin-bottom: 30px;
    
`;

const ContactButton = styled(Button)`
`;

function ContactSection({ id }) {
    const [isContactModalOpen, setContactModalOpen] = useState(false);

    return (
        <ContactWrapper id={id}>
            <ContactHeading>Contact.</ContactHeading>
            <ContactDescription>
                I am looking forward to new opportunities! Please feel free to reach out to me by email for any questions and I will get back to you in a timely manner :)
            </ContactDescription>
            <ContactButton onClick={() => setContactModalOpen(true)}>
                Say Hello!
            </ContactButton>
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setContactModalOpen(false)}
            />
        </ContactWrapper>

    );
}

export default ContactSection;
