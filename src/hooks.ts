import { useEffect } from 'react';

const useModalScroll = (isOpen: boolean) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
};

export default useModalScroll;