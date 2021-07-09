export class CallingCard {
  constructor(centsPerMinute){
    this._centsPerMinute = centsPerMinute;
    this._minutes = 0;
  }

  addDollars(dollars){

    this._minutes = Math.floor((dollars * 100) / this._centsPerMinute);
  }

  getRemainingMinutes() {
    return this._minutes;
  }

  useMinutes(minutesUsed) {
    if(this._minutes - minutesUsed < 0){
      this._minutes = 0;
    } else {
      this._minutes -= minutesUsed;
    }
    
  }

}


