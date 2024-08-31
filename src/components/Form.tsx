'use client'
import { useEffect, useState } from 'react';
import NameList from './NameList';
import { getNames } from '@/utils';
import Modal from './Modal';
import useModalScroll from '@/hooks';

export default function Form() {

    const [names, setNames] = useState<string[]>([]);
    const [selectedName, setSelectedName] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useModalScroll(isModalOpen);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedName(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedName) {
            setIsModalOpen(true);
        }
    };

    useEffect(() => {
        getNames().then(setNames);
    }, []);

    return (
        <>
            {names.length ? (
                <form id='form' className='form' onSubmit={handleSubmit}>
                    <h2 className='form__title'>
                        Choose <span className='color-blue'>your name</span>
                    </h2>
                    <NameList names={names} onNameChange={handleNameChange} />
                    <button className='form__btn btn-primary' type="submit">Get VPN</button>
                </form>
            ) : <h2>Loading...</h2>
            }
            {isModalOpen && <Modal name={selectedName} setModalOpen={setIsModalOpen} />}
        </>
    );
}