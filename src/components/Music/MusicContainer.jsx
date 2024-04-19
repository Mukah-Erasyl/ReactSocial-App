
import React from 'react';
import { connect } from 'react-redux';
import Music from './Music';




class MusicContainer extends React.Component {

    render() {
    return (
        <Music {...this.props} music = {this.props.music} />

        

    )
    }

}
const mapStateToProps = (state) => ({
    music : state.musicPage.musicData
    

} )
export default connect(mapStateToProps , {}
    )(MusicContainer);

