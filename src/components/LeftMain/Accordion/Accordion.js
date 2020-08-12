import React, { Component } from 'react';
import { AccordionItemTitle, CollapsableContent, AccordionContainerStyled, Links } from './AccordionStyles';
import { AiOutlineEye } from "react-icons/ai";
import ITEMS from '../../../constants';

class Accordion extends Component {
    state = {
        settings: [{ id: "1", open: false }, { id: "2", open: false }, { id: "3", open: false }, { id: "4", open: false }, { id: "5", open: false }]
    }

    handleClick = id => {
        // if (this.state.settings.some())
        this.setState(state => ({
            ...state,
            settings: state.settings.map(item =>
                item.id === id ? { ...item, open: !item.open } : item
            )
            //write logic for changing color
        }))
    }

    render() {
        const { settings } = this.state;
        return (
            <>
                {ITEMS.map(item =>
                    (
                        <AccordionContainerStyled key={item.id}>
                            <AccordionItemTitle onClick={() => this.handleClick(item.id)}>
                                <p><span><AiOutlineEye /></span>{item.title}</p> <p>{item.technologies}</p>
                            </AccordionItemTitle>
                            <CollapsableContent open={settings.find(items => items.id === item.id).open}>
                                <p>{item.description}</p>
                                <Links>
                                    <a rel="noopener noreferrer" target="_blank" href={item.liveURL}>Live demo</a>
                                    <a rel="noopener noreferrer" target="_blank" href={item.codeURL}>Code</a>
                                </Links>
                            </CollapsableContent>
                        </AccordionContainerStyled>
                    )
                )}
            </>
        )
    }
}

export default Accordion