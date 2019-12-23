import React from 'react';
import PropTypes from "prop-types";
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import './shoppage.styles.scss';





import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {

    componentDidMount() {
        this.props.fetchCollections()
    }

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );
    }
}

ShopPage.propTypes = { match: PropTypes.any };


const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
    null,
    mapDispatchToProps)
(ShopPage);