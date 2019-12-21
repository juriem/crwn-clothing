import React from 'react';

import { withRouter } from 'react-router-dom';

import {
    BackgroundImageContainer,
    ContentContainer,
    MenuItemContainer,
    SubTitleContainer,
    TitleContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <MenuItemContainer className={`${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
            <ContentContainer className='content'>
                <TitleContainer>{title.toUpperCase()}</TitleContainer>
                <SubTitleContainer>SHOP NOW</SubTitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    )
};

export default withRouter(MenuItem);