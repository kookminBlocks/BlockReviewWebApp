import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import {
  getNftUri,
  getNftData,
  createLiked,
  adminPubKey,
} from "../../../api/contract";

function StoreReview(props) {
  const [modalReview, reviewChanged] = useState(null);
  const [modalShow, modalChanged] = useState(false);
  const [ntfUrl, UrlChanged] = useState();
  const [nftData, nftDataChanged] = useState();

  const ipfsUrl = "http://3.38.183.241/ipfs/";
  const handleClose = () => modalChanged(false);
  const handleShow = () => modalChanged(true);

  const Review_Clicked = async (item) => {
    reviewChanged(item);
    if (item.nftId != null) {
      const res = await getNftUri(item?.nftId);
      const hash = res.data;
      UrlChanged(ipfsUrl + hash);
      const dt_res = await getNftData(ntfUrl);
      console.log(dt_res);
      nftDataChanged(dt_res.data);
    }
    handleShow();
  };

  const Btn_Liked_Click = async (review) => {
    // 유저정보읽기
    let user = JSON.parse(localStorage.getItem("user"));
    const postDt = {
      reviewId: review.id,
      admin: adminPubKey,
      amount: 100,
      pubkey: user.accountPublicKey,
      privatekey: user.accountPrivateKey,
    };
    let res = await createLiked(postDt);
    if (res?.status == 200) {
      alert("좋아요 성공~");
      props.like_click();
    } else {
      alert(`좋아요 실패 ${res.data}`);
    }
  };

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
              props.review.map((item, idx) => (
                <Tbody_tr
                  id={item.id}
                  key={idx}
                  onClick={() => Review_Clicked(item)}
                >
                  <Tbody_td>{item.id}</Tbody_td>
                  <Tbody_td>
                    <img
                      style={{ height: "100px", width: "100px" }}
                      src={item.thumbnail}
                    />{" "}
                  </Tbody_td>
                  <Tbody_td>{item.title}</Tbody_td>
                  <Tbody_td>{item.description}</Tbody_td>
                  <Tbody_td>
                    <div className="d-flex">
                      {item.liked.length}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          Btn_Liked_Click(item);
                        }}
                        style={{ fontSize: "35px", cursor: "pointer"  }}
                      >
                        👍
                      </div>
                    </div>
                  </Tbody_td>
                  <Tbody_td>{item.sale ? "판매중" : "X"}</Tbody_td>
                </Tbody_tr>
              ))}
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
          <div>
            <h3>NFT 이미지</h3>
            <img
              style={{ height: "130px", width: "450px", objectFit: "cover" }}
              alt={"nftImage"}
              src={ipfsUrl + nftData?.image}
            />
          </div>
          <div>
            <a href={ntfUrl}>NFT 주소로 이동!</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
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

const Thead_tr = styled.tr``;

const Thead_td = styled.td`
  padding: 5px;
`;

const Tbody = styled.tbody``;

const Tbody_tr = styled.tr`
  :hover {
    cursor: pointer;
    background-color: aliceblue;
  }
`;

const Tbody_td = styled.td``;
