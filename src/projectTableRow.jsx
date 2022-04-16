import React from 'react';

const ProjectTableRow = ({data,width}) => {
    console.log(data)
    return (
        <div style={{display:'flex'}}>
            <div style={{width:width[0]}}>
                <a>{data.A}</a>
            </div>
            <div style={{width:width[1]}}>
                {data.B}
            </div>
            <div style={{width:width[2]}}>
                {data.C}
            </div>
            <div style={{width:width[3]}}>
                {data.D}
            </div>
            <div style={{width:width[4]}}>
                {data.E}
            </div>            
        </div>
    );
};

export default ProjectTableRow;