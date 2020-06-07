import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import { colors } from "../../global";

export const Thanks = styled.p`
font-family: 'menloregular';
font-size: 3rem;
color: ${colors.red};
text-align: center;
margin: 3rem 0;
`

export const FormContainer = styled.div`
margin: 13rem auto 0 auto;
width: 55%;
`
export const SubmitButton = styled.button`
font-family: 'menloregular';
font-weight: 700;
color: ${colors.grey};
padding: 1rem 1.5rem;
border: 2px solid ${colors.grey};
cursor: pointer;
border-radius: 3px;
margin: 2rem auto;
width: max-content;
display: block;
background-color: transparent;
&:hover {
    box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.75);
}
&:active {
    box-shadow: none;
    background-color: ${colors.grey};
    color: white;
}
`

export const FormTitle = styled.h1`
font-family: 'menloregular';
font-size: 3.5rem;
color: ${colors.grey};
margin-bottom: 2rem;
font-weight: 400;
`

export const useStyles = makeStyles({
    name: {
     width: '47.3%',
    },
    rightMargin: {
        marginRight: '2.7%'
    },
    fontSize: {
        fontSize: '1.3rem'
    },
    widthEmailandMessage: {
        width: '97.6%'
    }
  });
