import React from 'react';

const Table = ({header,width,rows}) => {

    return (
    <>
        <div style={{display:'flex'}}>
            {header.map((column,index)=>(
                <div style={{width:width[index]
                    }}>
                    {column.name}
                </div>
            ))}
        </div>
        <div>
            {rows.map((row)=>row)}
        </div>
    </>
    );
};

export default Table;
