import { Languages } from "../Enum";

export class LabelDB {
  key: string;
  value: string;
  languageID: Languages;

  constructor(_key?: string, _value?: string, _languageID?: Languages) {
    this.key = _key;
    this.value = _value;
    this.languageID = _languageID;
  }
}
