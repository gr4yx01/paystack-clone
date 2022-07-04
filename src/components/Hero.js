import styled from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";

function Hero() {
  return (
    <HeroContainer>
      <HeroBody>
        <HeroBodyContent>
          <h1>Modern online and Offline payments for Africa</h1>
          <span>
            Paystack helps businesses in Africa get paid by anyone,
            <br />
            anywhere in the world
          </span>
          <div>
            <button>Create a free account</button>
            <span>or Contact Sales</span>
          </div>
        </HeroBodyContent>
        <HeroGlobalMap>Global Map</HeroGlobalMap>
      </HeroBody>
      <HeroFooter>
        <HeroFooterContent>
          <Logos>
            <span>Trusted by over 60,000 businesses</span>
            <Logo>
              <img src="/images/Dominos-Plain.svg" alt="" />
              <img src="/images/MTN-Plain.svg" alt="" />
              <img src="/images/Bolt-Stack-Blue_200304_153027.svg" alt="" />
              <img src="/images/Axa-mansard-_-Plain.svg" alt="" />
            </Logo>
          </Logos>
          <Text>
            <div className="">
              <p>Watch MTN Chief Transformation Officer, Olubayo</p>
              <p>Adekanmbi, discuss working with Paystack</p>
            </div>
            <AiFillPlayCircle />
          </Text>
        </HeroFooterContent>
      </HeroFooter>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  width: 100%;
`;

const HeroBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  margin-top: 1.7em;
`;

const HeroBodyContent = styled.div`
  letter-spacing: 1.25px;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.5em;
    max-width: 25ch;
    font-family: "Kantumruy Pro", sans-serif;
  }

  span {
    font-size: 0.9rem;
    font-weight: 400;
    color: gray;
  }

  div {
    margin-top: 1.4em;

    span {
      font-size: 0.7rem;
      font-weight: bold;
      color: var(--btnColor);
    }

    button {
      padding: 0.8em;
      border: none;
      background-color: var(--btnColor);
      border-radius: 5px;
      margin-right: 1em;
      font-weight: bold;
      color: #fff;
    }
  }
`;
const HeroGlobalMap = styled.div``;
const HeroFooter = styled.div`
  width: 100%;
  margin-bottom: 1.3em;
`;

const HeroFooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10em;

  span {
    font-size: 0.7rem;
    margin-bottom: 0.6em;
  }
`;

const Text = styled.div`
  width: 350px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 12em;
  display: flex;
  align-items: center;

  div {
    margin-right: 0.4em;
  }

  svg {
    color: #0ba4db;
    font-size: 1.8em;
  }

  p {
    text-align: end;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 120px;
    margin-right: 0.7em;
  }

  img:nth-child(2),
  img:nth-child(3) {
    width: 50px;
    margin-right: 0.8em;
  }
`;
