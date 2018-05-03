import App from "../components/App";
import { connect } from "react-redux";

// action creator を読み込む
import { minus, plus } from "../actions";

const mapStateToProps = state => {
  return {
    number: state
  };
};

// action creator を使用
const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch(plus(num));
    },
    minus: num => {
      dispatch(minus(num));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
