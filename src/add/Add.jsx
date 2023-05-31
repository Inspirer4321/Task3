import React from "react";

const Add = () => {
    const [numb, setNumb] = React.useState([1, 2, 3])

    function addBtn() {
        setNumb([...numb, numb.length + 1]);
    }

    return (
        <div className="add">
            <ul className="add-ul">
                {numb.map((num, index) => (
                    <li key={index} className="add-li">item {num}</li>
                ))}
            </ul>
            <button className="add-btn" onClick={addBtn}>Add</button>
        </div>
    );
};

export default Add;