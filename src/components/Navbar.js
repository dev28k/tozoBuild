/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import ".././App.css";
import WebFont from 'webfontloader';

export default function Navbar() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins', 'Chilanka']
      }
    });
   }, []);

  return (
    <div className="Navbar">
      <img
        style={{
          width: "184px",
          height: "41px",
          marginTop: "27px",
          marginLeft: "46px",
          marginBottom: "27px",
        }}
        src={require("../assets/images/logo.png")}
      />

      <div className="main-menu-text">Main Menu</div>

      <div style={{ marginLeft: "8px" }} className="row Nav-selector">
        <img
          style={{
            // width: "18px",
            height: "18px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/Vectordashboardicon.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#5578eb",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Dashboard
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "18px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/Vectorpublishicon.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Publish All
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "18px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/fa_feedrssfeed.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          RSS Feed
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/fbicon.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Facebook
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/instaicon.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Instagram
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/Vectortwitter.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Twitter
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/pinterest.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Pinterest
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/linkedin.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Linkedin
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/fa_telegram.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Telegram
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/tumbler.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Tumbler
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/reddit.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Reddit
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/vk.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          VK
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/youtube.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Youtube
        </div>
        <div className="col">
          <img
            style={{
              height: "60px",
              width: "60px",
            }}
            className="col-sm-2"
            src={require("../assets/images/noti.png")}
          />
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/store.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Google My Business
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/people-team.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Team Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/store.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          <span>Google My Business</span>
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/proxy.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "13px",
            lineHeight: "21px",
          }}
        >
          Advance Proxy Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/coupanmanager.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Coupan Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/scheduler.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Schedules
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/account.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Account Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/fileManager.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          File Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/groupmanager.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Group Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/caption.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Caption
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/watermark.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Watermark
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/package.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Package Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/proxymanager.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Proxy Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/user.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          User Management
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/language.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Language
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/payment.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Payment Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/blog.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Blog Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/faq.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          FAQs Manager
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/modules.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Modules & Themes
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/settings.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Settings
        </div>
      </div>

      <div style={{ marginLeft: "8px" }} className="row Nav-nonselector">
        <img
          style={{
            // width: "18px",
            height: "20px",
            marginLeft: "22px",
            marginTop: "15px",
          }}
          className="col-sm-2"
          src={require("../assets/images/cron.png")}
        />
        <div
          className="col"
          style={{
            marginTop: "14px",
            // marginLeft: "10px",
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          Cronjobs
        </div>
      </div>

      <div className="col-sm-12">
        <img
          style={{
            // width: "18px",
            // height: "200px",
            marginTop: "15px",
          }}
          className="col-sm-12"
          src={require("../assets/images/navFooter.png")}
        />
      </div>
    </div>
  );
}
