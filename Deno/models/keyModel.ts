export class KeyModel {
  key: String;
  value: String;
  languageID: String;
  error: String;
  constructor(_key: String, _value: String, _languageID: String, _error: String="") {
    this.key = _key;
    this.value = _value;
    this.languageID = _languageID;
    this.error=_error;
  }
}
