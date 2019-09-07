import { dateHelper } from './DateHelper';

const HORIZON_BUFFER = 1000;
const HORIZON_BUFFER_ALERT = 750;

export class DataController {
  lowerLimit: number;
  upperLimit: number;
  _dataToRender: any;

  newPosition: number;
  dayWidth: number;
  lowerDataLimit: number;
  upperDataLimit: number;

  // 由外部动态注入
  onHorizonChange: Function;

  constructor() {
    this.lowerLimit = 0;
    this.upperLimit = 0;
    this._dataToRender = [];
  }

  initialise = (start, end, newPosition, dayWidth) => {
    this.newPosition = newPosition;
    this.dayWidth = dayWidth;
    this.setLimits(start, end);
    this.loadDataHorizon();
  };

  //OnScroll
  setStartEnd = (start, end, newPosition, dayWidth) => {
    this.newPosition = newPosition;
    this.dayWidth = dayWidth;
    if (this.needData(start, end)) {
      this.setLimits(start, end);
      this.loadDataHorizon();
    }
  };

  needData = (start, end) => {
    return start < this.lowerDataLimit || end > this.upperDataLimit;
  };

  setLimits = (start: number, end: number) => {
    this.lowerLimit = start - HORIZON_BUFFER;
    this.lowerDataLimit = start - HORIZON_BUFFER_ALERT;
    this.upperLimit = end + HORIZON_BUFFER;
    this.upperDataLimit = end + HORIZON_BUFFER_ALERT;
  };

  //OnScroll
  loadDataHorizon = () => {
    const lowerLimit = dateHelper.pixelToDate(this.lowerLimit, this.newPosition, this.dayWidth);
    const upLimit = dateHelper.pixelToDate(this.upperLimit, this.newPosition, this.dayWidth);
    this.onHorizonChange(lowerLimit, upLimit);
  };
}
