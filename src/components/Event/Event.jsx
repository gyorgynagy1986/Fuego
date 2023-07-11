import React from "react";
import style from "./Event.module.css";
import Button from "../UI/Buttons/Button";
import { Dosis } from "next/font/google";

const dosis = Dosis({ subsets: ["latin"] });

const textContent = {
  h2: "Szeretnél rendezvényt tartani a Fuego-ban?",
  p: "Hívj minket vagy írj nekünk, ha rendezvényt tartanál nálunk!",
  btn: "kapcsolat",
  url: "/kapcsolat",
};

const textContentEn = {
  h2: "Want to have an event at Fuego?",
  p: "Call or drop us a message if you would like to host an event!",
  btn: "Get in touch",
  url: "/en/contact",
};

const Event = ({ lang }) => {
  const h2Logic = !lang ? textContent.h2 : textContentEn.h2;
  const pLogic = !lang ? textContent.p : textContentEn.p;
  const buttonNameLogic = !lang ? textContent.btn : textContentEn.btn;
  const urlLogic = !lang ? textContent.url : textContentEn.url;

  return (
    <section className={style.container}>
      <div className={style.containerText}>
        <h2 className={dosis.className}>{h2Logic}</h2>
        <p className={style.h2}>{pLogic}</p>
        <Button
          engColorPrefixBlueContact={lang ? true : false}
          buttonContact={true}
          name={buttonNameLogic}
          url={urlLogic}
        />
      </div>
    </section>
  );
};

export default Event;
