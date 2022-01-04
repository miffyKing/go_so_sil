import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

// Sending Message 부분
function ChatSearch({onSearchKeySubmit}) {

    const [ MsgState, setMsgState ] = useState("")

    const onMsgChange = (e) => {
      //  console.log(e.target.value)
		setMsgState(  e.target.value )
        console.log("RRRRR" , MsgState);
	}

	const onMsgSubmit = (e) => {
    e.preventDefault();    //buffer 정리 느낌 그냥 쓰기
    onSearchKeySubmit(MsgState); //msgstata에 저장한 키워드를 onsekesubmit함수에넣어서
    // console.log("sssss" , MsgState);
    //console.log(e);
    // 8주차 실습 구현
    }

return(
    <Form onSubmit={onMsgSubmit}>
        <TextField
            name="keyword"
            onChange={(e) => onMsgChange(e)} 
            value={MsgState}
            id="outlined-multiline-static"
            variant="outlined"
            label="Keyword"
            
            />
        <Button>Search</Button>
    </Form>
)
}

const Form = styled.form`
// display: flex;
// flex-direction: column;
// border: 3px solid #ffffdf;
// border-radius: 20px;
// background-color: #ffffdf;
// box-shadow : 0px 0px 20px gray;
`;


const Button = styled.button`
margin-top: 16px;
padding: 6px;
background-color: white;
border-color: #c8a951;
border-radius: 5px;

`;

export default ChatSearch;