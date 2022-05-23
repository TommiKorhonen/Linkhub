import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import previewImg from "../../assets/previewImg.png";
import { Container } from "../../components/styles/Container.styled";
import { SectionLeft, StyledHome } from "./Home.styled";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <StyledHome>
          <SectionLeft>
            <h1>The best & only bio link you need</h1>
            <p>Share your links in one place!</p>
            <Link
              to="/signup"
              className=" bg-violet-500 w-96 text-center text-white py-4"
            >
              Join for free!
            </Link>
          </SectionLeft>
          <section className="lg:flex hidden items-center justify-end">
            <img src={previewImg} alt="" />
          </section>
        </StyledHome>
      </Container>
    </>
  );
};

export default Home;
