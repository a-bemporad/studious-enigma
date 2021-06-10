import { Text } from "@chakra-ui/layout";
import React from "react";
import { errors } from "./errors";

const App = () => {
  const randomError = (e) => {
    return e[Math.floor(Math.random() * e.length)];
  };

  const elegido = randomError(errors);

  console.log(elegido.message);
  console.log(elegido.message.includes("internal"));
  let treatedError = "";

  const messageHandler = (e) => {
    switch (true) {
      case e.message.includes("internal" && "server"):
        return (treatedError =
          "Ops, o servidor está com problemas, tente mais tarde.");
      case e.message.includes("required" && "email" && "phone"):
        return (treatedError =
          "Nome, email e telefone são campos obrigatórios.");
      case e.message.includes("invalid" && "email"):
        return (treatedError = "O email é inválido.");
      case e.message.includes("user" && "already" && "registered"):
        return (treatedError = "O usuário já está cadastrado.");
      case e.message.includes("missing" && "required" && "parameter"):
        return (treatedError = "Faltam parâmetros obrigatórios.");
      case e.message.includes("invalid" && "plan"):
        return (treatedError = "O plano escolhido é inválido.");
      case e.message.includes("not" && "authorized"):
        return (treatedError = "Não autorizado.");
      case e.message.includes("payment"):
        return (treatedError = "Problemas processando o pagamento.");
      case e.message.includes("database"):
        return (treatedError = "Problemas internos na base de dados.");
      case e.message.includes("maximum" && "allowed"):
        return (treatedError = "O número máximo de clientes foi atingido");
      default:
        return (
          <Text fontSize="2em">
            Ops, o servidor está com problemas, tente mais tarde.
          </Text>
        );
    }
  };
  return (
    <div>
      <h1 color="red">untreated error</h1>
      <Text fontSize="2em">{elegido.message}</Text>
      <h1 color="green">treated error</h1>
      <Text>{messageHandler(elegido)}</Text>
    </div>
  );
};

export default App;
