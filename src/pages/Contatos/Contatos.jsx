import { useState } from "react";
import styles from "./Contatos.module.css";
import emailJs from "@emailjs/browser";

export function Contatos() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos ⚠️");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailJs
      .send(
        "service_wcoayvb",
        "template_wkjui1w",
        templateParams,
        "zpbf1UDpRiwDV_IVt"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Erro:", error);
        }
      );
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Entre em contato, envie um e-mail 🌸</h4>

      <form className={styles.form} onSubmit={sendEmail}>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className={styles.textarea}
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className={styles.button} type="submit" value="Enviar" />
      </form>
    </div>
  );
}
