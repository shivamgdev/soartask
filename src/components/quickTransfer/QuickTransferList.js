import React from 'react'
import styled from 'styled-components'

const QuickTransferList = ({image, name, designation }) => {

    const Container = styled.div`
        text-align: center;
        flex: 0 0 auto;

        img{
            weight: 50px;
            height: 50px;
        }
    `;

    const Name = styled.p`
        color: #232323;
        font-size: 15px;
        margin-top: 4px;
        font-weight: ${({designation}) => (designation === "CEO" ? 'bold' : 'none')};
    `;

    const Designation = styled.p`
        color: #718EBF;
        font-size: 14px;
        font-weight: ${({designation}) => (designation === "CEO" ? 'bold' : 'none')};
    `;
  return (
    <Container>
        <div>
            <img src={image} alt="person" />
        </div>

        <Name designation={designation}>{name}</Name>
        <Designation designation={designation}>{designation}</Designation>
    </Container>
  )
}

export default QuickTransferList