import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewMovie from "../new/NewMovie 2";
import Suggestion from "../o0chu/Suggestion";
import Header from "../nav/Header";
import Footer from "../footer/Footer";
import Cookies from "js-cookie";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import Auth from "../hoc/auth";
import ScrollToTopButton from "../scrolltop/ScrolltoptoButton";
import ScrollToQuestion from "../scrolltop/ScrolltoQuestion";
import Action from "./Mainlist";
import { useNavigate } from "react-router-dom";

// import OcheMovie from "./OchuMovie";

function List() {
  const user = useSelector((state) => state.user);
  const [nickname, setNickname] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    if (user !== undefined && user.userData !== undefined) {
      setNickname(user.userData.nickname);
    }
  });

  return (
    <div>
      <Header />
      <div className="listWrap webSize">
        {user && user.userData && user.userData.isAuth ? <h5 className="cateTitle marT_20">{nickname}님을 위한 영화</h5> : <h5 className="cateTitle marT_20">추천 영화</h5>}
        <Suggestion />
        <h5 className="cateTitle">New</h5>
        <NewMovie></NewMovie>

        <p className="manu_p">
          <h5 className="cateTitle">액션</h5>{" "}
          <button
            onClick={() => {
              window.location.href = "/movies/list/액션";
            }}
          >
            +more
          </button>
        </p>
        <Action genres="액션" />

        <p className="manu_p">
          <h5 className="cateTitle">애니메이션</h5>{" "}
          <button
            onClick={() => {
              window.location.href = "/movies/list/애니메이션";
            }}
          >
            +more
          </button>
        </p>
        <Action genres="애니메이션" />
        <p className="manu_p">
          <h5 className="cateTitle">공포 / 스릴러</h5>{" "}
          <button
            onClick={() => {
              window.location.href = "/movies/list/공포 스릴러";
            }}
          >
            +more
          </button>
        </p>
        <Action genres="공포 스릴러" />
        <p className="manu_p">
          <h5 className="cateTitle">범죄</h5>{" "}
          <button
            onClick={() => {
              window.location.href = "/movies/list/범죄";
            }}
          >
            +more
          </button>
        </p>
        <Action genres="범죄" />

        <p className="manu_p">
          <h5 className="cateTitle">코미디</h5>{" "}
          <button
            onClick={() => {
              window.location.href = "/movies/list/코미디";
            }}
          >
            +more
          </button>
        </p>
        <Action genres="코미디" />
        <p className="manu_p">
          <h5 className="cateTitle">멜로 / 드라마</h5>{" "}
          <button
            onClick={() => {
              window.location.href = "/movies/list/멜로 드라마";
            }}
          >
            +more
          </button>
        </p>
        <Action genres="멜로 드라마" />
        <div className="scroll-to-div">
          <ScrollToQuestion />
          <ScrollToTopButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Auth(List, false);
