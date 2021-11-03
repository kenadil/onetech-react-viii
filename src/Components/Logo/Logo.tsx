import { Modal } from "@mui/material";
import { useState } from "react";
import {
  BurgerMenuIcon,
  FlexBox,
  ModalBox,
  ModalContainer,
  Title,
} from "../../utils/Styled/main";
import GeoSelector from "../Functional/GeoSelector/GeoSelector";
import LanguageSelector from "../Functional/LanguageSelector/LanguageSelector";

type LogoProps = {
  src: string;
};

const Logo = ({ src }: LogoProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <FlexBox className="jscfs">
      <BurgerMenuIcon onClick={handleOpen} />
      <div className="logo-container">
        <img src={src} alt="logo-forte" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <ModalContainer>
            <Title fontSize="1rem">Язык: </Title>
            <LanguageSelector />
            <Title padding="10px 0 0" fontSize="1rem">
              Ваш город:{" "}
            </Title>
            <GeoSelector isModal={true} />
          </ModalContainer>
        </ModalBox>
      </Modal>
    </FlexBox>
  );
};

export default Logo;
