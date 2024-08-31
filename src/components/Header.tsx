import Image from 'next/image'

export default function Header() {
    return (
        <header className='header'>
            <a href='#' className='header__logo'>
                <Image
                    src="/logo.svg"
                    alt="Get VPN Logo"
                    width={30}
                    height={30}
                    priority
                />
                <span>VPN</span>
            </a>
            <a href='#form' className='header__btn'>Get VPN</a>
        </header>
    )
}