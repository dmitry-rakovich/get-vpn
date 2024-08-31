import Image from 'next/image'


type Props = {
    names: string[],
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NameList({ names, onNameChange }: Props) {

    return (
        <div className="form__options">
            {names.map((name) => (
                <label className='form__label' key={name}>
                    <input
                        type="radio"
                        name="name"
                        value={name}
                        onChange={onNameChange}
                        required
                    />
                    <div className="form__radio"></div>
                    <span>{name}</span>
                </label>
            ))}
        </div>
    )
}
