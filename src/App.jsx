import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [yesMessage, setYesMessage] = useState("");
  const [yesPosition, setYesPosition] = useState({ x: 0, y: 0 });

  const messages = [
    "Are you sure? 👀",
    "Nice try 😭",
    "Nope nope nope 😌",
    "You can't catch me! 🏃‍♀️",
    "Just press NO already 😭",
    "Stop trying 😭💗",
  ];

  const moveYesButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 220 - 110;

    setYesPosition({ x, y });

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    setYesMessage(randomMessage);
  };

  return (
    <div className="app">

      {/* Floating hearts */}
      <div className="hearts">
        <span>♡</span>
        <span>♡</span>
        <span>♡</span>
        <span>♡</span>
        <span>♡</span>
        <span>♡</span>
        <span>♡</span>
      </div>

      {/* PAGE 1 */}
      {page === 1 && (
        <div className="card question-card">

          <div className="emoji">🥺</div>

          <h1>Are you upset with me?</h1>

          <p className="subtitle">
            Be honest... 👀
          </p>

          {yesMessage && (
            <p className="funny-message">
              {yesMessage}
            </p>
          )}

          <div className="buttons">

            <button
              className="yes-btn"
              style={{
                transform: `translate(${yesPosition.x}px, ${yesPosition.y}px)`,
              }}
              onMouseEnter={moveYesButton}
              onClick={moveYesButton}
            >
              YES 😤
            </button>

            <button
              className="no-btn"
              onClick={() => setPage(2)}
            >
              NO 😌
            </button>

          </div>

        </div>
      )}

      {/* PAGE 2 */}
      {page === 2 && (
        <div className="card reveal-card">

          <div className="big-emoji">😭💗</div>

          <h1>I KNEW ITTT!</h1>

          <p className="reveal-text">
            Okay, now that we've officially confirmed
            <br />
            you're not mad at me...
          </p>

          <p className="unlock-text">
            You have unlocked a very important document. 👀
          </p>

          <button
            className="open-btn"
            onClick={() => setPage(3)}
          >
            VIEW DOCUMENT 📜
          </button>

        </div>
      )}

      {/* PAGE 3 — CERTIFICATE */}
      {page === 3 && (
        <div className="certificate-wrapper">

          <div className="certificate">

            <div className="certificate-top">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </div>

            <p className="official">
              ✦ OFFICIAL DOCUMENT ✦
            </p>

            <h1>
              Certificate of
              <br />
              <span>Not Being Upset™</span>
            </h1>

            <div className="divider">
              ❦
            </div>

            <p className="certifies">
              This certifies that
            </p>

            <h2 className="her-name">
              Riya
            </h2>

            <p className="certifies">
              has successfully forgiven
            </p>

            <h3 className="your-name">
              Nandni
            </h3>

            <p className="reason">
              for being a little stupid yesterday. 😭
            </p>

            <div className="valid-box">

              <p>
                <strong>Valid for:</strong>
              </p>

              <p>
                ∞ hugs + unlimited bakwaas
              </p>

            </div>

            <div className="certificate-bottom">

              <div className="signature">
                <div className="line"></div>
                <p>Friendship Department</p>
              </div>

              <div className="seal">
                <span>♡</span>
                <small>OFFICIALLY</small>
                <b>FORGIVEN</b>
                <span>♡</span>
              </div>

            </div>

            <button
              className="accept-btn"
              onClick={() => setPage(4)}
            >
              ACCEPT CERTIFICATE 🏆
            </button>

          </div>

        </div>
      )}

      {/* PAGE 4 */}
      {page === 4 && (
        <div className="card final-card">

          <div className="celebration">
            🎉💗✨
          </div>

          <h1>
            CERTIFICATE ACCEPTED!
          </h1>

          <p className="final-text">
            Okay good. 😌
          </p>

          <p className="final-text">
            Now we're officially good again. 🫶
          </p>

          <div className="final-message">
            Go smile. 😤💗
          </div>

          <div className="confetti">
            🌷 💕 ✨ 🦋 💗 🎀 🌸 ✨ 💕
          </div>

        </div>
      )}

    </div>
  );
}

export default App;