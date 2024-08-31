import Image from 'next/image'

type Props = {
    imageURL: string,
    imegeAlt: string,
    blueText: string,
    orangeText: string,
    text: string
}

export default function BenefitItem({ blueText, orangeText, text, imageURL, imegeAlt }: Props) {
    return (
        <div className='benefits__item'>
            <Image
                src={imageURL}
                alt={imegeAlt}
                className='benefits__icon'
                width={103}
                height={50}
                priority
            />
            <h2 className='benefits__title'>
                <span className='color-orange'>{orangeText}</span><br /><span className='color-blue'>{blueText}</span>
            </h2>
            <p className='benefits__description'>{text}</p>
        </div>
    )
}