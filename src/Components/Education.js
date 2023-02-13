import React from 'react';
import "../Styles/Education.css";

const Education = () => {
  return (
    <div className='education'>
      <table className='education-table'>
        <thead>
            <tr>
                <th className='Degree'>Degree</th>
                <th className='Department'>Department</th>
                <th className='Institutes'>Institutes</th>
                <th className='Year'>Year</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>b.com</td>
                <td>Accounting</td>
                <td>SPU College</td>
                <td>2022</td>
            </tr>
            <tr>
                <td>HSC</td>
                <td>Commerce</td>
                <td>DMB. Govt. School</td>
                <td>2020</td>
            </tr>
            <tr>
                <td>SSC</td>
                <td>General</td>
                <td>LS.JD Accedmi Mharashtra</td>
                <td>2018</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Education
