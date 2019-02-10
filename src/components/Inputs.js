import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArchives } from "../actions/index";
import { bindActionCreators } from "redux";

class Input extends Component {
  render() {
    return (
      <div className="inputs">
        <label htmlFor="">
          Start Year:
          <input
            onChange={this.props.setYearStart}
            type="number"
            name="quantity"
            min="1900"
            max="2010"
            step="1"
          />
        </label>
        {this.props.showYearEnd ? (
          <label htmlFor="">
            End Year
            <input
              onChange={this.props.setYearEnd}
              type="number"
              name="quantity"
              min={this.props.yearStart}
              max="2018"
              step="1"
            />
          </label>
        ) : null}
        <button
          className="button"
          onClick={() => {
            this.props.fetchArchives(this.props.yearStart, this.props.yearEnd);
          }}
        >
          Search archives
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArchives }, dispatch);
}

const mapStateToProps = state => {
  return {
    archives: state.archives,
    isError: state.error,
    isLoading: state.loading
  };
};

// export default Input;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
