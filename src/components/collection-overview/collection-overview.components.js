import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { CollectionOverviewContainer } from "./collection-overview.styles";




const CollectionOverview = ({collections}) => (
    <CollectionOverviewContainer className='collection-overview'>
        {
            collections.map(({ id, ...collectionProps }) => (
                <CollectionPreview
                    key={id}
                    {...collectionProps}
                />
            ))
        }
    </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionOverview);


