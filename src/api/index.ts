import { db } from "./firebase";
import { Firestore, collection, addDoc } from "firebase/firestore";

import questions from "../components/Quiz/questions";

interface IFormInput {
  beverages: [string];
  event: string;
  name: string;
  overnight_stay: string;
  presence: string;
}

class Api {
  private _db: Firestore;
  private _table: string;

  constructor() {
    this._db = db;
    this._table = "guests";
  }

  async mutate(input: IFormInput) {
    try {
      const newInput = {};
      for (let key in input) {
        newInput[key] = this.getAnswer(key, input[key]);
      }

      const res = await addDoc(collection(this._db, this._table), newInput);
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  private getAnswer(questionKey: string, answer: string | string[]) {
    const question = questions.find(
      (question) => question.value === questionKey
    );
    const answers = question?.answers as { title: string; value: string }[];
    if (Array.isArray(answer)) {
      return answer
        .map((item) => this.getAnswerTitle(answers, item))
        .join(", ");
    } else {
      return this.getAnswerTitle(answers, answer);
    }
  }

  private getAnswerTitle(
    answers: { title: string; value: string }[],
    answer: string
  ) {
    return (
      answers?.find((variable) => variable.value === answer)?.title || answer
    );
  }
}

export default new Api();
