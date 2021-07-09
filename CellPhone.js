export class CellPhone {
  constructor(callingCard) {
    this._callingCard = callingCard;
    this._callActive = false;
    this._callTime = 0;
    this._callHistory = "";
  }

  isTalking() {
    return this._callActive;
  }

  call(phoneNumber) {
    if (this._callHistory !== "") {
      this._callHistory = this._callHistory + `, ${phoneNumber} `;
    } else {
      this._callHistory = this._callHistory + `${phoneNumber} `;
    }

    this._callActive = true;
  }

  tick() {
    this._callTime++;

    if (this._callingCard._minutes > 1) {
      this._callingCard._minutes--;
    } else {
      this._callActive = false;
        if (this._callTime > 1) {
          this._callHistory = this._callHistory + `(cut off at ${this._callTime} minutes)`;
        } else {
          this._callHistory = this._callHistory + `(cut off at 1 minute)`;
        }
      this._callingCard._minutes = 0;
    }

  }

  endCall(){
    this._callActive = false;
    if (this._callTime > 1) {
      this._callHistory = this._callHistory + `(${this._callTime} minutes)`;
    } else {
      this._callHistory = this._callHistory + `(1 minute)`;
    }
    this._callTime = 0;
  }
  
  getHistory(){
    return this._callHistory;
  }

}


