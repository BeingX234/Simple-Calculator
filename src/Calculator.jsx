import './App.css';
import { useState } from "react";

export default function Calculator() {
    
    const [result, setResult] = useState(0);


    let handleBtnClick = (e) => {
        setResult(result + e.target.value)
    };

    let handlePercentClick = () => setResult(result/100)

    let handleACClick = () => setResult(0)

    let handleDelClick = () => {
        var str = result.toString();
        if(str.length === 1)
            str = 0;
        else
            str = str.substring(0, str.length-1);
        setResult(str)
    }

    const handleNumClick = (e) => 
    {
        if(e.target.value != 0){
            if(result === 0)
                setResult(e.target.value);
            else
                setResult(result + e.target.value)
        }
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }

    return (
        <div className='content-space'>
            <div className='container'>
                <h3 className='name'>SORASU</h3>
                <div className='result-bar'>
                    <div id='result'>{result}</div>
                </div>
                <div className='btn-area'>
                    <button className='other-btn' onClick={handleACClick}>
                        AC
                    </button>
                    <button className='other-btn' onClick={handleDelClick}>
                        Del
                    </button>
                    <button className='other-btn' onClick={handlePercentClick}>
                        %
                    </button>
                    <button className='calculate-btn' onClick={handleBtnClick} value='/'>
                        /
                    </button>
                    <button className='number-btn' onClick={handleNumClick} value="7">
                        7
                    </button>
                    <button className='number-btn' onClick={handleNumClick} value="8">
                        8
                    </button>
                    <button className='number-btn' onClick={handleNumClick} value="9">
                        9
                    </button>
                    <button className='calculate-btn' onClick={handleBtnClick} value='*'>
                    &times;
                    </button>
                    <button className='number-btn' onClick={handleNumClick} value='4'>
                        4
                    </button>
                    <button className='number-btn' onClick={handleNumClick} value='5'>
                        5
                    </button>
                    <button className='number-btn' onClick={handleNumClick} value='6'>
                        6
                    </button>
                    <button className='calculate-btn' onClick={handleBtnClick} value='-'>
                        -
                    </button>
                    <button className='number-btn' onClick={handleNumClick} value='1'>
                        1
                    </button>
                    <button className='number-btn' onClick={handleNumClick} value='2'>
                        2
                    </button>
                    <button className='number-btn' onClick={handleNumClick} value='3'>
                        3
                    </button>
                    <button className='calculate-btn' onClick={handleBtnClick} value='+'>
                        +
                    </button>
                    <button id='zero-btn' className='number-btn' onClick={handleNumClick} value='0'>
                        0
                    </button>
                    <button className='calculate-btn' onClick={handleBtnClick} value='.'>
                        ,
                    </button>
                    <button className='calculate-btn' onClick={calculate} > 
                        =
                    </button>
                </div>
                
            </div>
        </div>
    )
}
