import * as React from 'react';
import styled from 'styled-components/macro';
import { specialKeyDictionary } from './Dictionary';

import HighlightedSpan from './HighlightedSpan';

const Span = styled.span`
    line-height:200%;
`

interface PropsType{
    text:string,
}

export default function SpecialDocument(props:PropsType) {
    const {text} = props;
    const filter = (x:string) => {
        return x.toLowerCase().trim().replace(/[^a-zA-Z1-90 ]+/g, '');
    }

    let lines = text.split('\n');
    let document = new Array<any>();
    for(let i=0; i<lines.length; i++)
    {
        let buffer = "";
        let words = lines[i].split(' ');
        let elems = new Array<any>();
        for(let j=0; j<words.length; j++)
        {
            let found = true;
            let found_keys;
            let found_content;
            for(const key of Object.keys(specialKeyDictionary))
            {
                found=true;
                let keys = key.split(' ');
                for(let k=0; k<keys.length; k++)
                {
                    found = found && ( filter(keys[k]) == filter(words[j+k]) )
                }
                if(found) {
                    found_keys = keys;
                    found_content = specialKeyDictionary[key];
                    break;
                }
            }

            if(found)
            {
                elems.push( (<Span>{buffer}</Span>) )
                buffer = "";
                elems.push( (<HighlightedSpan content={found_content} text={words.slice(j, j+found_keys.length).join(' ')} />) )
                j += found_keys.length - 1;
            }
            else
            {
                buffer += words[j] + ' ';
            }
        }

        elems.push( (<Span>{buffer}</Span>) )
        buffer = "";

        document.push( (<p>{elems}</p>))
    }

    console.log(document, lines, text)

    return (
        <>
        {document}
        </>
    )
}