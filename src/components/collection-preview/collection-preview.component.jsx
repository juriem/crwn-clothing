import React from 'react';

import CollectionItem from "../collection-item/collection-item.component";
import {
    CollectionPreviewContainer,
    CollectionPreviewItemsContainer,
    CollectionTitle
} from "./collection-preview.styles";

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer className='collection-preview'>
        <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
        <CollectionPreviewItemsContainer>
            {
                items
                    .filter((item, index) => index < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                ))
            }
        </CollectionPreviewItemsContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;