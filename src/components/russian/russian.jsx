import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar-copmonent";
import Footer from "../footer/footer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ReactPhoneInput from "react-phone-input-2";
import { useHistory } from "react-router";
import "../uzbek/uzbek-style.scss";
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

const RussianCopmonent = () => {
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
        🔔<b>Информация о ребёнке:</b>🔔 \n
        <b>🙍‍♂️Имя: </b> <i>${valueCount.name}</i> \n
        <b>📆День рождения: </b> <i>${valueCount.date} \n</i>
        <b>👨‍💼Имя отца:</b> <i>${valueCount.fahername}\n</i>
        <b>📱Телефон отца: </b> <i>${valueCount.fatherphone}\n</i>
        <b>👩‍💼Имя матери: </b> <i>${valueCount.mothername}\n</i>
        <b>📱Телефон матери: </b> <i>${valueCount.motherphone}\n</i>
        <b>🏣В который детский сад ходил(а): </b> <i>${valueCount.description}\n</i>
        <b>💻О нас узнали: </b> <i>${valueCount.ourcontact}\n</i>
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

      toast.success("Ваша информация получена");
      history.push("/finishpage_russian");
    } else {
      toast.error("Пожалуйста, введите данные полностью");
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
              <h1 className="title_regstry">РЕГИСТРАЦИЯ 2021-2022</h1>
              <p>ИНФОРМАЦИЯ О РЕБЁНКЕ</p>
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
                label="Ф. И. О. ребёнка"
                placeholder="Введите сюда"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                error
                name="date"
                onChange={setHandleChange}
                label="Дата рождения"
                id="date"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <p className="title_parents">ИНФОРМАЦИЯ О РОДИТЕЛЯХ</p>
              <TextField
                error
                onChange={setHandleChange}
                name="fahername"
                label="Имя и фамилия отца"
                placeholder="Введите сюда"
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
                specialLabel="Номер телефона:"
                defaultCountry="uz"
                value="+998"
                containerClass={classes.textField}
                enableAreaCodes={true}
              />
              <TextField
                error
                onChange={setHandleChange}
                name="mothername"
                label="Имя и фамилия матери "
                placeholder="Введите сюда"
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
                specialLabel="Номер телефона:"
                defaultCountry="uz"
                value="+998"
                containerClass={classes.textField}
                enableAreaCodes={true}
              />
              <p className="title_parents">ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</p>
              <TextField
                onChange={setHandleChange}
                name="description"
                className="input_your_baby"
                id="standard-required"
                label="Укажите детский сад, в которую ходил ваш ребенок до indigo"
                placeholder="Введите сюда"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                onChange={setHandleChange}
                name="ourcontact"
                className="input_our_contact"
                id="standard-required"
                label="Откуда Вы узнали о нас?"
                placeholder="Введите сюда"
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
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RussianCopmonent;
