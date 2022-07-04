import styled from "styled-components";
import bodyStyle from "../style/body.module.css";

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
            <div className={bodyStyle.CFText}>
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
              <div>
                <div className="mark"></div>
                <span>Card</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>Bank Account</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>Bank Transfer</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>USSD</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>Apple Pay</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>Visa QR</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>Mobile Money</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>POS(Coming soon)</span>
              </div>
            </AvailablePlatform>
            <div className={bodyStyle.CFText}>
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
          </CFeatureText>
        </CFeatureRight>
      </CFeature>
      <CFeature>
        <CFeatureLeft>
          <CFeatureText>
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
            <AvailablePlatform>
              <div>
                <div className="mark"></div>
                <span>Collect one-time and recurring payments from your app<br/>or website</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>Make instant transfers</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>Retrieve all your transaction and customer data</span>
              </div>
              <div>
                <div className="mark"></div>
                <span>Retrieve all your transaction and customer data</span>
              </div>
            </AvailablePlatform>
          </CFeatureText>
        </CFeatureLeft>
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
  margin-bottom: 5em;
  margin-top: 8.4em;
`;

const CFeature = styled.div`
  display: flex;
  margin-top: 3em;

  img {
    margin-top: 1.5em;
  }
`;

const CFeatureText = styled.div``;

const CFeatureLeft = styled.div`
  margin-left: 10em;
  margin-right: 3.4em;
  img {
    width: 30vw;
  }
`;
const CFeatureRight = styled.div``;

const AvailablePlatform = styled.ul`
  display: grid;
  grid-template-columns: 200px 200px;
  margin-bottom: 3em;

  .mark {
    background-color: rgba(0, 255, 0, 0.2);
    width: 20px;
    height: 10px;
  }

  div {
    padding: 5px;
    margin-top: 0.2em;
    position: relative;

    span {
      position: absolute;
      top: 10px;
      left: 20px;
      width: 400px;
    }
  }
`;
