import React from 'react'
import styled from "styled-components";

function Detail(props) {
    const garaData = [
        { "id": 1, title: "Test", description: "Test Description", date: "2022-01-21", writer: "Kookmin" },
        { "id": 2, title: "Test", description: "Test Description", date: "2022-01-21", writer: "Kookmin" },
        { "id": 3, title: "Test", description: "Test Description", date: "2022-01-21", writer: "Kookmin" }
    ]
    return (
        <div style={{ padding: "10px" }}>

            {/* 헤더 */}
            <div style={{ display: "flex" ,justifyContent: "space-between" }}>
                <div style={{ fontSize: "22px", paddingTop: "10px"}}>{garaData[0].title}</div>
                <div style={{ fontSize: "10px", color: "gray"}}>
                    <div>{garaData[0].id}</div>
                    <div>{garaData[0].writer}</div>
                    <div>{garaData[0].date}</div>
                </div>
            </div>

            <hr />

            {/* 본문 */}
            <div>
                {garaData[0].description}
            </div>

            <div style={{ display: "flex", flexDirection:"column", position : "fixed", bottom: "15px", right: "15px" }}>
                <button>좋아요👍</button>
                <button>구매하기</button>
            </div>

        </div>
    )
}

export default Detail;