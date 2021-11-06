import { useState } from "react";
import {
  ExpressOffer,
  FlexBox,
  PdfViewer,
  PlainText,
  Title,
} from "../../../utils/Styled/main";
import OfferModal from "./OfferModal";

const ExpressInfo = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ExpressOffer>
      <PlainText fontSize="0.875rem">
        Продолжая я подтверждаю, что ознакомился с{" "}
        <span onClick={handleClick}>условиями соглашения</span> и даю согласие
        на обработку своих персональных данных
      </PlainText>
      <OfferModal
        handleClose={handleClose}
        open={open}
        nodes={
          <>
            <FlexBox className="jscsp">
              <Title fontSize="1.5rem">
                Условия соглашения по оформлению кредита
              </Title>
              <PlainText onClick={handleClose}>Закрыть</PlainText>
            </FlexBox>
            <PdfViewer data="/Documents/agreement.pdf">
              <p data-aria-label={"incompatible"}>
                Ваш браузер не поддерживает данный плагин - воспользуйтесь
                ссылкой{" "}
                <a href="/Documents/agreement.pdf">
                  для ознакомления с условиями
                </a>
              </p>
            </PdfViewer>
          </>
        }
      />
      <PlainText padding="24px 0" fontSize="0.875rem" color="#737373">
        Для точного расчета необходимо оставить заявку
      </PlainText>
    </ExpressOffer>
  );
};

export default ExpressInfo;
