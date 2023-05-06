import styled from '@emotion/styled';

export const Phonebook = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    fontSize: 40;
    width: 500px;
    background-color: #eeea9e;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
`;

export const ContactsList = styled.ul`
    margin: 5px;
    padding: 5px;
`;

export const Contacts = styled.h2`
    font-weight: bold;
    margin: 5px;
    margin-bottom: 10px;
`;

export const Filter = styled.p`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin: 5px;
    margin-bottom: 10px;
`;

export const ContactName = styled.li`

`;