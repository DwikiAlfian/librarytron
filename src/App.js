import React from "react";
import LoggedIn from "./components/auth/LoggedIn";
import Navbar from "./components/navbar/Navbar";
import NavigationBar from "./components/window/NavigationBar";

export default function App() {
  return (
    <>
      <div className="app-container">
        <div className="cs-top-header">
          <LoggedIn />
          <Navbar />
        </div>
        <div className="cs-container">
          <div className="cs-grid-2">
            <h1>Book Lists</h1>
            <div style={{ height: "100%" }}>
              <input className="cs-input cs-fw" placeholder="Search here..." />
              <div
                className="cs-column cs-column-scroll"
                style={{ marginTop: 15, gap: 10 }}
              >
                <div className="cs-lists">
                  <span className="cs-lists-number">1</span>
                  <div className="cs-lists-content">
                    <div className="cs-column">
                      <span className="cs-span-text">React for Donkey</span>
                      <span className="cs-span-text">James Sunderland</span>
                      <span
                        className="cs-span-text"
                        style={{ marginLeft: "auto" }}
                      >
                        Added : 2 Days Ago (21 September 2022)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cs-lists">
                  <span className="cs-lists-number">2</span>
                  <div className="cs-lists-content">
                    <div className="cs-column">
                      <span className="cs-span-text">Laravel for Idiot</span>
                      <span className="cs-span-text">James Sunderland</span>
                      <span
                        className="cs-span-text"
                        style={{ marginLeft: "auto" }}
                      >
                        Added : 2 Days Ago (21 September 2022)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cs-lists">
                  <span className="cs-lists-number">2</span>
                  <div className="cs-lists-content">
                    <div className="cs-column">
                      <span className="cs-span-text">Laravel for Idiot</span>
                      <span className="cs-span-text">James Sunderland</span>
                      <span
                        className="cs-span-text"
                        style={{ marginLeft: "auto" }}
                      >
                        Added : 2 Days Ago (21 September 2022)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cs-lists">
                  <span className="cs-lists-number">2</span>
                  <div className="cs-lists-content">
                    <div className="cs-column">
                      <span className="cs-span-text">Laravel for Idiot</span>
                      <span className="cs-span-text">James Sunderland</span>
                      <span
                        className="cs-span-text"
                        style={{ marginLeft: "auto" }}
                      >
                        Added : 2 Days Ago (21 September 2022)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
