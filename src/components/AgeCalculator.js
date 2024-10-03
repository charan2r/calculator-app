import React, { useState } from 'react';

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [age,setAge] = useState('');

    const calculateAge = () => {
        if(birthDate){
            const today = new Date();
            const birth = new Date(birthDate);
            let age = today.getFullYear() - birth.getFullYear();
            const monthdiff = today.getMonth() - birth.getMonth();
            
            if(monthdiff < 0 || (monthdiff === 0 && today.getDate() < birth.getDate())){
                age--;
            }
            setAge(age);
        }
    };

    return(
        <div className='bg-gray-100 p-5 rounded-md shadow-md max-w-sm mx-auto mt-5'>
            <h2 className="text-xl font-bold mb-4 text-center">Age Calculator</h2>
            <input 
                type='date'
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className='border p-2 w-full mb-4'
            />
            <button onClick={calculateAge} className='bg-green-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-green-700'>Calculate Age</button>
            {age !== null && (<div className='mt-4 text-xl'>Your age is {age}</div>)}
        </div>
    )
}

export default AgeCalculator;