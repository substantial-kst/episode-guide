import React from "react";

interface Props {
    guests: string[];
}

const GuestStars:React.FC<Props> = ({ guests }) => {
    if (!(guests && guests.length > 0)) {
        return <></>
    } else {
        return (
            <>
                <h2>Guest Starring:</h2>
                <ul>
                    {guests.map((guest: string, i: number) => (
                        <li key={i}>{guest}</li>
                    ))}
                </ul>
            </>
        )
    }
};

export default GuestStars