import { useEffect, useState } from "react";
import Image from 'next/image'

type Props = {
    name: string,
    setModalOpen: (value: boolean) => void
}

export default function Modal({ name, setModalOpen }: Props) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.checkValidity()) {
            setError(true)
        }
        setEmail(e.target.value);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    useEffect(() => {
        console.log(email);
        if (emailRegex.test(email)) {
            setError(false)
        } else {
            setError(true)
        }
    }, [email]);

    return (
        <div className='modal'>
            <div className="modal__content">
                <button onClick={handleCloseModal} className="modal__close">
                    <Image
                        src="/close.svg"
                        alt="close icon"
                        width={16}
                        height={16}
                        priority
                    />
                </button>
                <h2 className='modal__title'>your name</h2>
                <p className='modal__name'>{name}</p>
                <input
                    className={error ? 'modal__input modal__input--error' : 'modal__input'}
                    onChange={handleEmailChange}
                    value={email}
                    type="email"
                    required
                    placeholder="Enter your email"
                />
                <p className="modal__secure-text">
                    <Image
                        src="/secure.svg"
                        alt="secure icon"
                        className='benefits__icon'
                        width={16}
                        height={16}
                        priority
                    />
                    <span>Your information is 100% secure. We don’t share your personal information.</span>
                </p>
                <button disabled={error} className="btn-primary">Continue</button>
            </div>
        </div>
    )
}