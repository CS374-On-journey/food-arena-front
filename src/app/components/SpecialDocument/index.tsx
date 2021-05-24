import * as React from 'react';
import styled from 'styled-components/macro';

import HighlightedSpan from './HighlightedSpan';

const dict = {
    "buckwheat": "Buckwheat sort of tastes like wheat. It's definitely grainy, but it's not overpowering. However, buckwheat is a tad bit stronger than wheat with a nutty flavor.",
    "Monaka":"Monaka is a Japanese sweet made of azuki bean paste sandwiched between two thin crisp wafers made from mochi.",
    "Wagyu":"Japanese beef cattle.",
    "miso":"Soybean paste.",
    "kimchi":"Kimchi, a staple in Korean cuisine, is a traditional side dish of salted and fermented vegetables, such as napa cabbage and Korean radish, made with a widely varying selection of seasonings including gochugaru (chili powder), spring onions, garlic, ginger, and jeotgal (salted seafood), etc."
}

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
            for(const key of Object.keys(dict))
            {
                found=true;
                let keys = key.split(' ');
                for(let k=0; k<keys.length; k++)
                {
                    found = found && ( filter(keys[k]) == filter(words[j+k]) )
                }
                if(found) {
                    found_keys = keys;
                    found_content = dict[key];
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