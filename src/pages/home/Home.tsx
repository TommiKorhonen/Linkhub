import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import previewImg from "../../assets/previewImg.png";
import { Container } from "../../components/styles/Container.styled";
import { SectionLeft, SectionRight, StyledHome } from "./Home.styled";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <StyledHome>
          <SectionLeft>
            <h1>The best & only bio link you need</h1>
            <p>Share your links in one place!</p>
            <Link to="/signup">Join for free!</Link>
          </SectionLeft>
          <SectionRight>
            <img src={previewImg} alt="example of users linkpage" />
          </SectionRight>
        </StyledHome>
      </Container>
    </>
  );
};

export default Home;
