/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Component1 from './components/Component1.jsx';

var tree = {
    title: "American Government System",
    childNodes: [
        {title: "Legislative", childNodes: [
            {title: "Congress", childNodes: [
                {title: "Agencies"}
            ]}
        ]},
        {title: "Executive", childNodes: [
            {title: "President", childNodes: [
                {title: "Cabinet"},
                {title: "Exec Office Of The President"},
                {title: "Vice-president"},
                {title: "Independent Agencies", childNodes: [
                    {title: "Agriculture"},
                    {title: "Commerce"},
                    {title: "Defense"},
                    {title: "Education"},
                    {title: "......"}
                ]}
            ]}
        ]},
        {title: "Judicial", childNodes: [
            {title: "Supreme Court", childNodes: [
                {title: "Lower Courts"}
            ]}
        ]}
    ]
};

ReactDom.render(
    <Component1 node={tree}/>,
    document.getElementById('content')
);