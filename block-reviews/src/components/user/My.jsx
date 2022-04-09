import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Spinner from "../Utils/Spinner";
import UserForm from "./sections/UserForm__My";
import ReviewForm from "./sections/ReviewForm__My";

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

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        setUserInfo(user);
        // console.log(web3.eth.getBalance(user.accountPublicKey));
    }, []);

    return (
        <BigContainer>
            <Spinner />
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