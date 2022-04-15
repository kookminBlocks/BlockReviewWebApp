import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import UserForm from "./sections/UserForm__My";
import ReviewForm from "./sections/ReviewForm__My";
import { GetReviewByUser } from "../../api/review";

function My(props) {
    const [UserInfo, setUserInfo] = useState(null);
    const [BRC_Balance, setBRC_Balance] = useState(0);
    const [ETH_Balance, setETH_Balance] = useState(0);
    
    const garaData = [
        {idx : 1, title: "TestGara", description: "testGara", price: 0, earned: 150},
        {idx : 2, title: "TestGara", description: "testGara", price: 100, earned: 150},
        {idx : 3, title: "TestGara", description: "testGara", price: 0, earned: 150},
        {idx : 4, title: "TestGara", description: "testGara", price: 200, earned: 150},
    ]

    useEffect(async() => {
        let user = JSON.parse(localStorage.getItem('user'));
        setUserInfo(user);
        const result = await GetReviewByUser(user.accountPublicKey);
        console.log(result);
    }, []);

    const handleFaucet = () => {
        console.log("FauCET API");
    }

    return (
        <BigContainer>
            <>
                <FaucetBtn onClick={handleFaucet}>🚰 수도꼭지</FaucetBtn>
            </>
            {/* USER DATA */}
            {UserInfo &&
                <UserForm user={UserInfo} />
            }

            {/* REVIEWS */}
                <ReviewForm review={garaData} />
    </BigContainer>
    )
}

export default My;

const BigContainer = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`

const FaucetBtn = styled.button`
    border-radius: 25px;
    background-color: white;
    border: 1px solid lightgray;
    font-size: 22px;
    padding: 25px;
    margin-bottom: 1em;
    :hover{
        background-color: whitesmoke;
        cursor: pointer;
    }
`;