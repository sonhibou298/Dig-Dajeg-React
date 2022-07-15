import React from 'react';
import styled from "styled-components";
import docteur from "../public/images/docteur.jpg"

const A_Propos = () => {

    return (
        <Wrapper>
            <div className="container-fluid">
            <Brand className="row">
                <Image className="col-md-6 col-lg-6 col-md-12">
                   <img src={docteur}/>
                </Image>
                <Paragraph className="col-md-6 col-lg-6 col-md-12">
                   <h1>Chifaa Dig-daje</h1>
                   <h3>Digitalisez les dossiers médicaux. Gérez vos patients, votre activité et vos rendez-vous. Gagnez en productivité en optimisant les taches médico-administratives. Personnalisable selon la spécialité ou le besoin. Facile d’accès et stockage sécurisé.

                       Créer un écosystème de soins interconnecté. Projet sur mesure adapté à vos besoins. Cas clients : cabinets médicaux, centres de soins, unités, cliniques, hôpitaux
                   </h3>
                </Paragraph>
            </Brand>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background: #F5F6FA;
    margin-top: 10px;
`
const Brand = styled.div`
`
const Image = styled.div`
  img{
      width: 100%;
      height: 100%;
      margin-left: 10%;
      margin-right: 10%;
  }
`
const Paragraph = styled.div`
    h1{
      margin-left: 10%;
      font-size: medium;
    }
    h3{
      width: 735.75px;
      height: 360px;
      left: 704.16px;
      top: 1004px;

      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 198.5%;
    }
`
export default A_Propos;