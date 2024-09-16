import React, { useState } from "react";

export default function App() {
  const persons = ["Ahmet", "Mehmet", "Osman", "Mert"];

  // if(persons.length > 0 ) {

  // }

  // const cars = ['BMW','MERCEDES', 'FORD'];
  // console.log(cars[1])

  // const [bmw, mercedes, ford] = ['BMW','MERCEDES', 'FORD'];


  const person = {
    sacRengi: 'Siyah',
    yasi: '20',
    evlimi: 'evet',
    'spor yapiyor mu': 'Hayır',
    selamla: function() {
        console.log('Merhaba')
    }
  }

  const {yasi, selamla} = person

 

  return (
    <div>
      <ul>

        {/* ternary */}
        {persons && persons?.length > 0 && <div>
          {
            // persons?.map((item,index) => (
            //   <li>
            //     {item}
            //   </li>
            // ))

            persons?.map((item,index) => {
              if(item != 'Osman') {
                return (
                  <li>
                   {item}
                 </li>
                 )
              } else {
                return (
                  <li>Engellendi [Osman]</li>
                )
              }
           
            })
          }  
        </div>}

        {!persons && (
        <div>
          Data Yok
        </div>
        )}


        {/* {
          age >= 18 ? (
            <>
              <button>Kaydet</button>
            </>
          ) : 'HAYIR'
        } */}


          {
            yasi
          }

      </ul>
    </div>
  );
}
