import { useState } from "react";
///internal
import { NavbarContainer, Img, InputBox, IconBox, Input } from "./styled";
import Logo from "../../assets/images/Logo_White.png";
import { ReactComponent as SearchIcon } from "../../assets/icon/search-icon@2x.svg";

const Navbar = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const toggleMode = () => {
    setIsSearch((oldValue) => !oldValue);
  };

  return (
    <NavbarContainer>
      <Img src={Logo} alt="7peaks" />
      {isSearch ? (
        <InputBox>
          <Input placeholder="Search all news" autoFocus onBlur={toggleMode} />
          <SearchIcon />
        </InputBox>
      ) : (
        <IconBox onClick={toggleMode}>
          <SearchIcon />
        </IconBox>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
