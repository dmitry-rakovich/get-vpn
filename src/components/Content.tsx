import Image from 'next/image'

export default function Content() {
    return (
        <div className='content'>
            <h1 className='content__title'>
                Access <span className='color-blue'>everything<br />securely</span> with<br />VPN
            </h1>
            <Image
                src="/main-image.svg"
                alt="Main image"
                width={540}
                height={210}
                priority
            />
            <a href='#form' className='content__btn btn-primary'>Get VPN</a>
            <Image
                src="/trusted-by.svg"
                alt="Trusted by 50M+ users"
                width={136}
                height={42}
                priority
            />
            <div className="info">
                <div className='info__item'>
                    <Image
                        src="/locations.svg"
                        alt="Locations"
                        width={24}
                        height={24}
                        priority
                    />
                    <div className='info__description'>
                        <span className='info__number'>50+</span>
                        <span className='info__text'>Locations</span>
                    </div>
                </div>
                <div className='info__separator'></div>
                <div className='info__item'>
                    <Image
                        src="/servers.svg"
                        alt="Servers"
                        width={24}
                        height={24}
                        priority
                    />
                    <div className='info__description'>
                        <span className='info__number'>1000+</span>
                        <span className='info__text'>Servers</span>
                    </div>
                </div>
            </div>
            <p className='content__text'>
                VPN-your <span className='color-blue'>ultimate</span> solution for a private and secure online experience!
            </p>
        </div>
    )
}