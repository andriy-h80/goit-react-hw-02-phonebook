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
    padding: 5px;
    gap: 20px;
    // width: 500px;
    // box-sizing: border-box;
    border: 1px solid;
    font-weight: bold;
`;

export const ContactsList = styled.ul`
    margin: 5px;
    padding: 5px;
`;

export const ContactTitle = styled.p`
    font-weight: bold;
    margin: 5px;
`;

export const ContactName = styled.li`

`;