import { connect } from 'react-redux';
import {compose} from 'redux';
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.components";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;