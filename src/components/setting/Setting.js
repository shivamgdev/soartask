import React, { useRef, useState } from 'react'
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';
import person1 from '../../images/person1.svg';
import editIcon from '../../images/editicon.svg';
import InputField from '../inputField/InputField';

const Setting = ({toggleSideBar, setToggleSideBar}) => {

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

  const PageContent = styled.div`
    padding-inline: 28px;
    padding-block: 28px; 
    background-color: white;
    margin: 26px;
    border-radius: 24px;
    max-width: 1200px;

    @media(max-width: 520px){
      margin: 18px;
    }
  `;

  const SettingNavbar = styled.div`
    display: flex;
    width: 100%;
    gap : 58px;
    border-bottom: 1px solid #F4F5F7;

    @media(max-width: 520px){
      gap : 20px;
      justify-content: space-between;
    }
  `;
  
  const Tab = styled.p`
    border-bottom: ${({isActive}) => (isActive ? '3px solid black' : 'none')};
    padding-bottom: 8px;
    color: ${({isActive}) => (isActive ? 'black' : '#718EBF')};
    cursor: pointer;

    @media(max-width: 520px){
      font-size:14px;
    }
  `;

  const ProfileContainer = styled.div`
    margin-top: 28px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 16px;

    @media(max-width: 680px){
      grid-template-columns: 1fr;
    }
  `;

  const ProfilePic = styled.div`
    display: flex;
    justify-content: center;
    height: fit-content;

    .profile{
      width: 100px;
    }

    .mainImage{
      position: relative;
    }

    .editicon{
      z-index: 1;
      width: 25px;
      position: absolute;
      bottom: 0px;
      right: 0px;
      cursor: pointer;

      input[type='file'] {
        display: none;    
      }
    }

    .editicon img{
      width: 100%;
    }
  `;

  const TwoFields = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 16px;

    @media(max-width: 520px){
      flex-direction: column;
    }
  `; 

    const SaveButton = styled.div`
      display: flex;
      justify-content: end;

      button{
        background-color: black;
        width: 150px;
        padding-block: 10px;
        color: white;
        cursor: pointer;
        border-radius: 15px;

        &:hover{
          background-color: #434040;
        }

        @media(max-width: 680px){
          width: 100%;
        }
      }
    `;

  const [activeForm, setActiveForm] = useState(1);
  const [profileImage, setProfileImage] = useState(person1);
  const inputFile = useRef(null);

  const handleProfilePic = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]))
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
            PageTitleName={'Setting'}
          />
          
          {/* MAIN Content Page */}
          <div style={{overflowY: 'auto', flex: 1}}>
          
            <PageContent>

                <SettingNavbar>
                  <Tab 
                    isActive={activeForm === 1} 
                    onClick={() => setActiveForm(1)}
                  >Edit Profile</Tab>
                  
                  <Tab
                    isActive={activeForm === 2} 
                    onClick={() => setActiveForm(2)}
                  >Preferences</Tab>

                  <Tab
                    isActive={activeForm === 3} 
                    onClick={() => setActiveForm(3)}
                  >Security</Tab>
                </SettingNavbar>

                {
                  activeForm === 1 &&

                  <ProfileContainer>
                    
                    <ProfilePic>

                        <div className='mainImage'>
                          <img src={profileImage} alt="img1" className='profile'/>
                          
                          <div className='editicon' onClick={() => inputFile.current.click()}>
                            <input type="file" onChange={handleProfilePic} ref={inputFile}/>
                            <img src={editIcon} alt="editicon" />
                          </div>
                        </div>

                    </ProfilePic>

                    <div>
                    
                      <TwoFields>

                        {/* Input Field Component */}
                        <InputField
                          labelName={'Your Name'}
                          type={'text'}
                          name={'name'}
                          placeholder={'Enter Your Name'}
                        />
                        <InputField
                          labelName={'User Name '}
                          type={'text'}
                          name={'name'}
                          placeholder={'Enter User Name'}
                        />
                      </TwoFields>

                      <TwoFields>

                        {/* Input Field Component */}
                        <InputField
                          labelName={'Email'}
                          type={'Email'}
                          name={'email'}
                          placeholder={'Enter Your Email'}
                        />
                        <InputField
                          labelName={'Password'}
                          type={'password'}
                          name={'password'}
                          placeholder={'**************'}
                        />
                      </TwoFields>

                      <TwoFields>

                        {/* Input Field Component */}
                        <InputField
                          labelName={'Date of Birth'}
                          type={'date'}
                          name={'DOB'}
                        />
                        <InputField
                          labelName={'Present Address'}
                          type={'text'}
                          name={'presentAddress'}
                          placeholder={'Enter Present Address'}
                        />
                      </TwoFields>

                      <TwoFields>

                        {/* Input Field Component */}
                        <InputField
                          labelName={'Permanent Address'}
                          type={'text'}
                          name={'permanentAddress'}
                          placeholder={'Enter Permanent Address'}
                        />
                        <InputField
                          labelName={'City'}
                          type={'text'}
                          name={'city'}
                          placeholder={'Enter City'}
                        />
                      </TwoFields>

                      <TwoFields>

                        {/* Input Field Component */}
                        <InputField
                          labelName={'Postal Code'}
                          type={'number'}
                          name={'postalCode'}
                          placeholder={'Enter Postal Code'}
                        />
                        <InputField
                          labelName={'Country'}
                          type={'text'}
                          name={'country'}
                          placeholder={'Enter Country'}
                        />
                      </TwoFields>

                      <SaveButton>
                        <button>
                          Save
                        </button>
                      </SaveButton>
                    </div>

                  </ProfileContainer>
                }
            </PageContent>
        
          </div>

        </RightContainer>
      </Container>    
    </>
  )
}

export default Setting