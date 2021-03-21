import React from "react";

export default function Footer(props: any) {
  console.log(props);
  return (
    <div
      className={props?.willBeFix ? "fixed-bottom" : "bottom"}
      style={{ gridArea: "3 / 1 / 4 / 2 " }}
    >
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        ©
        <a className="text-dark" href={"#"}>
          Amentaxes @ 2021
        </a>
      </div>
    </div>
  );
}
