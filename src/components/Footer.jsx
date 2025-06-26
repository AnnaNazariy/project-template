import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{
        background: "#b0cef7",
        padding: "10px",
        position: "absolute",
        right: "20px",
        bottom: "20px"
      }}>
        <div><strong>Автор</strong>: Анна Назарій</div>
        <div>
          <a href="https://github.com/AnnaNazariy" target="_blank" rel="noreferrer">GitHub</a> |{" "}
          <a href="https://www.figma.com/community/file/1270537961592590050" target="_blank" rel="noreferrer">Дизайн</a>
        </div>
      </div>
    );
  }
}

export default Footer;
