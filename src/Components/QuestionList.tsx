import React, { useEffect } from "react";

export interface IQuestionListProps {}

function QuestionList(props: IQuestionListProps): JSX.Element {
  useEffect(() => {
    //fetch data
    fetch(
      "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=react"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>faiz</div>;
}

export default QuestionList;
