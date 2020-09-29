import "./App.css";
import "semantic-ui-css/semantic.min.css";

import React, { useState } from "react";

import { Icon } from "semantic-ui-react";

const colors = ["red", "green", "blue", "orange", "purple"];

const users = [
  {
    id: "i7tywbfiyufnwiyhnfiwuh1",
    name: "John",
    lastName: "Doe",
    colorIndx: 0,
    result: [],
  },
  {
    id: "i7tywbfiyufnwiyhnfiwuh2",
    name: "John",
    lastName: "Doe2",
    colorIndx: 1,
    result: [],
  },
  {
    id: "i7tywbfiyufnwiyhnfiwuh3",
    name: "John",
    lastName: "Doe3",
    colorIndx: 2,
    result: [],
  },
  {
    id: "i7tywbfiyufnwiyhnfiwuh4",
    name: "John",
    lastName: "Doe4",
    colorIndx: 3,
    result: [],
  },
  {
    id: "i7tywbfiyufnwiyhnfiwuh5",
    name: "John",
    lastName: "Doe5",
    colorIndx: 4,
    result: [],
  },
];

const selectedUser = 0;

const answers = [0x1f641, 0x1f610, 0x1f642, 0x1f600];
const questions = [
  "What's your experience about our customer service?",
  "What's your experience about our butik service2?",
  "What's your experience about our technical service3?",
  "What's your experience about our call center service4?",
  "What's your experience about our social media service5?",
];

function App() {
  const [page, handlePage] = useState("question");
  const [currentQuestion, handleCurrentQuestion] = useState(0);

  const whileAnswered = (answer) => {
    users[selectedUser].result.push({
      question: currentQuestion,
      answer: answer,
    });
    if (currentQuestion === questions.length - 1) {
      handlePage("tack");
      return;
    }
    handleCurrentQuestion(currentQuestion + 1);
  };

  const renderQuestionPage = () => {
    return (
      <div className={["container-fluid", "d-flex", "justify-content-center"]}>
        {/* {currentQuestion + 1}/5 */}
        <h2 className="text-center text-dark border border-primary mr-5 ml-5 mt-5 pr-3 pl-3">
          If you work with this machine, We donate 5:- to child charity!{" "}
        </h2>
        {questions.map((question, indx) => {
          if (indx === currentQuestion)
            return (
              <div>
                <h3 className="text-center border mr-5 ml-5 ">{question}</h3>
                <div
                  className="pt-5"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  {answers.map((answer) => (
                    <div onClick={() => whileAnswered(answer)}>
                      {String.fromCodePoint(answer)}
                    </div>
                  ))}
                </div>
              </div>
            );
        })}
      </div>
    );
  };
  const renderTackPage = () => {};

  if (page === "users") {
    return (
      <div>
        {users.map((user) => {
          return (
            <div
              style={{
                marginTop: 10,
                padding: 10,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "grey",
              }}
              onClick={() => handlePage("question")}
            >
              <Icon name="user secret" color={colors[user.colorIndx]} />{" "}
              {user.name} {user.lastName}
            </div>
          );
        })}
      </div>
    );
  } else if (page === "question") {
    return renderQuestionPage();
  } else {
    return (
      <h1 className={["text-center padding-5 mt-5 pt-5 border pb-5 mr-5 ml-5"]}>
        TACK!
      </h1>
    );
  }
}

export default App;
