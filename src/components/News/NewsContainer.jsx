
import React from 'react';
import { connect } from 'react-redux';
import News from './News';




class NewsContainer extends React.Component {

    render() {
    return (
        <News {...this.props} news = {this.props.news} />

        

    )
    }

}
const mapStateToProps = (state) => ({
    news : state.newsPage.newsData
    

} )
export default connect(mapStateToProps , {}
    )(NewsContainer);

