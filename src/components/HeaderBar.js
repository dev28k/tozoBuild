/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Button from "react-bootstrap/Button";

export default function HeaderBar() {
  return (
    <div className="header col-sm-12 g-0">
      <div className="row">
        <div className="col-sm-2 header-heading ">Dashboard</div>

        <div className="col-sm-3 search-wrapper">
          <div className="row">
            <div
              className="col-sm-6"
              style={{
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: 10,
                lineHeight: "32px",
                color: "#fff",
              }}
            >
              Search items ...
            </div>
            <div className="col-sm-6">
              <img src={require("../assets/images/searchIcon.png")} />
            </div>
          </div>
        </div>

        <div className="col-sm-3 g-0">
          <div className="row">
            <img
              className="col-sm-3 header-icons"
              src={require("../assets/images/starIcon.png")}
            />
            <img
              className="col-sm-3 header-icons"
              src={require("../assets/images/bell.png")}
            />
            <img
              className="col-sm-3 header-icons"
              src={require("../assets/images/msg.png")}
            />
            <img
              className="col-sm-3 header-icons"
              src={require("../assets/images/feed.png")}
            />
          </div>
        </div>

        <div className="col-sm-5 g-0">
          <div className="row">
            <Button className="col-sm-3 upgradeButton" size="sm" variant="dark">
              Upgrade Now
            </Button>
            <img
              className="col-sm-2 header-icons"
              style={{ height: "23px", marginTop: 36, }}
              src={require("../assets/images/modules.png")}
            />
            <img
              className="col-sm-2 header-icons"
              style={{ height: "23px", marginTop: 36 }}
              src={require("../assets/images/settings.png")}
            />
            <div className="row col-sm-4">
              <div
                className="col-sm-6"
                style={{
                  color: "#fff",
                  fontFamily: "Poppins",
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: "27px",
                  marginTop: 19
                }}
              >
                Hi, Sameer
              </div>
              <img
                className="col-sm-6 header-icons"
                style={{ height: "45px", marginTop: 30 }}
                src={require("../assets/images/userIcon.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
