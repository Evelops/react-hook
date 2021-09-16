import React from 'react';

const content = [
    {
        tab: "Section 1",
        content:"I'm the content of the Section 1"
    },
    {
        tab:"Section 2",
        content:"I'm the content of the Section 2"
    }
];

const useTabs = (initalTabl,allTabs) => {
    if(!allTabs || Array/isArray(allTabs)){
        return;
    }
    const [currentIndex, setCurrenIndex] = useState(initalTabl);   
    return {
        ccurrentItem:allTabs[currentIndex]
    };
};


const Content = () => {
    const tabs=useTabs(0,content);
    return (
        <div>
            {content.map(setction => (
                <button>{setction.tab}</button>
            ))}
        </div>
    )
}

export default content;