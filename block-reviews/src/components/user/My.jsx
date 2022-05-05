import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import UserForm from "./sections/UserForm__My";
import ReviewForm from "./sections/ReviewForm__My";
import { GetReviewByUser } from "../../api/review";
import { GetBalance, getNftUri } from "../../api/contract";
import Spinner from "../Utils/Spinner";

function My(props) {
    const [SpinnerFlag, setSpinnerFlag] = useState(false);
    const [UserInfo, setUserInfo] = useState(null);
    const [BRC_Balance, setBRC_Balance] = useState(0);
    const [ETH_Balance, setETH_Balance] = useState(0);
    const [ReviewData, setReviewData] = useState(null);

    useEffect(async() => {
        let user = JSON.parse(localStorage.getItem('user'));
        setUserInfo(user);
        const res = await GetReviewByUser(user.accountPublicKey);
        if(res.data.success){
            setReviewData(res.data.payload);
        }

        const BRC_Balance = await GetBalance(user.accountPublicKey);
        if(BRC_Balance.status === 200){
            setBRC_Balance(BRC_Balance.data.balance);
        }
    }, []);

    const handleFaucet = async() => {
        console.log("Faucet");
        const res = await getNftUri("33");
        console.log(res);
    }

    return (
        <BigContainer>
            {
                SpinnerFlag?
                <Spinner/>
                :
                <>
                    <FaucetBtn onClick={handleFaucet}>🚰 수도꼭지</FaucetBtn>
    
                    { UserInfo &&
                        <UserForm user={UserInfo} BRC_Balance={BRC_Balance}/>}
                
    
                    <ReviewForm review={ReviewData} setSpinnerFlag={setSpinnerFlag} />
                </>
            }
       
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