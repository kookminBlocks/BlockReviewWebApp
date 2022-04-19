import React, { useState } from 'react';
import styled from "styled-components";
import {Modal, Button} from 'react-bootstrap'

function StoreReview(props) {
    const [modalReview, reviewChanged] = useState(null);
    const [modalShow, modalChanged] = useState(false);

    const handleClose = () => modalChanged(false);
    const handleShow = () => modalChanged(true);

    console.log(props.review);

    const Review_Clicked = (item) => {
        reviewChanged(item);
        handleShow();
    }
    return (
        <>
            <Box>
                <Table>
                    {/* HEAD */}
                    <Thead>
                        <Thead_tr>
                            <Thead_td>ID</Thead_td>
                            <Thead_td>썸네일</Thead_td>                            
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
                            <Tbody_tr id={item.id} key={idx} onClick={() => Review_Clicked(item)}>
                                <Tbody_td>{item.id}</Tbody_td>
                                <Tbody_td><img style={{height:"100px", width:"100px" }} src={item.thumbnail}/> </Tbody_td>
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

            <Modal
                show={modalShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title> {modalReview?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalReview?.description}
                    <h3>NFT 정보</h3>
                    {modalReview?.nftId}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>                
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default StoreReview;

const Box = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;    
`;

const Table = styled.table`    
    border: 2px solid black;        
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