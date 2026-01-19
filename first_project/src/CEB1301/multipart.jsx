import React, { Component } from "react";

class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
      index: 0,
    };
  }

  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };

  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;

    return (
      <div>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part1</h1>
          <input
            type="text"
            placeholder="First Name"
            value={t1}
            onChange={(e) => this.setState({ t1: e.target.value })}
          /><br /> <br />

          <input
            type="text"
            placeholder="Last Name"
            value={t2}
            onChange={(e) => this.setState({ t2: e.target.value })}
          /><br /> <br />

          <input
            type="text"
            placeholder="Mobile Number"
            value={t3}
            onChange={(e) => this.setState({ t3: e.target.value })}
          /><br /> <br />
        </div>

        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part2</h1>

          Gender:
          <label>
            <input
              type="radio"
              value="Male"
              checked={t4 === "Male"}
              onChange={(e) => this.setState({ t4: e.target.value })}
            /> Male
          </label>

          <label>
            <input
              type="radio"
              value="Female"
              checked={t4 === "Female"}
              onChange={(e) => this.setState({ t4: e.target.value })}
            /> Female
          </label>   

          <label>
            <input
              type="radio"
              value="Other"
              checked={t4 === "Other"}
              onChange={(e) => this.setState({ t4: e.target.value })}
            /> Other <br />
          </label>
          <br />

          <input
            type="text"
            placeholder="City"
            value={t5}
            onChange={(e) => this.setState({ t5: e.target.value })}
          /><br /> <br />

            <input type="checkbox" value="CSE" onChange={(e) => this.setState({ state6: e.target.checked ? "CE" : "" })}  />CE
                    <input type="checkbox" value="IT"  onChange={(e) => this.setState({ state6: e.target.checked ? "IT" : "" })}  />IT
                    <br/><br/>
        </div>

        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part3</h1>

          <input
            type="color"
            value={t7}
            onChange={(e) => this.setState({ t7: e.target.value })}
          /><br /> <br />

          <input
            type="date"
            value={t8}
            onChange={(e) => this.setState({ t8: e.target.value })}
          /><br /> <br />

          <textarea
            placeholder="About You"
            value={t9}
            onChange={(e) => this.setState({ t9: e.target.value })}
          />
        </div> <br />

        <div>
          <button disabled={index === 2} onClick={this.onclicknext}>Next</button>
          <button disabled={index === 0} onClick={this.onclickprevious}>Previous</button>
        </div>

        <div>
          <div>{t1}</div>
          <div>{t2}</div>
          <div>{t3}</div>
        </div>

        <div>
          <div>{t4}</div>
          <div>{t5}</div>
          <div>{t6}</div>
        </div>

        <div>
          <div>{t7}</div>
          <div>{t8}</div>
          <div>{t9}</div>
        </div>
      </div>
    );
  }
}

export default MultiPart;