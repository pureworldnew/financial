import React, { Component } from "react";
import "./main.css";
import financeLogo from "../../assets/yfdlogo2.svg";
import firstCard from "../../assets/Unicrypt-Uniswap.png";
import secondCard from "../../assets/Team-lock.png";
import thirdCard from "../../assets/Staking-lock.png";
import fourthCard from "../../assets/Farming-lock.png";
import tokenLogo from "../../assets/yfdlogob.svg";
import visuLogo from "../../assets/visu2.svg";
import wethLogo from "../../assets/wethlogo.png";
import yfdIcon from "../../assets/yfdicon.svg";
import uniswapLogo from "../../assets/uniswaplogo.png";
import visu1Logo from "../../assets/visu1.svg";
import dfiexchangelogobLogo from "../../assets/dfiexchangelogob.svg";
import voteImg from "../../assets/vote.svg";
import earnprofiltsImg from "../../assets/earnprofits.svg";
import governanceImg from "../../assets/governance.svg";
import communityImg from "../../assets/community.svg";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="background-part">
          <div className="image-block">
            <img src={financeLogo} alt="finance logo" />
          </div>
          <div className="code-block">
            <p>
              The First DeFi Financial Center powered by Community.
              <br />
              Buy YFD Now & Earn up to 7.2% interest WEEKLY.
            </p>
          </div>
          <div className="button-block">
            <a className="btn buy-btn" href="true">
              Buy YFD
            </a>
            <a className="btn stake-btn" href="true">
              Stake YFD
            </a>
          </div>
        </div>
        <div className="card-part">
          <div className="content-wrapper">
            <div className="cards-content">
              <div className="card">
                <div className="card-content">
                  <div className="upper-card">
                    <img src={firstCard} alt="first card image" />
                    <p className="card-up-desc">
                      Uniswap Liquidity tokens locked on Unicrypt
                    </p>
                  </div>
                  <div className="lower-card">
                    <p className="card-low-desc">
                      100% UNI-V2 tokens locked for 6 months
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="upper-card">
                    <img src={secondCard} alt="first card image" />
                    <p className="card-up-desc">
                      Team tokens locked in Locking contract
                    </p>
                  </div>
                  <div className="lower-card">
                    <p className="card-low-desc">
                      500 YFD tokens locked for 6 months
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="upper-card">
                    <img src={thirdCard} alt="first card image" />
                    <p className="card-up-desc">
                      Staking tokens locked in Staking contract
                    </p>
                  </div>
                  <div className="lower-card">
                    <p className="card-low-desc">
                      6000 YFD until all rewarded to stakers
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="upper-card">
                    <img src={fourthCard} alt="first card image" />
                    <p className="card-up-desc">
                      Farming tokens locked in Locking contract
                    </p>
                  </div>
                  <div className="lower-card">
                    <p className="card-low-desc">
                      5000 YFD tokens locked for Farming pool
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="token-part">
          <div className="content-wrapper">
            <div className="token-content">
              <div className="left-token">
                <div className="left-token-first">
                  <img src={tokenLogo} alt="token logo" />
                  <p className="gover-token-text">Governance Token.</p>
                </div>
                <div className="left-token-second">
                  <p className="small-text-token">
                    YfDFI Finance Governance token gives you the Right to vote
                    <br /> and the Right to receive a portion of YfDFI
                    ecosystem's profits
                  </p>
                  <p className="small-text-token">
                    <strong>
                      Total Supply: 20,000 YFD
                      <br />
                    </strong>
                    Not mintable: there will never be more than 20,000 YFD
                    tokens.
                    <br />
                    Not burnable: YFD tokens aren't burnable.
                  </p>
                  <p className="small-text-token">
                    <strong>Smart Contract Audit Result : </strong>Passed
                    <br />
                    <br />
                    <strong>Where to buy?</strong>
                  </p>
                </div>
                <div className="left-token-third">
                  <a className="btn uniswap-btn">Uniswap</a>
                  <a className="btn dfi-exchange-btn">DFI.Exchange</a>
                  <a className="btn stake-yfd-btn">Stake YFD</a>
                </div>
              </div>
              <div className="right-token">
                <img src={visuLogo} alt="visu image" />
              </div>
            </div>
          </div>
        </div>
        <div className="finance-pool">
          <div className="content-wrapper">
            <div className="pool-content">
              <div className="pool-title">YFDFI.Finance Pools</div>
              <div className="pool-cards">
                <div className="pool-card">
                  <div className="pool-upper">
                    <img src={wethLogo} alt="" className="wethLogoImg" />
                    <p className="pool-card-title">Uniswap Liquidity Pool</p>
                    <p className="pool-card-desc">
                      Initial YFD supply available in the pool: 5,000 YFD
                      <br />
                      Tokens Weight: 50% WETH / 50% YFD
                    </p>
                  </div>
                  <div className="pool-lower">
                    <a className="btn bool-btn">Add Liquidity</a>
                  </div>
                </div>
                <div className="pool-card">
                  <div className="pool-upper">
                    <img src={yfdIcon} alt="" className="yfdiconImg" />
                    <p className="pool-card-title">Pool A — YFD Staking</p>
                    <p className="pool-card-desc">
                      All YFD token early-holders can stake their tokens
                      <br />
                      and earn up to 7.2% interest WEEKLY (APW)
                    </p>
                  </div>
                  <div className="pool-lower">
                    <a className="btn bool-btn">Stake YFD</a>
                  </div>
                </div>
                <div className="pool-card">
                  <div className="pool-upper">
                    <img src={uniswapLogo} alt="" className="yfdiconImg" />
                    <p className="pool-card-title">
                      Pool B — Uniswap Liquidity Farming
                    </p>
                    <p className="pool-card-desc">
                      All Liquidity providers on Uniswap will be able to farm
                      <br />
                      their LP tokens and earn up to 2.5% interest WEEKLY (APW)
                    </p>
                  </div>
                  <div className="pool-lower">
                    <a className="btn bool-btn coming-soon">Coming Soon...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="exchange">
          <div className="content-wrapper">
            <div className="exchange-content">
              <div className="exchange-left">
                <img src={visu1Logo} alt />
              </div>
              <div className="exchange-right">
                <div className="exchange-right-title">
                  <img src={dfiexchangelogobLogo} alt />
                  <p>Community-Centered DEX. For DeFi Protocol.</p>
                </div>
                <div className="exchange-right-content">
                  <p className="exchange-text">
                    The first Decentralized Exchange (DEX)
                    <strong>dedicated to DeFi projects</strong> and
                    <strong> fully governed by YfDFI Finance community</strong>.
                    The idea behind
                    <a href className="dfi-exchange-text">
                      <strong> DFI.Exchange </strong>
                    </a>
                    is to launch the first decentralized exchange (DEX) fully
                    owned and governed by community. A kind of "Binance Dex"
                    dedicated to DeFi and (above all) truly decentralized.
                    <a href className="dfi-exchange-text">
                      <strong> DFI.Exchange </strong>
                    </a>
                    will allow DeFI enthusiasts to buy/sell their favorite
                    tokens directly with stablecoins, without having to pass via
                    long routes and consequently pay expensive slippage and
                    transaction fees.
                  </p>
                </div>
                <div className="exchange-right-button">
                  <a className="btn exchange-btn">Start Trading</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="decentralized">
          <div className="content-wrapper">
            <div className="decentral-content">
              <div className="decentral-title">
                YFDFI.Finance Decentralized Governance.
              </div>
              <div className="decentral-cards">
                <div className="decentral-card">
                  <img src={voteImg} alt />
                  <p className="decentral-subtitle">Submit & Vote Proposals</p>
                  <p className="decentral-text">
                    YfDFI Finance is governed by YFD token holders who submit
                    and vote on proposals (DeFi Token listing...)
                  </p>
                </div>
                <div className="decentral-card">
                  <img src={earnprofiltsImg} alt />
                  <p className="decentral-subtitle">Earn Huge Profits</p>
                  <p className="decentral-text">
                    Most of profits generated from each of YfDFI solutions
                    (DFI.Exchange, DFI.Swap...) will be redistributed to
                    community.
                  </p>
                </div>
                <div className="decentral-card">
                  <img src={governanceImg} alt />
                  <p className="decentral-subtitle">DFI.Governance</p>
                  <p className="decentral-text">
                    The user-friendly platform to set on-chain community votes
                    related to YfDFI Finance ecosystem.
                  </p>
                </div>
                <div className="decentral-card">
                  <img src={communityImg} alt />
                  <p className="decentral-subtitle">DFI.Community</p>
                  <p className="decentral-text">
                    The forum to talk about YfDFI Finance subjects, from General
                    Chat to Technical, everyone can make its contribution.
                  </p>
                </div>
              </div>
              <div className="decentral-buttons">
                <a className="btn decentral-buy-btn">Buy YFD</a>
                <a className="btn decentral-stake-btn">Stake YFD</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
