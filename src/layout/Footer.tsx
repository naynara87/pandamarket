function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <p className="copyright">©codeit - 2024</p>
        <div className="sitemap">
          <a href="/privacy.html" className="">
            Privacy Policy
          </a>
          <a href="/faq.html" className="">
            FAQ
          </a>
        </div>
        <div className="sns">
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                className="icon ic_facebook"
                title="페이스북 바로가기"
              ></a>
            </li>
            <li>
              <a
                href="https://x.com"
                className="icon ic_twitter"
                title="트위터 바로가기"
              ></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                className="icon ic_youtube"
                title="유튜브 바로가기"
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                className="icon ic_instagram"
                title="인스타그램 바로가기"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
