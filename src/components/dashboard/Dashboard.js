import React, { useRef } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import styled from 'styled-components'
import Card from '../cards/Card'
import TransactionList from '../recentTransaction/TransactionList'
import creditCardIcon from '../../images/creditCardIcon.svg'
import dollerIcon from '../../images/dollerIcon.svg'
import paypalIcon from '../../images/paypalIcon.svg'
import ActivityChart from '../activityChart/ActivityChart'
import ExpanceChart from '../expanceChart/ExpanceChart'
import QuickTransferList from '../quickTransfer/QuickTransferList'
import person2 from '../../images/person2.svg'
import person3 from '../../images/person3.svg'
import person4 from '../../images/person4.svg'
import sendIcon from '../../images/sendicon.svg'
import BalanceChart from '../balanceChart/BalanceChart'
import { Link } from 'react-router-dom'

const Dashboard = ({toggleSideBar, setToggleSideBar}) => {

  const Container = styled.div({
    height: '100vh',
    width: '100%',
    display: 'flex',
  })

  const RightContainer = styled.div({
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  })

  const PageContent = styled.div({
    flex: 1,
    overflowY: 'auto', 
    paddingInline: '18px',  
    paddingBlock: '22px',  
  });

  const DashboardCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;  
    max-width: 1200px;

    @media(max-width: 950px){
      grid-template-columns: 1fr 1fr;
    }

    @media(max-width: 610px){
      grid-template-columns: 1fr;
    }
  `;

  const MyCards = styled.div`
    grid-column: 1 / span 2;

    @media(max-width: 610px){
      grid-column: 1 / span 1;
      
    }

    @media(max-width: 540px){
      overflow-x: hidden;
    }
  `;

  const MyCardsInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
      color: black;
      text-decoration: none;
      &:hover{
        color: blue;
        cursor: pointer;
      }
    }
  `;

  const Cards = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 12px;
    
    @media(max-width: 540px){
      width: 600px;
    }
  `;

  const RecentTransaction = styled.div`

    @media(max-width: 950px){
      margin-top: 12px;
    }
  `;

  const RecentTransactionCard = styled.div`
    background-color: white;
    border-radius: 20px;
    height: 210px;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    padding-inline: 20px;
    padding-block: 16px;
    overflow-y: auto;

    @media(max-width: 950px){
      margin-top: 18px;
      max-width: 100%;
      height: 240px;
    }
  `;
  
  const Activity = styled.div`
    grid-column: 1 / span 2;
    margin-top: 12px;

    @media(max-width: 950px){
      grid-column: 2 / span 1;
    }

    @media(max-width: 610px){ 
      grid-column: 1 / span 1;
    }
  `;
  
  const ExpenseStatistics = styled.div`
    margin-top: 12px;
  `;
  
  const QuickTransfer = styled.div`
    overflow: hidden;
    margin-top: 12px;
  `;

  const QuickTransferBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    border-radius: 20px;
    height: 250px;
    margin-top: 18px;
    padding-inline: 20px;
    padding-block: 16px;
    width: 100%;
    overflow-x: hidden;
    position: relative;
  `;

  const QuickTransferListitems = styled.div`
    flex: 1;
    display: flex;
    scroll-behavior: smooth;
    padding-left: 30px;
    padding-right: 30px;
    gap: 28px;
    align-items: center;
    overflow-x: scroll;
    ${'' /* justify-content: center;     */}
    ${'' /* justify-content: space-between; */}

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const RightArrow = styled.div`
    text-align: center;
    border-radius: 50%;
    padding-inline: 14px;
    padding-block: 10px;
    background-color: white;
    color: #718EBF;
    font-size: 20px;
    box-shadow: 3px 3px 8px 0px #00000036;
    cursor: pointer;
    position: absolute;
    top: 46px;
    right:10px;
    z-index: 3;
  `;

  const LeftArrow = styled.div`
    text-align: center;
    border-radius: 50%;
    padding-inline: 14px;
    padding-block: 10px;
    background-color: white;
    color: #718EBF;
    font-size: 20px;
    box-shadow: 3px 3px 8px 0px #00000036;
    cursor: pointer;
    position: absolute;
    top: 46px;
    left:10px;
    z-index: 3;
  `;

  const SendAmountBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
      color: #718EBF;
    }
  `;

  const AmountInput = styled.form`
    padding-block: 6px;
    padding-left: 12px;
    background-color: #EDF1F7;
    border-radius: 30px;
    height: 40px;
    display: flex;
    align-items: center;

    input{
      font-size: 16px;
      background: transparent;
      border: none;
      outline: none;
      width: 70px;
    }

    button{
      height: 40px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      background-color: black;  
      color: white;
      font-size: 15px;
      width: 100px;
      margin-left: 12px; 
      cursor: pointer;

      &:hover{
        background-color: #434040; 
      }
    }
  `;

  const BalanceHistory = styled.div`
    margin-top: 12px;
    grid-column: 2 / span 2;

    @media(max-width: 950px){
      grid-column: 1 / span 2;
    }

    @media(max-width: 610px){
      grid-column: 1 / span 1;
    }
  `;

  const CardsTitle = styled.h2`
    font-size: 22px;
    color: rgba(52, 60, 106, 1);
    font-weight: 600;

    @media(max-width: 610px){
      font-size: 18px;
    }
  `;

  const ListRef = useRef(null);

  const handleScroll = (direction) => {
    if(ListRef.current){
      const scrollPixel = ListRef.current.clientWidth;

      ListRef.current.scrollBy({
        left: direction === "right" ? scrollPixel : -scrollPixel,
        behavior: "smooth"  
      });

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Amount Sent successfully')
  } 
  
  return (
    <>
      <Container>

        {/* Sidebar component */}
        <Sidebar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>

        <RightContainer>

          {/* Navbar component */}
          <Navbar 
            setToggleSideBar={setToggleSideBar} 
            toggleSideBar={toggleSideBar}
            PageTitleName={'Overview'}
          />

          {/* MAIN Content Page */}
          <PageContent>
              <DashboardCards>

                <MyCards>
                  <MyCardsInfo>
                    <CardsTitle>My Cards</CardsTitle>
                    <Link to="/">See All</Link>
                  </MyCardsInfo>

                  <Cards>

                    {/* Card Component */}
                    <Card type={'dark'}/>
                    <Card/>

                  </Cards>
                </MyCards>
                
                <RecentTransaction>
                  <div>
                    <CardsTitle>Recent Transaction</CardsTitle>
                  </div>

                  <RecentTransactionCard>

                    {/* TransactionList Component */}
                    <TransactionList
                      icon={creditCardIcon}
                      TransactionName={'Deposit from my Card'}
                      date={'28 January 2021'}
                      valueType={'negative'}
                      value={800} 
                    />
                    <TransactionList
                      icon={paypalIcon}
                      TransactionName={'Deposit Paypal'}
                      date={'21 January 2021'}
                      valueType={'positive'}
                      value={2500} 
                    />
                    <TransactionList
                      icon={dollerIcon}
                      TransactionName={'Jemi Wilson'}
                      date={'25 January 2021'}
                      valueType={'positive'}
                      value={4000} 
                    />
                  </RecentTransactionCard>
                </RecentTransaction>

                <Activity>
                  <div>
                    <CardsTitle>Weekly Activity</CardsTitle>
                  </div>

                  <div>

                    {/* Activity Chart Component */}
                    <ActivityChart/>
                  </div>
                </Activity>

                <ExpenseStatistics>
                  <div>
                    <CardsTitle>Expense Statistics</CardsTitle>
                  </div>

                  <div>

                    {/* Expance Chart Component */}
                    <ExpanceChart/>
                  </div>
                </ExpenseStatistics>

                <QuickTransfer>
                  <div>
                    <CardsTitle>Quick Transfer</CardsTitle>
                  </div>

                  <QuickTransferBox>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                     
                        <LeftArrow onClick={() => handleScroll("left")}>
                          &lt;
                        </LeftArrow>

                      <QuickTransferListitems ref={ListRef}>

                        {/* Quick Transfer List Component*/}
                        <QuickTransferList
                          image={person4}
                          name={'Livia Bator'}
                          designation={'CEO'}
                        />
                        <QuickTransferList
                          image={person3}
                          name={'Randy Press'}
                          designation={'Director'}
                        />
                        <QuickTransferList
                          image={person2}
                          name={'Workman'}
                          designation={'Designer'}
                        />
                        <QuickTransferList
                          image={person3}
                          name={'Randy Press'}
                          designation={'Director'}
                        />
                        <QuickTransferList
                          image={person2}
                          name={'Workman'}
                          designation={'Designer'}
                        />
                        <QuickTransferList
                          image={person3}
                          name={'Randy Press'}
                          designation={'Director'}
                        />
                        <QuickTransferList
                          image={person2}
                          name={'Workman'}
                          designation={'Designer'}
                        />
                      </QuickTransferListitems>

                      <RightArrow onClick={() => handleScroll("right")}>
                        &gt;
                      </RightArrow>
                    </div>

                    <SendAmountBox>
                      <p>Write Amount</p>

                      <AmountInput onSubmit={handleSubmit}>
                        <input 
                          type="number" 
                          name='quicktransferamount'
                          placeholder='00.00'
                          required
                        />

                        <button type='submit'>
                          Send
                          <img src={sendIcon} alt="sendicon" />
                        </button>
                      </AmountInput>
                    </SendAmountBox>
                  </QuickTransferBox>

                </QuickTransfer>

                <BalanceHistory>
                  <div>
                    <CardsTitle>Balance History</CardsTitle>
                  </div>          

                  <div>

                    {/* Balance Chart Component */}
                    <BalanceChart/>
                  </div>       
                </BalanceHistory>

              </DashboardCards>

          </PageContent>
        </RightContainer>
      </Container>
    </>
  )
}

export default Dashboard