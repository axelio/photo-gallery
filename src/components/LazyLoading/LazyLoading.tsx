import React, { useRef, useState } from 'react';
import { LazyLoadingProps } from './types';
import './LazyLoading.css';

const LazyLoading: React.FC<LazyLoadingProps> = ({ className, items }) => {
    const [loadedItemsNumber, setLoadedItemsNumber] = useState(3);

    const loadMoreBtnRef = useRef<HTMLDivElement>(null);

    const loadMoreItems = () => {
        setLoadedItemsNumber(prev => prev + 3);
        setTimeout(() => {
            if (loadMoreBtnRef.current)
                window.scrollTo({ top: loadMoreBtnRef.current.offsetTop, left: 0, behavior: 'smooth' });
        }, 0);
    }

    const shouldShowLoadMore = loadedItemsNumber < items.length;
    return (
        <>
            <div className={`lazyLoading ${className}`}>
                {items.slice(0, loadedItemsNumber)}
            </div>
            <div ref={loadMoreBtnRef}>
                {shouldShowLoadMore &&
                    <>
                        <div onClick={loadMoreItems} className='loadMoreBtn'>show more</div>
                    </>
                }
            </div>
        </>
    )
}

export default LazyLoading;