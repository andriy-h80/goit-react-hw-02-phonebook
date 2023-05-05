import styled from '@emotion/styled';

export const Phonebook = styled.div`

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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 15px;
    gap: 20px;
    width: 400px;
    // box-sizing: border-box;
    border: 1px solid;
    border-radius: 5px;
    font-weight: bold;
`;

export const ContactsList = styled.ul`
    margin: 5px;
    padding: 5px;
`;

export const ContactTitle = styled.h3`
    font-weight: bold;
    margin: 5px;
    margin-bottom: 10px;
`;

export const ContactFilter = styled.p`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin: 5px;
    margin-bottom: 10px;
`;

export const ContactName = styled.li`

`;