import styled from "@emotion/styled";


export const ContainerForm = styled.div`
    width: 310px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    text-align: center;
`

export const InputForm = styled.input`
    height: 35px;
    width: 310px;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    ::placeholder {
        padding-left: 15px;
    }

`
export const Title = styled.h3`
    margin-bottom: 10px;
`


export const ButtonForm = styled.button`
    border: 1px solid #ffffff;
    border-radius: 50%;
     height: 50px;
     width: 50px;
     background-image: url('https://www.svgrepo.com/show/228141/add-user-add.svg');
    background-repeat: no-repeat;
`
