import { useEffect } from "react";
import Header from "../pages/client/headers/header";
import Banner from "../pages/client/banners/banner";
import Skill from "../pages/client/skills/skill";
import Projects from "../pages/client/project/projects";
import Contact from "../pages/client/contacts/contact";
import "../assets/client/root.css";
import $ from "jquery";
// import Chat from "../pages/client/chat_to_me/chat";

const RootLayout = () => {
  useEffect(() => {
    const themeToggler = document.querySelector(
      "#theme-toggler"
    ) as HTMLElement;
    themeToggler.onclick = () => {
      themeToggler.classList.toggle("fa-sun");
      if (themeToggler.classList.contains("fa-sun")) {
        document.body.classList.add("active");
      } else {
        document.body.classList.remove("active");
      }
    };
  });
  useEffect(() => {
    const offset = 500;
    const duration = 100;
    $(function () {
      $(window).scroll(() => {
        const scrollTop = $(window).scrollTop();
        if (scrollTop !== undefined && scrollTop > offset) {
          $("#top-up").fadeIn(duration);
        } else {
          $("#top-up").fadeOut(duration);
        }
      });

      $("#top-up").click(() => {
        $("body, html").animate({ scrollTop: 0 }, duration);
      });
    });
  });
  return (
    <>
      <div>
        <img
          className=""
          src="https://newlife.webopsagency.com/wp-content/uploads/2024/05/fa_send-o.png"
        />
      </div>
      <Header />
      <div className="container" id="home">
        <Banner />
        <Skill />
        <Projects />
        <Contact />
      </div>
      {/* <Chat /> */}
      <footer>
        <div title="Về đầu trang" id="top-up">
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
