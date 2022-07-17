import styled from "styled-components";
import { MdArrowDropDown, MdSafetyDivider } from "react-icons/md";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Logo>
          <a href="">
            <img src="/images/paystack-logo.svg" alt="" />
          </a>
        </Logo>
        <DropDownLeft>
          <DropDownMenuLeft>
            <span>
              Why Paystack <MdArrowDropDown />
            </span>
            <DropDownContainer>
              <DropDownContainerLeft>
                <a href="">
                  <img src="/images/why_choose_paystack_db.svg" alt="" />
                  <div>
                    <h3>Why Choose Paystack</h3>
                    <span>
                      Over 70,000 businesses trust Paystack. Here's why
                    </span>
                  </div>
                </a>
                <a href="">
                  <img src="/images/success_rates_db.svg" alt="" />
                  <div>
                    <h3>Success rate</h3>
                    <span>
                      Get the best transaction success rates in the industry
                    </span>
                  </div>
                </a>
                <a href="">
                  <img src="/images/demo_db.svg" alt="" />
                  <div>
                    <h3>Demo</h3>
                    <span>
                      See the Paystack Checkout Form and Dashboard in action
                    </span>
                  </div>
                </a>
              </DropDownContainerLeft>
              <DropDownContainerRight>
                <div>
                  <h3>YOUR GROWTH STAGE</h3>
                  <ul className="paystack-for">
                    <li>
                      <a href="">For Entrepreneur</a>
                    </li>
                    <li>
                      <a href="">For Corporates</a>
                    </li>
                    <li>
                      <a href="">For Global Brands</a>
                    </li>
                    <li>
                      <a href="">For Startups</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>YOUR BUSINESS TYPE</h3>
                  <ul className="paystack-for">
                    <li>
                      <a href="">For Fintechs</a>
                    </li>
                    <li>
                      <a href="">For Schools</a>
                    </li>
                    <li>
                      <a href="">For Betting</a>
                    </li>
                  </ul>
                </div>
              </DropDownContainerRight>
            </DropDownContainer>
          </DropDownMenuLeft>
          <DropDownMenuLeft>
            <span>Customers</span>
          </DropDownMenuLeft>
          <DropDownMenuLeft>
            <span>Pricing</span>
          </DropDownMenuLeft>
          <DropDownMenuLeft>
            <span>
              Learn <MdArrowDropDown />
            </span>
            <DropDownContainer>
              <DropDownContainerLeft>
                <a href="">
                  <img src="/images/blog_db.svg" alt="" />
                  <div>
                    <h3>Blog</h3>
                    <span>
                      Original lessons about making the internet work for your
                      business
                    </span>
                  </div>
                </a>
                <a href="">
                  <img src="/images/guides_db.svg" alt="" />
                  <div>
                    <h3>Guides</h3>
                    <span>
                      Big ideas in payments, explained in simple English
                    </span>
                  </div>
                </a>
                <a href="">
                  <img src="/images/tutorials_db.svg" alt="" />
                  <div>
                    <h3>Video Tutorials</h3>
                    <span>Quick video tutorials on how to use Paystack</span>
                  </div>
                </a>
                <a href="">
                  <img src="/images/decode_fintech_db.svg" alt="" />
                  <div>
                    <h3>Decode Fintech</h3>
                    <span>
                      The trade emails newsletter and podcast for leaders in
                      African fintech
                    </span>
                  </div>
                </a>
              </DropDownContainerLeft>
              <DropDownContainerRight>
                <div>
                  <h3>COMPANY</h3>
                  <ul className="paystack-for">
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="">Subscribe</a>
                    </li>
                    <li>
                      <a href="">Compliance</a>
                    </li>
                    <li>
                      <a href="">Careers</a>
                    </li>
                    <li>
                      <a href="">Brand</a>
                    </li>
                    <li>
                      <a href="">Media Kit</a>
                    </li>
                  </ul>
                </div>
              </DropDownContainerRight>
            </DropDownContainer>
          </DropDownMenuLeft>
        </DropDownLeft>
      </HeaderLeft>
      <HeaderRight>
        <DropDownRight>
          <DropDownMenuRight>
            <span>
              Developers <MdArrowDropDown />
            </span>
            <DropDownRightContent>
              <a href="">
                <span>Overview</span>
              </a>
              <a href="">
                <span>Documentation</span>
              </a>
              <a href="">
                <span>Integrations</span>
              </a>
              <a href="">
                <span>Status Page</span>
              </a>
            </DropDownRightContent>
          </DropDownMenuRight>
          <DropDownMenuRight>
            <span>
              Support <MdArrowDropDown />
            </span>
            <DropDownRightContent>
              <a href="">
                <span>Quick Help</span>
              </a>
              <a href="">
                <span>Contact Us</span>
              </a>
              <a href="">
                <span>Why was I debited?</span>
              </a>
            </DropDownRightContent>
          </DropDownMenuRight>
          <DropDownMenuRight>
            <span>Login</span>
          </DropDownMenuRight>
          <DropDownMenuRight>
            <button>Create free account</button>
          </DropDownMenuRight>
          <DropDownMenuRight>
            <span>
              <img src="/images/NigeriaLogo.png" alt="" />
            </span>
            <DropDownRightContent country>
              <a href="">
                <img src="/images/ghana.png" alt="" />
                <span>Ghana</span>
              </a>
              <a href="">
                <img src="/images/south-africa.png" alt="" />
                <span>South Africa</span>
              </a>
              <a href="">
                <img src="/images/other-countries.png" alt="" />
                <span>Others</span>
              </a>
            </DropDownRightContent>
          </DropDownMenuRight>
        </DropDownRight>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  width: 100%;
  height: 35px;
  position: fixed;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(228, 231, 226, 0.2);
  background-color: rgba(255, 255, 255, 0.3);
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  margin-top: 0.4em;

  img {
    width: 100px;
    object-fit: cover;
    margin-right: 1.2em;
  }
`;

const DropDownLeft = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropDownMenuLeft = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  margin-right: 1em;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    font-size: 0.85em;
  }

  div {
    visibility: hidden;
  }

  &:hover {
    div {
      visibility: visible;
    }
  }
`;

const DropDownContainer = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  width: 510px;
  height: 280px;
  position: absolute;
  top: 25px;
  border: solid 1px rgba(177, 176, 176, 0.04);
  box-shadow: 0 6px 13px 0 rgb(3 49 86 / 5%);
  border-radius: 6px;
  background: #fff;
`;

const DropDownContainerLeft = styled.div`
  a {
    display: flex;
    padding: 0 0.7em;
    margin-top: 1.2em;
    text-decoration: none;
    color: #000;

    &:hover {
      img {
        transform: scale(1.3);
        transition: transform 200ms ease-in-out;
      }

      div {
        h3 {
          color: #0ba4db;
        }
      }
    }

    img {
      width: 35px;
      margin-right: 1em;
      object-fit: contain;
    }

    div {
      max-width: 25ch;

      h3 {
        font-size: 0.9em;
      }
    }
  }
`;

const DropDownContainerRight = styled.div`
  background: #f9fbfc;
  border-left: 1px solid lightgray;

  div {
    margin-top: 1.2em;
    margin-left: 1.5em;

    h3 {
      font-size: 0.6em;
    }

    ul {
      li {
        list-style: none;
        padding-top: 0.5em;
        font-size: 0.9em;

        a {
          text-decoration: none;
          color: #000;

          &:hover {
            color: #0ba4db;
          }
        }
      }
    }
  }
`;
const HeaderRight = styled.div`
  margin-right: 5em;
`;
const DropDownRight = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
const DropDownMenuRight = styled.div`
  position: relative;
  margin-right: 0.7em;
  cursor: pointer;

  div {
    visibility: hidden;
  }

  &:hover {
    div {
      visibility: visible;
    }
  }

  button {
    background-color: var(--btnColor);
    padding: 0.4em 0.7em;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    margin-right: 0.5em;
    margin-top: -0.2em;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 0.9em;

    img {
      width: 20px;
      height: 15px;
      object-fit: contain;
      margin-top: 0.2em;
    }
  }
`;

const DropDownRightContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35px;
  left: ${(props) => (props.country ? "-80px" : "")};
  border: solid 1px rgba(177, 176, 176, 0.04);
  box-shadow: 0 6px 13px 0 rgb(3 49 86 / 5%);
  border-radius: 6px;
  background: #fff;
  width: 85px;
  padding: 1.2em;

  a {
    text-decoration: none;
    margin-top: 0.5em;
    display: flex;
    color: #000;

    &:hover {
      color: #0ba4db;
    }

    img {
      width: 20px;
      object-fit: contain;
      margin-right: 0.5em;
    }
  }
`;
