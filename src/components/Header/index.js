import styled from 'styled-components';
import Logo from '../Logo';
import MenuHeader from '../MenuHeader'

const HeaderContainer = styled.header`
    background-color: #efe1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <MenuHeader/>
        </HeaderContainer>
    )
}

export default Header