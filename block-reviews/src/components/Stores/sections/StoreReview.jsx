import React from 'react';
import styled from "styled-components";

function StoreReview(props) {

    const route = (e) => {
        console.log(e.currentTarget);
        console.log(`NAVI TO item.id`)
    }
    return (
        <>
            <Box>
                <Table>
                    {/* HEAD */}
                    <Thead>
                        <Thead_tr>
                            <Thead_td>ID</Thead_td>
                            <Thead_td>Title</Thead_td>
                            <Thead_td>Description</Thead_td>
                            <Thead_td>liked</Thead_td>
                            <Thead_td>sale</Thead_td>
                        </Thead_tr>
                    </Thead>
                    {/* BODY */}
                    <Tbody>
                        {props.review &&
                        props.review.map((item, idx)=> (
                            <Tbody_tr id={item.id} key={idx} onClick={route}>
                                <Tbody_td>{item.id}</Tbody_td>
                                <Tbody_td>{item.title}</Tbody_td>
                                <Tbody_td>{item.description}</Tbody_td>
                                <Tbody_td>{item.liked.length}</Tbody_td>
                                <Tbody_td>{item.sale ? "판매중":"X"}</Tbody_td>
                            </Tbody_tr>
                        ))
                        }
                    </Tbody>
                </Table>
            </Box>
        </>
    )
}

export default StoreReview;

const Box = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Table = styled.table`
    width: 80%;
    height: 100%;
    border: 2px solid black;
    overflow-y: scroll;
    user-select: none;
`;

const Thead = styled.thead`
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Thead_tr = styled.tr`

`;

const Thead_td = styled.td`
    padding: 5px;
`;

const Tbody = styled.tbody`

`;

const Tbody_tr = styled.tr`
    :hover{
        cursor: pointer;
        background-color: aliceblue;
    }
`;

const Tbody_td = styled.td`

`;