import React from "react";
import { Helmet } from "react-helmet";
import "./Signup.scss";

function Signup() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - 회원가입</title>
      </Helmet>
      <div className="signup-wrap">
        <a href="/" className="logo-center">
          <h1 className="sr-only">판다마켓</h1>
        </a>
        <form action="./signup" method="post" className="form" id="signupForm">
          <fieldset>
            <legend className="sr-only">판다마켓 로그인</legend>
            <div className="input-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력해 주세요"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="nickname">닉네임</label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="닉네임을 입력해 주세요"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해 주세요"
                minLength={8}
                required
              />
              <button
                type="button"
                className="password-toggle-button"
                aria-label="비밀번호 보기"
              >
                <img
                  className="icon"
                  src="./assets/img/btn_visibility_on.svg"
                  alt="비밀번호 숨김 상태 아이콘"
                />
              </button>
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirm-password"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                minLength={8}
                required
              />
              <button
                type="button"
                className="password-toggle-button"
                aria-label="비밀번호 보기"
              >
                <i className="icon ic_visible_on"></i>
              </button>
            </div>
            <button
              id="submitBtn"
              type="submit"
              className="btn-lg btn-primary"
              disabled
            >
              회원가입
            </button>
          </fieldset>
        </form>
        <div className="sns-box">
          <h3>간편 로그인하기</h3>
          <div className="sns-wrap">
            <a
              className="icon ic_google"
              href="https://www.google.com"
              title="구글 로그인"
            ></a>
            <a
              className="icon ic_kakao"
              href="https://www.kakaocorp.com/page/"
              title="카카오톡 로그인"
            ></a>
          </div>
        </div>
        <div className="auth-switch">
          이미 회원이신가요?{" "}
          <a className="underline" href="/login">
            로그인
          </a>
        </div>
      </div>
    </>
  );
}

export default Signup;
