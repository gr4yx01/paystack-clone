import styled from "styled-components";
import bodyStyle from "../style/body.module.css";
import { TiTick } from "react-icons/ti";
import { BiChevronRightCircle } from "react-icons/bi";

function Body() {
  return (
    <BodyContainer>
      <BodyHeader>
        <h2>Simple, easy payments</h2>
        <p>Building a business is hard. Getting paid shouldn't be.</p>
      </BodyHeader>
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
          <video js-play loop>
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
