import React from 'react';
import styled from "styled-components";
import './sidebar.css'
import { AiFillHome } from "react-icons/ai";
import { MdMobileFriendly } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoBulb } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Sidebar = ({toggleSideBar, setToggleSideBar}) => {

  const SideMenu = styled.div`
    width: 230px;
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1140px){
      position: absolute;
      left: ${toggleSideBar ? '0px' : '-250px'};
      z-index: 10;
      transition: all 2s;
    }
  `;

  const LogoTitle = styled.h2({
    color: '#354d61'
  })
  
  const Logo = styled.div({
    display: 'flex',
    gap: '6px',
    marginTop: '20px',
    alignItems: 'center'
  })

  const Logoimg = styled.div`

    img{
      width: 20px;
    }
  `;

  const ItemsList = styled.div({
    marginTop: '35px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  })

  const ItemIcon = styled.div({
    fontSize: '20px',
    marginLeft: '42px'
  })

  const CloseIcon = styled.p`
    display: none;
    font-size: 22px;
    margin-left: 25px;
    cursor: pointer;

    @media(max-width: 1140px){
      display: contents;
    }
  `;
  
  return (
    <SideMenu>
        <Logo>
            <Logoimg>
                <img src={logo} alt="logo" /> 
            </Logoimg>

            <LogoTitle>Soar Task</LogoTitle>

            <CloseIcon onClick={() => setToggleSideBar(!toggleSideBar)}>X</CloseIcon>
        </Logo>


        <ItemsList>
            <NavLink to='/' className='Items'> 
              <ItemIcon>
                <AiFillHome/> 
              </ItemIcon>
              <p>Dashboard</p>
            </NavLink>

          <NavLink to='/transactions' className='Items'> 
            <ItemIcon>
              <MdMobileFriendly /> 
            </ItemIcon>
            <p>Transactions</p>
          </NavLink>

          <NavLink to='/account' className='Items'> 
            <ItemIcon>
              <FaUser/> 
            </ItemIcon>
            <p>Account</p>
          </NavLink>

          <NavLink to='/investments' className='Items'> 
            <ItemIcon>
              <IoBarChart/> 
            </ItemIcon>
            <p>Investments</p>
          </NavLink>

          <NavLink to='/creditcards' className='Items'> 
            <ItemIcon>
              <FaCreditCard/> 
            </ItemIcon>
            <p>Credit Cards</p>
          </NavLink>

          <NavLink to='/loans' className='Items'> 
            <ItemIcon>
              <FaHandHoldingUsd/> 
            </ItemIcon>
            <p>Loans</p>
          </NavLink>

          <NavLink to='/services' className='Items'> 
            <ItemIcon>
              <FaTools/> 
            </ItemIcon>
            <p>Services</p>
          </NavLink>

          <NavLink to='/privileges' className='Items'> 
            <ItemIcon>
              <IoBulb/> 
            </ItemIcon>
            <p>My Privileges</p>
          </NavLink>

          <NavLink to='/setting' className='Items'> 
            <ItemIcon>
              <IoIosSettings/> 
            </ItemIcon>
            <p>Setting</p>
          </NavLink>
        </ItemsList>
    </SideMenu>
  )
}

export default Sidebar