import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionOverview from "../../components/collection-overview/collection-overview.components";

import './shoppage.styles.scss';
import CollectionPage from "../collection/collection.component";
import PropTypes from "prop-types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get()
            .then(snapshot => {
                const collections = convertCollectionsSnapshotToMap(snapshot);
                updateCollections(collections);
                this.setState({
                    loading: false
                })
            });

    }

    componentWillUnmount() {
        this.unsubscribeFromSnapShot();
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`}
                       render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
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