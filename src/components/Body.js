import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { BiChevronRightCircle } from "react-icons/bi";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";

function Body() {
  return (
    <BodyContainer>
      <BodyHeader>
        <h2>Simple, easy payments</h2>
        <p>Building a business is hard. Getting paid shouldn't be.</p>
      </BodyHeader>
      {/* C-feature */}
      <CFeature>
        <CFeatureLeft>
          <img
            src="/images/Collect-Payments-for-Multiple-Channels-1.1.gif"
            alt=""
          />
        </CFeatureLeft>
        <CFeatureRight>
          <CFeatureText>
            <div className="cfeature-text">
              <h1>
                Delight customers with a <br />
                seamless payments
                <br />
                experience
              </h1>
              <p>
                Give your customers the gift of modern, frictionless,
                <br /> painless payments. Integrate Paystack once and let your
                <br /> customers pay you however they want.
              </p>
            </div>
            <AvailablePlatform>
              <div className="mark">
                <TiTick />
                <span>Card</span>
              </div>
              <div className="mark">
                <TiTick />
                <span>Bank Account</span>
              </div>
              <div className="mark">
                <TiTick />
                <span>Bank Transfer</span>
              </div>
              <div className="mark">
                <TiTick />
                <span>USSD</span>
              </div>
              <div className="mark">
                <TiTick />
                <span>Apple Pay</span>
              </div>
              <div className="mark">
                <TiTick />
                <span>Visa QR</span>
              </div>
              <div className="mark">
                <TiTick />
                <span>Mobile Money</span>
              </div>
              <div className="mark">
                <TiTick />
                <span>POS(Coming soon)</span>
              </div>
            </AvailablePlatform>
            <div className="cfeature-text">
              <h1>
                Enjoy Phenomenal
                <br />
                transaction success rates
              </h1>
              <p>
                We automatically route payments through the most
                <br />
                optimal channels, ensuring the highest transaction
                <br />
                success rates in the market.
              </p>
            </div>
            <div className="direction">
              <BiChevronRightCircle />
              <span>Find out how we achieve high success rates</span>
            </div>
          </CFeatureText>
        </CFeatureRight>
      </CFeature>
      <CFeature>
        <CFeatureLeft>
          <CFeatureText>
            <div className="cfeature-text">
              <h1>
                Build custom payments
                <br />
                experiences with well-
                <br />
                documented APIs
              </h1>
              <p>
                Developers love our thorough, well-documented APIs
                <br />
                that let you to build everything from simple weekend
                <br />
                projects, to complex financial products serving hundred
                <br />
                of thousands of customers. If you can imagine it, you can
                <br />
                build it with Paystack.
              </p>
            </div>
            <AvailablePlatformNonGrid>
              <div className="mark">
                <TiTick />
                <span>
                  Collect one-time and recurring payments from your app
                  <br />
                  or website
                </span>
              </div>
              <div className="mark">
                <TiTick />
                <span>Make instant transfers</span>
              </div>
              <div className="mark">
                <TiTick />
                <span>Retrieve all your transaction and customer data</span>
              </div>
              <div className="mark">
                <TiTick />
                <span>Retrieve all your transaction and customer data</span>
              </div>
            </AvailablePlatformNonGrid>
            <div className="direction">
              <BiChevronRightCircle />
              <span>Paystack API Quickstart</span>
            </div>
          </CFeatureText>
        </CFeatureLeft>
        <CFeatureRight>
          <img src="/images/Robust-Suite-of-APIs-Opt.png" alt="" />
        </CFeatureRight>
      </CFeature>
      <CFeature>
        <CFeatureLeft>
          <video loop js-play>
            <source
              src="/images/Advanced-Fraud-Protection.mp4"
              type="video/mp4"
            />
          </video>
        </CFeatureLeft>
        <CFeatureRight>
          <CFeatureText>
            <div className="cfeature-text">
              <h1>
                Protect yourself and your
                <br />
                customers with advanced
                <br />
                fraud detection
              </h1>
              <p>
                Paystack's combination of automated and manual fraud
                <br />
                systems protect you from fraudulent transactions and
                <br />
                associated chargeback claims.
              </p>
            </div>
            <div className="cfeature-text">
              <h1>
                Detailed reporting for
                <br />
                accounting reconciliation,
                <br />
                and audits
              </h1>
              <p>
                Understand your customers' purchase patterns and do
                <br />
                easy reconciliations with a robust data Dashboard and
                <br />
                easy exports.
              </p>
            </div>
          </CFeatureText>
        </CFeatureRight>
      </CFeature>

      {/* C-section */}
      <TrustContainer>
        <TrustContainerPattern />

        <CSectionContainer>
          <CSectionText>
            <h1>Trusted by 70,000+ businesses</h1>
            <p>
              Thousands of organizations of all sizes trust Paystack to grow
              their
              <br />
              business.
            </p>
          </CSectionText>
          <CSectionCardContainer>
            <CSectionCard>
              <img
                src="/images/For-International-Businesses_180823_165939.svg"
                alt=""
              />
              <div className="cSectionCardText">
                <h2>
                  Paystack for
                  <br />
                  Global Brands
                </h2>
                <p>
                  We help global brands accept payments
                  <br />
                  from across Africa
                </p>
              </div>
              <div className="direction">
                <BiChevronRightCircle />
                <span>Learn More</span>
              </div>
            </CSectionCard>
            <CSectionCard>
              <img src="/images/For-Entrepreneurs_180823_165709.svg" alt="" />
              <div className="cSectionCardText">
                <h2>
                  Paystack for
                  <br />
                  Entrepreneurs
                </h2>
                <p>
                  From startup to scale-up, we can support
                  <br />
                  you at every stage of your businesses
                  <br />
                  growth
                </p>
              </div>
              <div className="direction">
                <BiChevronRightCircle />
                <span>Learn More</span>
              </div>
            </CSectionCard>
            <CSectionCard>
              <img
                src="/images/For-Large-Corporations_180823_165502.svg"
                alt=""
              />
              <div className="cSectionCardText">
                <h2>
                  Paystack for
                  <br />
                  Large Organizations
                </h2>
                <p>
                  Paystack helps many of the largest
                  <br />
                  corporate and government organizations in
                  <br />
                  Nigeria get paid quickly and securely.
                </p>
              </div>
              <div className="direction">
                <BiChevronRightCircle />
                <span>Learn More</span>
              </div>
            </CSectionCard>
          </CSectionCardContainer>
        </CSectionContainer>
      </TrustContainer>
      {/* partnership */}
      <PartnerShipContainer>
        <PartnerShipText>
          <h2>
            Powering growth for amazing
            <br />
            businesses
          </h2>
          <p>
            Paystack is a growth engine for a new generation of innovative,
            forward-
            <br />
            looking organizations operating in Africa.
          </p>
        </PartnerShipText>
        <PartnerShips>
          <img src="/images/Air-Peace-Stack-Blue_200305_154114.svg" alt="" />
          <img src="/images/FilmHouse-Stack-Blue_200304_153641.svg" alt="" />
          <img src="/images/Piggyvest-Stack-Blue_200304_153734.svg" alt="" />
          <img src="/images/Ibom-Air-Stack-Blue_200304_154259.svg" alt="" />
          <img src="/images/kuda-Stack-Blue_200304_154345.svg" alt="" />
          <img src="/images/Ariiya-Stack-Blue_200304_155307.svg" alt="" />
          <img src="/images/Dominos-Plain.svg" alt="" />
          <img src="/images/MTN-Plain.svg" alt="" />
          <img src="/images/Lagos-Internal-Revenue-Service.svg" alt="" />
          <img src="/images/Bolt-Stack-Blue_200304_153027.svg" alt="" />
          <img src="/images/Betway-Plain.svg" alt="" />
          <img src="/images/carbon-dark.svg" alt="" />
          <img src="/images/Axa-mansard-_-Plain.svg" alt="" />
          <img src="/images/Abia-State-University.svg" alt="" />
          <img src="/images/GIGM-Plain_180827_172142.svg" alt="" />
          <img src="/images/IrokoTV-Plain.svg" alt="" />
          <img src="/images/Smile-Plain_180827_172218.svg" alt="" />
          <img src="/images/Cowrywise-dark.svg" alt="" />
        </PartnerShips>
      </PartnerShipContainer>
      <InvestorSection>
        <InvestorSectionPattern />
        <InvestorContainer>
          <InvestorContainerHeader>
            <h1>
              Backed by strong global
              <br />
              partners
            </h1>
            <p>
              Paystack is backed by notable investors as well as some of the
              best
              <br />
              payments companies on the planet.
            </p>
          </InvestorContainerHeader>
          <InvestorsCardContainer>
            <InvestorCard>
              <img src="/images/Stripe-Logo-blue.png" alt="" />
              <p>
                Paystack is highly technical and fanatically
                <br />
                customer oriented. We're excited to back
                <br />
                such people in one world of the world's fastest-
                <br />
                growing regions.
              </p>
              <div className="investor">
                <img src="/images/patrick-collison-headshot.jpg" alt="" />
                <div className="investor-info">
                  <h3>Patrick Collison</h3>
                  <span>CEO, Stripe</span>
                </div>
              </div>
            </InvestorCard>

            <InvestorCard>
              <img src="/images/Visa-_-Color.png" alt="" />
              <p>
                Our investment in Paystack aligns with the
                <br />
                kind of investments we look for - those that
                <br />
                will help extend our reach into the global
                <br />
                commerce ecosystem
              </p>
              <div className="investor">
                <img src="/images/otto-williams.jpeg" alt="" />
                <div className="investor-info">
                  <h3>Otto Williams</h3>
                  <span>
                    Head of Strategic Partnerships, Fintech & Ventures CEMEA,
                    Visa
                  </span>
                </div>
              </div>
            </InvestorCard>

            <InvestorCard>
              <div className="y-combinator">
                <img src="/images/ycombinator-logo.png" alt="" />
                <p>
                  As YC's first Nigerian startup Paystack
                  <br />
                  leads the charge of great companies
                  <br />
                  coming out of Africa, powering modern
                  <br />
                  payments for an entire continent.
                </p>
                <div className="investor">
                  <img src="/images/michael-siebel-headshot.jpeg" alt="" />
                  <div className="investor-info">
                    <h3>Michael Seibel</h3>
                    <span>CEO,Partner, Y Combinator</span>
                  </div>
                </div>
              </div>
            </InvestorCard>
          </InvestorsCardContainer>
        </InvestorContainer>
      </InvestorSection>

      <PaymentCallToActionSectionContainer>
        <PaymentCallToActionPattern />
        <PaymentCallToActionContainer>
          <div className="text">
            <span>Try Paystack Now</span>
            <h2>Start accepting payments in just 30 minutes</h2>
          </div>
          <button>Create a free account</button>
        </PaymentCallToActionContainer>
      </PaymentCallToActionSectionContainer>

      {/* footer */}
      <FooterContainer>
        <FooterTop>
          <div className="first-column column">
            <h3>Why Paystack</h3>
            <div className="top links">
              <a href="#">Why Choose Paystack</a>
              <a href="#">Sucess Rates</a>
            </div>
            <div className="middle links">
              <a href="#">For Entrepreneurs</a>
              <a href="#">For Corporates</a>
              <a href="#">For International Companies</a>
              <a href="#">For Startups</a>
            </div>
            <div className="bottom links">
              <a href="#">For Fintechs</a>
              <a href="#">For Schools</a>
              <a href="#">For Betting</a>
            </div>
          </div>

          <div className="second-column column">
            <div>
              <h3>Pricing</h3>
              <div className="links">
                <a href="#">Nigeria</a>
                <a href="#">Ghana</a>
                <a href="#">South Africa</a>
              </div>
            </div>
            <div>
              <h3>Customers</h3>
              <div className="links">
                <a href="#">Testimonials</a>
              </div>
            </div>
            <div>
              <h3>Learn</h3>
              <div className="links">
                <a href="#">Blog</a>
                <a href="#">Guides</a>
                <a href="#">Video Tutorials</a>
                <a href="#">Decode Fintech</a>
                <a href="#">Commerce</a>
              </div>
            </div>
          </div>

          <div className="third-column column">
            <div>
              <h3>Developers</h3>
              <div className="links">
                <a href="#">Overview</a>
                <a href="#">Documentation</a>
                <a href="#">Integrations</a>
                <a href="#">Status Page</a>
              </div>
            </div>
            <div>
              <h3>Community</h3>
              <div className="links">
                <a href="#">Nigeria Lagos</a>
              </div>
            </div>
            <div>
              <h3>Support</h3>
              <div className="links">
                <a href="#">Help Desk</a>
                <a href="#">Contact Us</a>
                <a href="#">Why Was I Debited?</a>
              </div>
            </div>
          </div>

          <div className="four-column column">
            <div>
              <h3>About</h3>
              <div className="links">
                <a href="#">Company</a>
                <a href="#">Subscribe</a>
                <a href="#">Compliance</a>
                <a href="#">Careers</a>
                <a href="#">Media Kit</a>
                <a href="#">Privacy & Terms</a>
              </div>
            </div>
          </div>
        </FooterTop>
        <FooterHr />
        <FooterBottom>
          <div className="first-column column">
            <div>
              <h3>Contact</h3>
              <a href="#">hello@paystack.com</a>
              <div className="social-media">
                <AiFillFacebook />
                <BsTwitter />
                <BsInstagram />
                <AiFillLinkedin />
                <FaYoutubeSquare />
              </div>
            </div>
          </div>

          <div className="second-column column">
            <div>
              <h3>Lagos</h3>
              <p>
                126 Joel Ogunnaike Street,
                <br />
                Ikeja GRA, Ikeja,
                <br />
                Lagos, Nigeria
                <br />
              </p>
              <a href="#" className="contact">
                +234 163 16160
              </a>
            </div>

            <div>
              <h3>Accra</h3>
              <p>
                AfricaWorks,
                <br />
                35 Patrice Lumumba Road,
                <br />
                Airport Residential Area,
                <br />
                Accra, Ghana
              </p>
            </div>
          </div>

          <div className="third-column column">
            <div>
              <h3>San Francisco</h3>
              <p>
                345 Oyster Point Blvd.,
                <br />
                South San Francisco,
                <br />
                CA 94080
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="four-column column">
            <div>
              <h3>Cape Town</h3>
              <p>
                HOUSE_OF,
                <br />
                Elkay Housee(4th Floor),
                <br />
                186 Loop St, Cape Town City Centre,
                <br />
                Cape Town, 8001,
                <br />
                South Africa
              </p>
            </div>
          </div>
        </FooterBottom>
      </FooterContainer>
    </BodyContainer>
  );
}

export default Body;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.4em;
  }

  span {
    font-size: 0.9rem;
  }
`;

const BodyHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10em;
  margin-bottom: 1em;
  margin-top: 6.4em;
`;

const CFeature = styled.div`
  display: flex;
  margin-top: 3.5em;

  img {
    margin-top: 1.5em;
  }
`;

const CFeatureText = styled.div`
  .cfeature-text h1 {
    margin-bottom: 0.3em;
  }

  .cfeature-text:nth-child(2) {
    margin-top: 4em;
  }

  .direction {
    margin-top: 1.5em;
    display: flex;
    align-items: center;
    color: #3bb75e;
    font-weight: bold;

    svg {
      font-size: 1.3em;
      margin-right: 0.3em;
      color: #3bb75e;
    }
  }
`;

const CFeatureLeft = styled.div`
  margin-left: 10em;
  margin-right: 3.4em;
  img {
    width: 32vw;
  }

  video {
    width: 35vw;
  }
`;
const CFeatureRight = styled.div`
  margin-top: 0;
  img {
    width: 500px;
  }
`;

const AvailablePlatform = styled.ul`
  display: grid;
  grid-template-columns: 200px 200px;
  margin-bottom: 3em;
  margin-top: 1em;
  .mark {
    background-color: rgba(0, 255, 0, 0.07);
    width: 20px;
    height: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    padding: 5px;
    margin-top: 0.2em;
    position: relative;
    border-radius: 5px;

    svg {
      color: lightgreen;
    }

    span {
      position: absolute;
      left: 20px;
      width: 400px;
    }
  }
`;

const AvailablePlatformNonGrid = styled(AvailablePlatform)`
  display: block;

  .mark:nth-child(1) {
  }

  .mark {
    position: relative;
  }
`;

const TrustContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #eaf6fc;
  z-index: -1;
  margin-top: 2.5em;
`;

const TrustContainerPattern = styled.div`
  background-image: url("/images/checked-pattern-blue.png");
  position: absolute;
  top: 0;
  left: 0;
  background-size: 90%;
  opacity: 0.1;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;

const CSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
`;

const CSectionText = styled.div`
  margin-bottom: 1.9em;
  width: 70%;

  h1 {
    font-family: Roboto;
    margin-bottom: 0.4em;
    font-size: 2.5em;
  }
`;

const CSectionCardContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
`;

const CSectionCard = styled.div`
  overflow: hidden;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #f0f2f3;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 40px 32px 0px;
  box-shadow: 0px 1px 6px rgb(0 0 0 / 2%);
  background: white;
  position: relative;
  z-index: 2;
  margin-right: 0.5em;

  img {
    width: 80px;
    margin-bottom: 1.2em;
  }

  .cSectionCardText h2 {
    font-size: 1em;
  }

  .cSectionCardText p {
    font-size: 0.9em;
  }

  .direction {
    display: flex;
    margin-top: 1em;
    align-items: center;

    svg {
      color: lightgreen;
      margin-right: 0.3em;
      font-size: 1.2em;
    }
  }
`;

const PartnerShipContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const PartnerShipText = styled.div`
  margin-bottom: 1.7em;
  width: 73%;
`;

const PartnerShips = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 2.9em;

  img {
    width: 100px;
    margin-right: 4em;
    margin-bottom: 2.9em;
  }

  img:nth-child(2),
  img:nth-child(8),
  img:nth-child(10),
  img:nth-child(17) {
    width: 46px;
  }
`;

const InvestorSection = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #f9fbfc;
  opacity: 1;
  z-index: -1;
`;

const InvestorSectionPattern = styled.div`
  background-image: url("/images/circular-pattern.png");
  background-position: calc(100% + 200px);
  background-repeat: no-repeat;
  background-size: 45%;
  position: absolute;
  color: #f9fbfc;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`;

const InvestorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  inset: 0;
`;

const InvestorContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 76%;
`;

const InvestorsCardContainer = styled.div`
  display: flex;
  margin-top: 3.5em;
  width: 76%;
`;

const InvestorCard = styled.div`
  margin-right: 1.4em;
  background-color: #fff;
  width: 350px;
  padding: 1.7em;
  border-radius: 5px;
  box-shadow: 0px 2px rgba(231, 231, 231, 0.7);

  p {
    font-size: 14px;
    margin-bottom: 0.8em;
  }

  img {
    width: 50px;
    margin-bottom: 1.3em;
  }

  .y-combinator {
    img {
      width: 19px;
    }
  }

  .investor {
    display: flex;
    margin-top: 1.5em;

    img {
      width: 45px;
      height: 45px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 0.6em;
    }

    .investor-info {
      h3 {
        font-size: 0.9em;
      }

      span {
        font-size: 0.7em;
      }
    }
  }
`;

const PaymentCallToActionSectionContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentCallToActionPattern = styled.div`
  position: absolute;
  background-image: url("/images/curved-pattern.png");
  background-position: 0 50px;
  background-size: inherit;
  background-repeat: repeat-x;
  width: 100%;
  height: 100%;
  top: 30px;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.2;
`;

const PaymentCallToActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  .text {
    h2 {
      font-size: 2.2rem;
      max-width: 22ch;
    }
  }

  button {
    padding: 1.2em 1.9em;
    background-color: #3bb75e;
    border: none;
    color: #fff;
    border-radius: 5px;
    font-size: 0.78rem;
    font-weight: bold;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 70%;

  .column {
    display: flex;
    flex-direction: column;

    .top,
    .middle,
    .bottom {
      margin-bottom: 0.8em;
    }

    h3 {
      font-size: 1em;
      font-weight: 500;
      margin: 0.3em 0;
    }

    div {
      h3 {
        font-size: 1em;
        font-weight: 500;
        margin-bottom: 0.3em;
      }
    }

    .links {
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
        margin-bottom: 0.2em;
        color: #000;
        font-weight: 100;
      }
    }
  }
`;

const FooterHr = styled.hr`
  width: 65%;
  margin: 2.2em 0;
  border: none;
  background-color: lightgray;
  height: 1px;
  opacity: 0.4;
`;

const FooterBottom = styled(FooterTop)`
  background-color: blue;
  .first-column {
    div {
      a {
        margin-top: 0.9em;
        font-size: 0.9rem;
        text-decoration: none;
        color: #0ba4db;
      }

      .social-media {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5em;

        svg {
          color: gray;
          font-size: 18px;
        }
      }
    }
  }

  .second-column {
    .contact {
      font-size: 0.8em;
      text-decoration: none;
      color: #0ba4db;
      margin-top: 1.2em;
    }

    div:nth-child(2) {
      margin-top: 2.5em;
    }
  }
`;
