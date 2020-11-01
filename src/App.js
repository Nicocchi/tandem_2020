import React, { useEffect } from "react";
import { getQuestions } from "./redux/actions";
import { connect } from "react-redux";
import { Switch, withRouter } from "react-router-dom";
import routes from "./Routes";
import { Header } from "./components";

function App(props) {
    const { getQuestions } = props;
    useEffect(() => {
        getQuestions();
        return () => {};
    }, [getQuestions]);

    return (
        <div className="App">
            <Header />
            <Switch>{routes}</Switch>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        questions: state.gameReducer.questions,
    };
};

export default connect(mapStateToProps, { getQuestions })(withRouter(App));
