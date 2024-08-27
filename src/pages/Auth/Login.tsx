import { Helmet } from "react-helmet";
import "./Login.scss";

function Login() {
  return (
    <>
      <Helmet>
        <title>판다마켓 - Login</title>
      </Helmet>
      <div className="login-wrap">
        <a href="/" className="logo-center">
          <h1 className="sr-only">판다마켓</h1>
        </a>
        <form action="./items" method="post" className="form" id="loginForm">
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
                <i className="icon ic_visible_on"></i>
              </button>
            </div>
            <button
              id="submitBtn"
              type="submit"
              className="btn-lg btn-primary"
              disabled
            >
              로그인
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
          판다마켓이 처음이신가요?{" "}
          <a className="underline" href="/signup">
            회원가입
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
