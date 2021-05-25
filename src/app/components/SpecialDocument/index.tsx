import * as React from 'react';
import styled from 'styled-components/macro';

import HighlightedSpan from './HighlightedSpan';

const dict = {
    "Wolfgang's Steakhouse": 'Upscale chophouse chain serving dry-aged steaks, seafood & wine in an elegant setting.',
    "slab":'a thick, flat piece of a solid substance, such as stone, wood, metal, food, etc., that is usually square or rectangular:',
    'USDA':'미국 농무부(美國 農務部, United States Department of Agriculture, USDA) 혹은 농무부는 농지 개발, 농업, 임업, 축산업, 식품에 대한 정책 담당하는 미국 연방 행정부의 부처이다. 농부나 축산업 근로자의 수요를 조절하고, 식품의 안전을 책임지기 위해 미국의 농산물과 축산물의 생산과 무역과 관리하고 자연환경 보호와 미국 농촌과 해외의 기아의 대책 정책을 담당하고 있다.',
    'Robertson Quay':'Everyone heads to Clarke Quay for a good time – if you’re looking to get sloshed, or party it up in a mega club, this is the place to be. But if you prefer a more chilled ambience, Robertson Quay is your go-to spot. Located along the beautiful Singapore River, it’s got all you need, including cafes, restaurants, bars and gorgeous hotels (because we all love a staycay). Yes, there are some touristy traps with mediocre food, and a particular patch known as ‘expat Disneyland’ (you’ll know what we mean when you see it), but here’s where the good stuff is…',
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