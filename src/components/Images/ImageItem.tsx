import React from 'react';
import { IImage } from 'types/types';

interface IImageItemProps {
    imageData: IImage;
}

function ImageItem(props: IImageItemProps) {
    return (
        <div>
            <div>
                <img src={ props.imageData.imageURL } />
            </div>
            <div>
                { props.imageData.summary }
            </div>
        </div>
    );
}

export default ImageItem;