import styled from '@emotion/styled';

export const ContainerTitle = styled.h3`
  margin-bottom: 15px;
  padding-top: 25px;
`;

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  width: 350px;
  border: 10px solid #050f64;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #85a9ff;
  position: relative;
  ::before {
    content: '';
    height: 30px;
    width: 120px;
    border-radius: 5px;
    position: absolute;
    background-color: #050f64;
    top: -10px;
  }
`;


