import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionOverview from "../../components/collection-overview/collection-overview.components";

import './shoppage.styles.scss';
import CollectionPage from "../collection/collection.component";
import PropTypes from "prop-types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";


class ShopPage extends React.Component {

    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collections);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapShot();
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        );
    }
}

ShopPage.propTypes = { match: PropTypes.any };

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(
    null,
    mapDispatchToProps)
(ShopPage);