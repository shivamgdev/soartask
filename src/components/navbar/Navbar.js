import React from 'react'
import styled from 'styled-components'
import searchicon from '../../images/searchicon.svg'
import settingicon from '../../images/setting.svg'
import notification from '../../images/notification.svg'
import person1 from '../../images/person1.svg'
import hamburger from '../../images/hamburger.svg'

const Navbar = ({toggleSideBar, setToggleSideBar, PageTitleName}) => {

    const NavbarContainer = styled.div`
        background-color: white;
        padding-inline: 15px;
        padding-block: 10px; 
    `;

    const NavBox = styled.div({
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    })

    const RightMenu = styled.div({
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    })

    const SearchBox = styled.div`
        display: flex;
        align-items: center;
        gap: 12px;
        background-color: rgba(245, 247, 250, 1);
        padding-block: 10px;
        padding-left: 18px;
        padding-right: 12px;
        border-radius: 30px;

        input{
            outline: none;
            border: none;
            font-size: 15px;
            background-color: transparent;
        }

        @media(max-width: 900px){
            display: none;
        }
    `;

    const SearchBox2 = styled.div`
        display: none;

        @media(max-width: 900px){
            display: flex;
            align-items: center;
            gap: 12px;
            background-color: rgba(245, 247, 250, 1);
            padding-block: 8px;
            padding-left: 18px;
            padding-right: 12px;
            border-radius: 30px;
            margin-top: 12px;

            input{
                outline: none;
                border: none;
                font-size: 14px;
                background-color: transparent;
            }   
        }
    `;

    const IconBox = styled.div`
        background-color: rgba(245, 247, 250, 1);
        border-radius: 50%;
        display: flex;
        align-items: cente;
        justify-content: center;
        padding: 10px;
        cursor:pointer;

        @media(max-width: 1140px){
            display: none;
        }   
    `;

    const PersonIconBox = styled.div`
        border-radius: 50%;

        img{
            width:  50px;
            height: 50px;

            @media(max-width: 520px){
                width:  35px;
                height: 35px;
            }
        }

    `;

    const HamburgerIcon = styled.div`
        display: none;
        cursor: pointer;

        @media(max-width: 1140px){
            display: contents;
        }   
    `;

    const PageTitle = styled.h2`
        font-size: 28px;
        color: rgba(52, 60, 106, 1);
        font-weight: 600;

        @media(max-width: 520px){
            font-size: 20px
        }
    `;
    
  return (
    <NavbarContainer>
    <NavBox>

        <HamburgerIcon onClick={() => setToggleSideBar(!toggleSideBar)}>
            <img src={hamburger} alt="hamburger" />
        </HamburgerIcon>

        <PageTitle>{PageTitleName}</PageTitle>

        <RightMenu>
            <SearchBox>   
                <div>
                    <img src={searchicon} alt="icon" />
                </div>
                <div>
                    <input type="text" placeholder='Search for something' />
                </div>
            </SearchBox>

            <IconBox>
                <div>
                    <img src={settingicon} alt="setting" />
                </div>
            </IconBox>

            <IconBox>
                <div>
                    <img src={notification} alt="notification" />
                </div>
            </IconBox>

            <PersonIconBox>
                <div>
                    <img src={person1} alt="person1" />
                </div>
            </PersonIconBox>
        </RightMenu>
            
    </NavBox>
            <SearchBox2>   
                <div>
                    <img src={searchicon} alt="icon" />
                </div>
                <div>
                    <input type="text" placeholder='Search for something' />
                </div>
            </SearchBox2>

    </NavbarContainer>
  )
}

export default Navbar