import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Deposits from "../../Pages/Deposits/Deposits";
import Main from "../../Pages/Main/Main";
import { PageWrapper } from "../../utils/Styled/main";
import Footer from "../Footer/Footer";

const Wrapper = () => {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/deposits" element={<Deposits />} />
        </Routes>
        <Footer />
      </PageWrapper>
    </Router>
  );
};

export default Wrapper;
