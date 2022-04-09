import React from 'react'
import styled, { keyframes } from "styled-components";

function Spinner(props) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <ComponentBox>
            <div style={{ width: "100%", height: "100%" }}>
                <Img src="https://mblogthumb-phinf.pstatic.net/20130103_280/palge_1357195239957l6bf9_JPEG/ed-058.jpg?type=w2" />
            </div>
        </ComponentBox>
        <div style={{ fontWeight: "700", zIndex: 5, textAlign: "center", marginTop: "1em" }}>잠시만 기다려주세요... 🙂</div>
        </div>
    )
}

export default Spinner;


const Spin = keyframes`
    to {
        -webkit-transform: rotateY(360deg);
    }
`;

const ComponentBox = styled.div`
    width: 250px;
    height: 250px;
    overflow: hidden;
    contain: cover;
    user-select: none;
    animation-name: ${Spin};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
