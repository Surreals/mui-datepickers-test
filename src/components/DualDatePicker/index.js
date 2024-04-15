import React from "react";
import DatePicker from "material-ui/DatePicker";

class TwoDatePickers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDate: null,
      secondDate: null,
      initialSecondDate: null,
    };
  }

  handleFirstDateChange = (event, date) => {
    const { secondDate } = this.state;
    this.setState({
      firstDate: date,
      initialSecondDate: secondDate ? null : new Date(date.getFullYear(), date.getMonth()),
    });
  };

  handleSecondDateChange = (event, date) => {
    this.setState({
      secondDate: date,
      initialSecondDate: null,
    });
  };

  render() {
    const { firstDate, secondDate, initialSecondDate, keySecondDatePicker } = this.state;

    return (
      <div>
        <DatePicker autoOk hintText="Select first date" onChange={this.handleFirstDateChange} value={firstDate} />
        <DatePicker
          key={keySecondDatePicker}
          autoOk
          formatDate={initialSecondDate ? () => "" : void 0}
          hintText="Select second date"
          onChange={this.handleSecondDateChange}
          value={initialSecondDate || secondDate}
        />
      </div>
    );
  }
}

export default TwoDatePickers;
