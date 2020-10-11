import "semantic-ui-css/semantic.min.css";
import "./App.css";

import React, { useState } from "react";

import { Animate } from "react-simple-animate";
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
    // const [page, handlePage] = useState("");
    const [page, handlePage] = useState("question");
    const [currentQuestion, handleCurrentQuestion] = useState(0);

    const whileAnswered = (answer) => {
        users[selectedUser].result.push({
            question: currentQuestion,
            answer: answer,
            time: new Date().toISOString(),
        });
        if (currentQuestion === questions.length - 1) {
            handlePage("tack");
            return;
        }
        handleCurrentQuestion(currentQuestion + 1);
    };

    const renderQuestionPage = () => {
        return (
            <div className="rainbow">
                <div className="d-flex flex-column justify-content-around align-items-center" style={{ height: "90%" }}>
                    <Animate
                        play={true}
                        duration={0.85}
                        start={{
                            opacity: 0,
                        }}
                        end={{ opacity: 1 }}
                    >
                        <div style={{ fontSize: "4rem", lineHeight: "5rem" }} className="text-center text-dark">
                            <div>If you work with this machine</div>
                            <div>We donate 5:- </div>
                            <div>to a child charity!</div>
                        </div>
                    </Animate>

                    <div>
                        {questions.map((question, indx) => {
                            if (indx === currentQuestion)
                                return (
                                    <div style={{ paddingTop: "1rem" }} key={indx.toString()}>
                                        <Animate
                                            play={true}
                                            duration={1}
                                            start={{
                                                transform: "translateX(-30rem)",
                                            }}
                                            end={{ transform: "translateX(0)" }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: "2.5rem",
                                                    lineHeight: "2.5rem",
                                                    paddingBottom: "3rem",
                                                }}
                                                className="text-center"
                                            >
                                                {question}
                                            </div>
                                        </Animate>
                                        <div
                                            className="pt-5"
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-around",
                                            }}
                                        >
                                            {answers.map((answer, i) => (
                                                <Animate
                                                    key={i.toString()}
                                                    play={true}
                                                    duration={0.5}
                                                    delay={i * 0.2}
                                                    start={{
                                                        opacity: 0,
                                                    }}
                                                    end={{ opacity: 1 }}
                                                >
                                                    <div
                                                        style={{ fontSize: "4.5rem" }}
                                                        onClick={() => whileAnswered(answer)}
                                                    >
                                                        {String.fromCodePoint(answer)}
                                                    </div>
                                                </Animate>
                                            ))}
                                        </div>
                                    </div>
                                );
                            return false;
                        })}
                    </div>
                </div>
            </div>
        );
    };
    // const renderTackPage = () => {};

    if (page === "users") {
        return (
            <div>
                {users.map((user, i) => {
                    return (
                        <div
                            key={i.toString()}
                            style={{
                                marginTop: 10,
                                padding: 10,
                                borderWidth: 1,
                                borderStyle: "solid",
                                borderColor: "grey",
                            }}
                            onClick={() => handlePage("question")}
                        >
                            <Icon name="user secret" color={colors[user.colorIndx]} /> {user.name} {user.lastName}
                        </div>
                    );
                })}
            </div>
        );
    } else if (page === "question") {
        return renderQuestionPage();
    } else {
        return (
            <div className="rainbow">
                <h1
                    className="d-flex flex-column justify-content-around align-items-center h-100 text-secondary"
                    style={{ fontSize: "8rem" }}
                >
                    TACK!
                </h1>
                ;
            </div>
        );
    }
}

// import React from "react";

// function App2() {
//   return (
//     <>
//       {/* animate individual element. */}
//       <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }} duration={2}>
//         <h1>React simple animate</h1>
//       </Animate>

//       {/* animate keyframes with individual element. */}
//       <AnimateKeyframes
//         play
//         iterationCount="infinite"
//         keyframes={["opacity: 0", "opacity: 1"]}
//       >
//         <h1>React simple animate with keyframes</h1>
//       </AnimateKeyframes>

//       {/* animate group of animation in sequences */}
//       <AnimateGroup play>
//         <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
//           first
//         </Animate>
//         <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
//           second
//         </Animate>
//         <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
//           third
//         </Animate>
//       </AnimateGroup>
//     </>
//   );
// }

export default App;
// export default App2;
