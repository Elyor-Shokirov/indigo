import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar-copmonent";
import Footer from "../footer/footer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ReactPhoneInput from "react-phone-input-2";
import { useHistory } from "react-router";
import "./uzbek-style.scss";
import "react-phone-input-2/lib/bootstrap.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

const Token = "1988721639:AAG5xbgBiNo6YhxXBrlQy_sh6icL4WY4yR4";

const chat_id = -421317593;

const UzbekCopmonent = () => {
  const history = useHistory();

  const [valueCount, setValueCount] = useState({
    id: new Date().getMilliseconds(),
    name: "",
    date: "",
    fahername: "",
    fatherphone: " ",
    mothername: "",
    motherphone: "",
    description: "",
    ourcontact: "",
  });

  function setHandleChange(e) {
    setValueCount((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function HandleClick(e) {
    e.preventDefault();

    if (
      valueCount.name.length > 0 &&
      valueCount.date.length > 0 &&
      valueCount.fahername.length > 0 &&
      valueCount.fatherphone.length > 0 &&
      valueCount.mothername.length > 0 &&
      valueCount.motherphone.length > 0 &&
      valueCount.description.length > 0 &&
      valueCount.ourcontact.length > 0
    ) {
      const text = `
        🔔<b>Yangi tabiyalanuvchi haqida ma'lumot:</b>🔔 \n
        <b>🙍‍♂️Ismi:</b> <i>${valueCount.name}</i> \n
        <b>📆Tug'ilgan kuni:</b> <i>${valueCount.date} \n</i>
        <b>👨‍💼Otasining ismi:</b> <i>${valueCount.fahername}\n</i>
        <b>📱Otasining tel-nomeri:</b> <i>${valueCount.fatherphone}\n</i>
        <b>👩‍💼Onasining ismi:</b> <i>${valueCount.mothername}\n</i>
        <b>📱Onasining tel-nomeri:</b> <i>${valueCount.motherphone}\n</i>
        <b>🏣Oldin bo'g'chaga borganmi:</b> <i>${valueCount.description}\n</i>
        <b>💻Biz haqimizda:</b> <i>${valueCount.ourcontact}\n</i>
        `;

      const data = {
        chat_id: chat_id,
        text: text,
        parse_mode: "HTML",
      };

      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const url = `https://api.telegram.org/bot${Token}/sendMessage`;
      const req = await fetch(url, options);
      const resData = await req.json();

      toast.success("Ma'lumotlarining qabul qilindi");
      history.push("/finishpage");
    } else {
      toast.error("Iltimos, Ma'lumotni to'liq kiriting");
    }

    console.log(valueCount);
  }

  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titels_regstrys">
              <h1 className="title_regstry">RO’YXATDAN O’TISH 2021-2022</h1>
              <p>BOLA HAQIDA MA’LUMOT</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-6"></div>
          <form
            // Validate
            className={classes.root}
            // toComplete="off"
            onSubmit={HandleClick}
          >
            <div>
              <TextField
                name="name"
                onChange={setHandleChange}
                id="standard-required"
                label="Bolaning to’liq ism sharifi"
                placeholder="Ma'lumotni kiriting"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                error
                name="date"
                onChange={setHandleChange}
                label="Tug'ilgan sanasi "
                id="date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <p className="title_parents">OTA-ONA HAQIDA MA'LUMOT</p>
              <TextField
                error
                onChange={setHandleChange}
                name="fahername"
                label="Otasining ism-familiyasi"
                placeholder="Ma'lumotni kiriting"
                id="standard-required"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <ReactPhoneInput
                error
                name="fatherphone"
                onChange={(fatherphone) =>
                  setValueCount((prev) => {
                    return {
                      ...prev,
                      fatherphone,
                    };
                  })
                }
                specialLabel="Tel nomeri"
                defaultCountry="uz"
                value="+998"
                containerClass={classes.textField}
                enableAreaCodes={true}
              />
              <TextField
                error
                onChange={setHandleChange}
                name="mothername"
                label="Onasining ism-familiyasi"
                placeholder="Ma'lumotni kiriting"
                id="standard-required"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <ReactPhoneInput
                onChange={(motherphone) =>
                  setValueCount((prev) => {
                    return {
                      ...prev,
                      motherphone,
                    };
                  })
                }
                specialLabel="Tel nomeri"
                defaultCountry="uz"
                value="+998"
                containerClass={classes.textField}
                enableAreaCodes={true}
              />
              <p className="title_parents">QO'SHIMCHA MA'LUMOT</p>
              <TextField
                onChange={setHandleChange}
                name="description"
                className="input_your_baby"
                id="standard-required"
                label="Farzandingiz indigoga qadar borgan bog'cha nomi"
                placeholder="Ma'lumotni kiriting"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                onChange={setHandleChange}
                name="ourcontact"
                className="input_our_contact"
                id="standard-required"
                label="Biz haqimizda qayerdan bildingiz?"
                placeholder="Ma'lumotni kiriting"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="submit_button_parent">
              <Button
                type="submit"
                className="button_submit"
                variant="contained"
                color="primary"
              >
                Ro’yxatdan o’tkazish
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UzbekCopmonent;
