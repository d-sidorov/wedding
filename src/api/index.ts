import { db } from "./firebase";
import {
  Firestore,
  collection,
  addDoc,
  DocumentData,
} from "firebase/firestore";

interface IGuest {
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

  async mutate(input: DocumentData) {
    try {
      const res = await addDoc(collection(this._db, this._table), input);
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default new Api();
