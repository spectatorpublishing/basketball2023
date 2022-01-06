import React from 'react';
import styled from 'styled-components';
import LineTo from 'react-lineto';



const Lines = ({ last_index, mobile }) => {
    console.log(last_index)
    return (
        <div>
            {!mobile && <LineTo from="A" to="A" fromAnchor="20% 0" toAnchor="20% bottom" delay={10} zIndex={1} borderColor="white" />
            }
            { mobile && <LineTo from="A" to="A" fromAnchor="20% 30%" toAnchor="20% bottom" delay={10} zIndex={1} borderColor="white" />}
            <LineTo from="A" to="A" fromAnchor="20% bottom" toAnchor="80% bottom" delay={10} zIndex={1} borderColor="white" />
            <LineTo from="B" to="B" fromAnchor="80% top" toAnchor="80% bottom" delay={10} zIndex={1} borderColor="white" />
            <LineTo from="C" to="C" fromAnchor="80% top" toAnchor="80% 30%" delay={10} zIndex={1} borderColor="white" />
            <LineTo from="C" to="C" fromAnchor="80% 30%" toAnchor="20% 30%" delay={10} zIndex={1} borderColor="white" />
            { !mobile && (<LineTo from="C" to="C" fromAnchor="20% 30%" toAnchor="20% bottom" delay={10} zIndex={1} borderColor="white" />)}
            { !mobile && (<LineTo from="C" to="D0" fromAnchor="20% bottom" toAnchor="40% 40%" delay={10} zIndex={1} borderColor="white" />)}
            { mobile && <LineTo from="C" to="C" fromAnchor="80% 30%" toAnchor="80% bottom" delay={10} zIndex={1} borderColor="white" />}
            { mobile && <LineTo from="D0" to="D0" fromAnchor="80% top" toAnchor="80% bottom" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && <LineTo from="C" to="D0" fromAnchor="20% bottom" toAnchor="40% 40%" delay={10} zIndex={1} borderColor="white" />}
            {
                !mobile && ([...Array(last_index + 1).keys()].map((index) => {
                    if (index % 4 == 0 && !mobile) {
                        return <LineTo from={"D" + index} to={"D" + (index + 1)} fromAnchor="40% 40%" toAnchor="55% 40%" delay={10} zIndex={1} borderColor="white" />
                    } else if (index % 4 == 1) {
                        return <LineTo from={"D" + index} to={"D" + (index + 2)} fromAnchor="55% 40%" toAnchor="55% 40%" delay={10} zIndex={1} borderColor="white" />
                    } else if (index % 4 == 2) {
                        return <LineTo from={"D" + index} to={"D" + (index + 2)} fromAnchor="40% 40%" toAnchor="40% 40%" delay={10} zIndex={1} borderColor="white" />
                    } else if (index % 4 == 3) {
                        return <LineTo from={"D" + index} to={"D" + (index - 1)} fromAnchor="55% 40%" toAnchor="40% 40%" delay={10} zIndex={1} borderColor="white" />
                    }
                }))
            }
            {/* { !mobile && <LineTo from={"D0"} to={"D1"} fromAnchor="40% 40%" toAnchor="55% 40%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && <LineTo from={"D1"} to={"D3"} fromAnchor="40% 40%" fromAnchor="55% 40%" toAnchor="55% 40%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && <LineTo from={"D2"} to={"D4"} fromAnchor="40% 40%" fromAnchor="40% 40%" toAnchor="40% 40%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && <LineTo from={"D3"} to={"D2"} fromAnchor="40% 40%" fromAnchor="55% 40%" toAnchor="40% 40%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && <LineTo from={"D4"} to={"D5"} fromAnchor="40% 40%" toAnchor="55% 40%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && <LineTo from={"D5"} to={"D7"} fromAnchor="40% 40%" fromAnchor="55% 40%" toAnchor="55% 40%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && <LineTo from={"D6"} to={"D8"} fromAnchor="40% 40%" fromAnchor="40% 40%" toAnchor="40% 40%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && <LineTo from={"D7"} to={"D6"} fromAnchor="40% 40%" fromAnchor="55% 40%" toAnchor="40% 40%" delay={10} zIndex={1} borderColor="white" />} */}

            {
                mobile && [...Array(last_index + 1).keys()].map((index) => {
                    return <LineTo from={"D" + index} to={"D" + (index + 1)} fromAnchor="80% 40%" toAnchor="80% 40%" delay={10} zIndex={1} borderColor="white" />
                })
            }
            { !mobile && (last_index % 2 == 0) && <LineTo from={"D" + (last_index)} to="Nav" fromAnchor="40% 40%" toAnchor="20% 0%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && (last_index % 4 == 1) && <LineTo from={"D" + (last_index)} to="Nav" fromAnchor="55% 40%" toAnchor="77.5% 0%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && (last_index % 4 == 3) && <LineTo from={"D" + (last_index - 1)} to="Nav" fromAnchor="40% 40%" toAnchor="20% 0%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && (last_index == 2) && <LineTo from={"D" + 1} to="D1" fromAnchor="50% 50%" toAnchor="50% 135%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && (last_index == 2) && <LineTo from={"D" + 2} to="D2" fromAnchor="40% 35%" toAnchor="148.7% 35%" delay={10} zIndex={1} borderColor="white" />}
            { !mobile && (last_index % 4 == 3) && <LineTo from={"D" + (last_index - 1)} to="Nav" fromAnchor="40% 40%" toAnchor="20% 0%" delay={10} zIndex={1} borderColor="white" />}
            { mobile && <LineTo from={"D" + (last_index - 1)} to="Nav" fromAnchor="80% 40%" toAnchor="80% 0%" delay={10} zIndex={1} borderColor="white" />}
        </div>
    );
};
export default Lines