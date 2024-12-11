import React from 'react'
import styled from 'styled-components';
import lightChip from '../../images/Chip_Card_light.svg'
import lightcardlogo from '../../images/cardlogo_light.svg'
import darkChip from '../../images/Chip_Card_dark.svg'
import darkcardlogo from '../../images/cardlogo_dark.svg'

const Card = ({type}) => {

    const UserCard = styled.div`
        flex: 1;
        border-radius: 20px;
        height: 210px;
        background: ${({ModeType}) => ModeType === "dark" ? 
            'linear-gradient(122deg, rgba(91, 90, 111, 1), rgba(0, 0, 0, 1))' : 'white'
            };

        color: ${({ModeType}) => ModeType === "dark" ? 'white' : 'black'};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    `;
    
    const FirstLine = styled.div({
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '20px',
        paddingInline: '20px'
    });

    const SecondLine = styled.div`
        display: flex;
        gap: 40px;
        padding-top: 0px;
        padding-inline: 20px;

        p{
            color: rgba(255, 255, 255, 0.7);
        }
    `;

    const LastLine = styled.div`
        display: flex;
        justify-content: space-between;
        background: ${({ModeType}) => ModeType === "dark" ? 
            'linear-gradient(122deg, rgba(91, 90, 111, 1), rgba(0, 0, 0, 1))' : 'white'
            };
        border-top: ${({ModeType}) => ModeType !== 'dark' ? '1px solid rgba(223, 234, 242, 1)' : 'none'};
        padding-block: 14px;
        padding-inline: 20px;
        
        p{
            color: ${({ModeType}) => ModeType === "dark" ? 'white' : 'rgba(52, 60, 106, 1)'};
            font-weight: 300;
            font-size: 22px;
        }

    `;

    const Info = styled.div`
        
        p{  
            color: ${({ModeType}) => ModeType === "dark" ? 'white' : 'rgba(113, 142, 191, 1)'};
            font-size: 12px;
            margin-bottom: 2px;
        }

        h2{
            color: ${({ModeType}) => ModeType === "dark" ? 'white' : 'rgba(52, 60, 106, 1)'};
            font-weight: 300;
        }

        h4{
            color: ${({ModeType}) => ModeType === "dark" ? 'white' : 'rgba(52, 60, 106, 1)'};
            font-weight: 300;
            font-size: 15px;
            margin-top: 4px;
        }
    `;

  return (
    <>
        {   type === 'dark' ?
   
        <UserCard ModeType={type}>
            <FirstLine>
                <Info ModeType={type}>
                    <p>Balance</p>
                    <h2>$5,759</h2>
                </Info>

                <div>
                    <img src={lightChip} alt="chip" />
                </div>
            </FirstLine>    

            <SecondLine>
                <Info ModeType={type}>
                    <p>CARD HOLDER</p>
                    <h4>Eddy Cusuma</h4>
                </Info>

                <Info ModeType={type}>
                    <p>VALID THRU</p>
                    <h4>12/22</h4>
                </Info>
            </SecondLine>

            <LastLine ModeType={type}>
                <p>3778 **** **** 1234</p>

                <div>
                    <img src={lightcardlogo} alt="cardlogo" />
                </div>
            </LastLine>
        </UserCard>
        
        :

        <UserCard>
            <FirstLine>
                <Info>
                    <p>Balance</p>
                    <h2>$5,759</h2>
                </Info>

                <div>
                    <img src={darkChip} alt="chip" />
                </div>
            </FirstLine>    

            <SecondLine>
                <Info>
                    <p>CARD HOLDER</p>
                    <h4>Eddy Cusuma</h4>
                </Info>

                <Info>
                    <p>VALID THRU</p>
                    <h4>12/22</h4>
                </Info>
            </SecondLine>

            <LastLine>
                <p>3778 **** **** 1234</p>

                <div>
                    <img src={darkcardlogo} alt="cardlogo" />
                </div>
            </LastLine>
        </UserCard>
        }
    </>
  )
}

export default Card