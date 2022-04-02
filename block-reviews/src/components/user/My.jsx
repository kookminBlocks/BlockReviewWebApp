import React from 'react';
import styled from "styled-components";
import UserForm from "./sections/UserForm__My";
import ReviewForm from "./sections/ReviewForm__My";

function My(props) {
    const garaData = [
        {idx : 1, title: "TestGara", description: "testGara", price: 0, earned: 150},
        {idx : 2, title: "TestGara", description: "testGara", price: 100, earned: 150},
        {idx : 3, title: "TestGara", description: "testGara", price: 0, earned: 150},
        {idx : 4, title: "TestGara", description: "testGara", price: 200, earned: 150},
    ]


    return (
        <BigContainer>
            {/* USER DATA */}
                <UserForm />



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