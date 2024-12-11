import React from 'react'
import styled from 'styled-components'


const TransactionList = ({icon, TransactionName, date, valueType, value}) => {

  const Box = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  `;

  const ImageBox = styled.div`

    @media(max-width: 1228px){
      width: 40px;
    }

    @media(max-width: 680px){
      width: 40px;

      img{
        width: 40px;
      }
    }
  `;

  const PositiveValue = styled.p`
    color: rgba(65, 212, 168, 1);

    @media(max-width: 1228px){
      font-size: 14px;
    }    
  `;

  const NegativeValue = styled.p`
    color: rgba(255, 75, 74, 1);

    @media(max-width: 1228px){
      font-size: 14px;
    }
    
  `;

  const TransactionListDate = styled.p`
    margin-top: 5px;
    font-size: 15px;
    color: rgba(113, 142, 191, 1);

    @media(max-width: 1228px){
      font-size: 14px;
      margin-top: 2px;
    }

    @media(max-width: 680px){
      font-size: 13px;
    }
  `;

  const TransactionListName = styled.p`

    @media(max-width: 1228px){
      font-size: 14px;
    }
  `;

  const LeftItems = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    @media(max-width: 680px){
      gap : 12px;
    }
  `;
  return (
    <Box>
        <LeftItems >
          <ImageBox>
              <img src={icon} alt="TransactionIcon" />
          </ImageBox>

          <div>
              <TransactionListName>{TransactionName}</TransactionListName>
              <TransactionListDate>{date}</TransactionListDate>
          </div>
        </LeftItems>
        <div>
            {
                valueType === 'positive' ? 
                    <PositiveValue>+${value}</PositiveValue>
                    :
                    <NegativeValue>-${value}</NegativeValue>
            }
        </div>
    </Box>
  )
}

export default TransactionList