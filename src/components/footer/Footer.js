import React, { Component } from "react";
import "./footer.css";
import yfdlogo from "../../assets/yfdlogo0.svg";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content-wrapper">
          <div className="footer-content">
            <div className="left-footer">
              <div className="left-footer-contact">
                <img src={yfdlogo} alt />
                <p className="left-footer-desc">
                  YfDFI Finance aims to become the first <br />
                  DeFi financial center fully powered by the community.
                </p>
                <p className="left-footer-desc">
                  <strong>
                    <em>Contract address :</em>
                  </strong>
                  <em></em>
                  <a href="" className="contact-address">
                    <em>0x4F4F0Ef7978737ce928BFF395529161b44e27ad9</em>
                  </a>
                </p>
              </div>
              <div className="left-footer-links">
                <div className="left-footer-first">
                  <p>
                    <strong>YFDFI.Finance</strong>
                  </p>
                  <a href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x4f4f0ef7978737ce928bff395529161b44e27ad9">
                    Buy on Uniswap
                  </a>
                  <a href="http://stake.yfdfi.finance/">Staking Pool</a>
                  <a href="https://app.uniswap.org/#/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0x4F4F0Ef7978737ce928BFF395529161b44e27ad9">
                    Liquidity Pool
                  </a>
                </div>
                <div className="left-footer-second">
                  <a href="https://dfi.exchange/">DEX</a>
                  <a href="https://dfi.community/" target="_blank">
                    Community
                  </a>
                  <a href="https://docs.yfdfi.finance/">Docs</a>
                  <a href="/about">About</a>
                </div>
              </div>
            </div>
            <div className="right-footer">
              <p>
                <strong>Follow Us</strong>
              </p>
              <a href="https://twitter.com/YfDFI_Finance" target="_blank">
                Twitter
              </a>
              <a href="https://medium.com/yfdfi-finance" target="_blank">
                Medium
              </a>
              <a href="https://t.me/yfdfi_finance" target="_blank">
                Telegram
              </a>
              <a href="https://discord.gg/jUTNmpp" target="_blank">
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
