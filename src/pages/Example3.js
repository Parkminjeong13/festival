import React, { useState } from 'react'
import Example3_ from './../components/Example3'
import { styled } from 'styled-components';

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 100px auto;
    padding: 0 2%;
    flex-wrap: wrap;
    cursor: pointer;
`
const ContentItem = styled.div`
    display: flex;
    justify-content: space-around;
    flex-basis: 32.5%;
    border: 1px solid #ddd;
    padding: 20px;
`


function Example3() {

    const [data, setData] = useState(Example3_);
    const [animal, setAnimal] = useState("전체");

    const [gender, setGender] = useState("전체");

    const FilterAnimal = data.filter(e =>{

        let isAnimal = animal === "전체" || e.animal === animal;
        let isGender = gender === "전체" || e.gender === gender;
        return isAnimal && isGender

        // return (animal === "전체" ? e.animal : e.animal === animal)
        // if(animal === "전체"){
        // return e.animal
        // }else{
        // return e.animal === animal
        // }
    })

    const filterCate = [...new Set(data.map(e => e.animal))];
    const filterGender = [...new Set(data.map(e => e.gender))];



    // const dataFilter = data.filter(e =>{
    //     if(animal === "전체"){
    //         return e.animal
    //     }else{
    //         return e.animal === animal
    //     }
    // })


    // const FiltereAnimal = [...new Set(data.map(e=> e.animal))];

    
  return (
    <>
        <div>
            <ul>
                <li>전체</li>
                {
                    filterCate.map((e,i)=>{
                        return (
                            <li key={i} onClick={()=>{setAnimal(e)}}>{e}</li>
                        )
                    })
                }
            </ul>
            <ul>
                <li>전체</li>
                {
                    filterGender.map((e,i)=>{
                        return (
                            <li key={i} onClick={()=>{setGender(e)}}>{e}</li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            <ul>
                {
                    FilterAnimal.map((e,i) =>{
                        return (
                            <li key={i}>{e.animal} - {e.gender} - {e.height}</li>
                        )
                    })
                }
            </ul>
            
        </div>
        {/* <ul>
            <Content>
                <li onClick={()=>{setAnimal("전체")}}>전체</li>
                {
                    FiltereAnimal.map((e,i)=>{
                        return (
                            <li key={i} onClick={()=>setAnimal(e)}>{e}</li>
                        )
                    })
                }
            </Content>
        </ul>
        {
            dataFilter.map((el,i)=>{
                return (
                    <ContentItem key={i}>
                        <p>{el.id}</p>
                        <p>{el.animal}</p>
                        <p>{el.gender}</p>
                        <p>height: {el.height}</p>
                    </ContentItem>
                )
            })
        } */}
    </>
  )
}

export default Example3