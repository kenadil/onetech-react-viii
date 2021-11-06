import { Container, ExpressOfferModal } from "../../../utils/Styled/main";

type OfferModalProps = {
  open: boolean;
  handleClose: () => void;
  nodes: React.ReactNode;
};

const OfferModal = ({ open, handleClose, nodes }: OfferModalProps) => {
  return (
    <ExpressOfferModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <div className="inner">{nodes}</div>
      </Container>
    </ExpressOfferModal>
  );
};

export default OfferModal;
